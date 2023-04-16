/**********************************************
**               EJERCICIO 1                 **
**********************************************/
console.log('\nEjercicio 1');
let nombre = 'Carlos'
console.log(`Hola, ${nombre}`);

/**********************************************
**               EJERCICIO 2                 **
**********************************************/
console.log('\nEjercicio 2');
let edad = 23;
if (edad >= 18)
{
  console.log('Eres mayor de edad');
} 
else
{
  console.log('Eres menor de edad');
}

// variante:
edad >= 18 ? console.log('Eres mayor de edad') : console.log('Eres menor de edad');

/**********************************************
**               EJERCICIO 3                 **
**********************************************/
console.log('\nEjercicio 3');
const numeros = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < 5; i++) {
  suma += numeros[i];
}
console.log(suma);

/**********************************************
**               EJERCICIO 4                 **
**********************************************/
console.log('\nEjercicio 4');
function multiplicar(a, b){
  return a * b;
}
console.log(`3x5=${multiplicar(3, 5)} y 7x9=${multiplicar(7, 9)}`);

/**********************************************
**               EJERCICIO 5                 **
**********************************************/
console.log('\nEjercicio 5');
const nombres = ['Ana', 'Maria', 'Pedro', 'Andrés'];
for (let i = 0; i < nombres.length; i++)  console.log(nombres[i]);
// cuando hay una sola expresión o sentencia no es necesario usar {} 

/**********************************************
**               EJERCICIO 6                 **
**********************************************/
console.log('\nEjercicio 6');
function esPar(x){
  x % 2 === 0 ? console.log(`${x} es par`) : console.log(`${x} es impar`);
}

esPar(2);
esPar(5);
esPar(10);

/**********************************************
**               EJERCICIO 7                 **
**********************************************/
console.log('\nEjercicio 7');
const edades = [12, 34, 56, 76, 89];
suma = 0; // declarada en línea 27
for (let i = 0; i < edades.length; i++){
  suma += edades[i];
}
let promedio = suma / edades.length;
console.log(promedio);

/**********************************************
**               EJERCICIO 8                 **
**********************************************/
console.log('\nEjercicio 8');
function esPrimo(x){
  for(let i = 2; i < x; i++){
    if (x % i === 0) 
    {
      console.log(`${x} no es primo.`)
      return;
    }
  }
  console.log(`${x} es primo`);
}

esPrimo(7);
esPrimo(10);
esPrimo(13);
/**********************************************
**               EJERCICIO 9                 **
**********************************************/
console.log('\nEjercicio 9');
const frutas = ['manzana', 'kiwi', 'pera', 'piña', 'arándanos'];
for (let i = 0; i < frutas.length; i++) if (frutas[i][0] === 'p') console.log(frutas[i]);

/**********************************************
**               EJERCICIO 10                **
**********************************************/
console.log('\nEjercicio 10');
function esPalindromo(word) {
  word = word.trim();
  const intermedia = Array.from(word);
  const enOrden = Array.from(word); 
  const reverso = enOrden.reverse();

  console.log(intermedia, reverso);
  if (intermedia.join('') === reverso.join('')) {
    console.log(`${word} es un palíndromo`);
  } else {
    console.log(`${word} no es un palíndromo`);
  }
}

//& ********** VERSIÓN 2 *************
function esPalindromo(word){
  const enOrden = Array.from(word.trim()).join('');
  const reverso = Array.from(word.trim()).reverse().join('');
  console.log(enOrden === reverso ? `${word} es un palíndromo` : `${word} no es un palíndromo`);
}

esPalindromo('auto');
esPalindromo('oso');
esPalindromo('anna');

//& ******** VERSION FOR loop *********
function esPalindromo(word){

  for(let i = 0; i < word.length; i++){                   // ciclo desde 0 hasta la cantidad de letras de la palabra menos 1
    // console.log(word[i], word[word.length - (i+1)]);
    if (word[i] !== word[word.length - (i+1)]) {          // si una letra es distinta a su exactamente opuesta 
      console.log(word + ' no es palíndromo');            // aviso que no es palíndromo
      return;                                             // Se termina la ejecución haciendo return
    }
  }                                                       // aca termina el ciclo, todas las letras fueron comparadas y eran 
  console.log(word + ' si es palindromo');                // iguales, así que se avisa que si es palindromo.
}

//& ******* VERSIÓN MINIMALISTA ********
function esPalindromo(word){   
  const a = Array.from(word).join('') === Array.from(word).reverse().join('');
  return a ? 'si es palindromo' : 'no es palindromo'; 
}

let word1 = 'auto';
let word2 = 'oso';

console.log(word1 + ' ' + esPalindromo(word1));
console.log(word2 + ' ' + esPalindromo(word2));

// console.log(`${word1} ${esPalindromo(word1) ? 'si' : 'no'} es palíndromo.`);
// console.log(`${word2} ${esPalindromo(word2) ? 'si' : 'no'} es palíndromo.`);
//** ==========  FIN EJERCICIOS  ===========*/
