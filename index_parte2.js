/**********************************************
**              EJERCICIO 2.1                **
**********************************************/
function esPar(num){
  return !!(!(num % 2));
}
console.log(esPar(11));
console.log(esPar(12));

/**********************************************
**              EJERCICIO 2.2                **
**********************************************/
const nombres = ['Juan','Ana', 'Pedro', 'BEnito'];
for (let i = 0; i < nombres.length; i++) if (nombres[i][0] === 'A') console.log(nombres[i]);

/**********************************************
**              EJERCICIO 2.3                **
**********************************************/
function mayorDeEdad(edad) {
  return (edad >= 18 );
}
console.log(mayorDeEdad(19));
console.log(mayorDeEdad(13));

/**********************************************
**              EJERCICIO 2.4                **
**********************************************/
const numeros = [1, 2, 3, 7, 87, 20];
let suma = 0;
for(let i = 0; i < numeros.length; i++) {
  if (!!(numeros[i] % 2)) {
    suma += numeros[i];
  }
}

console.log(suma);
/**********************************************
**              EJERCICIO 2.5                **
**********************************************/
function palindromo(word) {
  return Array.from(word).join('') === Array.from(word).reverse().join('');
}

console.log(palindromo('auto'));
console.log(palindromo('oso'));

/**********************************************
**              EJERCICIO 2.6                **
**********************************************/
const notas = [1, 10, 6, 7, 8, 4];
for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) console.log(notas[i]);   // tambien sirve inline sin {}
}

/**********************************************
**              EJERCICIO 2.7                **
**********************************************/
function factorial(x) {
  let fac = 1;
  for(let i = 1; i <= x; i++){
    fac *= i;
  }
  console.log(fac);
}

factorial(10);
factorial(4);

/**********************************************
**              EJERCICIO 2.8                **
**********************************************/
const edades = [12, 23, 45, 67, 78, 100];
for (let i = 0; i < edades.length; i++){
  if (edades[i] >= 18) {
    console.log('Hay al menos una persona mayor de edad');
    break;
  }
}

/**********************************************
**              EJERCICIO 2.9                **
**********************************************/
function invertirPalabra(word) {
  return Array.from(word).reverse().join('');
}

// VERSION CON LOOP FOR
function invertirPalabra(word) {
  console.log('controlando funcion v2.0');
  let reversa = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversa += word[i];
  }
  return reversa;
}
console.log(invertirPalabra('javascript'));


/**********************************************
**              EJERCICIO 2.10               **
**********************************************/
const numeros2 = [12, 34, 56, 76, 89];
let sumar = 0;
for (let i = 0; i < numeros2.length; i++){
  sumar += numeros2[i];
}
let promedio = sumar / numeros2.length;
console.log(promedio);
