/**********************************************
**           FUNCIONES UTILITARIAS           **
**********************************************/



const saltaLn = () => console.log('\n')
saltaLn();
const indice = x => console.log(`***** EJERCICIO ${x} *****`);
/**********************************************
**               EJERCICIO 1                 **
**********************************************/
indice(1);
const numMayor = arr => arr.sort((a, b) => a-b).pop();
const data = [10, 3, 25, 6, 32, 8];
console.log(`El número mayor entre ${[...data]} es ${numMayor(data)}`); // 32
saltaLn();

/**********************************************
**               EJERCICIO 3                 **
**********************************************/
indice(3);
const objetos = [{nombre: 'Juanito', edad: 34}, {nombre: 'Ana', edad: 56}, {nombre: 'Roberto', edad: 43}];
objetos.forEach(e => console.log(`${e.nombre} tiene ${e.edad} años.`));
saltaLn();


/**********************************************
**               EJERCICIO 2                 **
**********************************************/
indice(2);
const toUpper = (word) => word.toUpperCase();
let str = 'CadeNa LoCA';
console.log(`Al normalizar ${str} nos queda: ${toUpper(str)}`);
saltaLn();

/**********************************************
**               EJERCICIO 4                 **
**********************************************/
indice(4);
function sumaHasta(num) {
  let accum = 0;
  for(let i = 1; i <= num; i++){
    accum += i;
  }
  return accum;
}
let numero = 5;
console.log(`La suma de los numeros hasta el ${numero} es: ${sumaHasta(5)}`);
saltaLn();

/**********************************************
**               EJERCICIO 5                 **
**********************************************/
indice(5);
console.log('Ejercicio realmente extraño:')
switch(2){
  case 2:
    for (let i = 1; i < 11; i++) {
      console.log(`2*${i} = ${2*i}`)
    }
  }
saltaLn();

/**********************************************
**               EJERCICIO 6                 **
**********************************************/
indice(6);
//! EN DIRECTORIO EJERCICIO-6-ADIVINA-NUMERO
saltaLn();
/**********************************************
**               EJERCICIO 7                 **
**********************************************/
indice(7);
const nuevoArr = (arr, edad) => arr.filter(e => e.edad >= edad);
// se utiliza el objeto del ejercicio 2
const arregloFinal = nuevoArr(objetos, 35);
console.log(arregloFinal);
saltaLn();

/**********************************************
**               EJERCICIO 8                 **
**********************************************/
indice(8);
//! EN DIRECTORIO EJERCICIO-8-NUMERO-AZARS
saltaLn();

/**********************************************
**               EJERCICIO 9                 **
**********************************************/
indice(9);
const obtenPares = arr => arr.filter(e => e % 2 === 0);
const setNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Los números pares en el set ${[...setNumeros]} son: ${obtenPares(setNumeros)}`);
saltaLn();

/**********************************************
**               EJERCICIO 10                 **
**********************************************/
indice(10);
const factorial = max => {
  let resultado = 1;
  for (let i = 1; i <= max; i++) resultado *= i;
  return resultado; 
}
let valor = 4;
console.log(`El valor factorial de ${valor + 0} es: ${factorial(valor + 0)}.`);
console.log(`El valor factorial de ${valor + 1} es: ${factorial(valor + 1)}.`);
console.log(`El valor factorial de ${valor + 2} es: ${factorial(valor + 2)}.`);
console.log(`El valor factorial de ${valor + 3} es: ${factorial(valor + 3)}.`);
console.log(`El valor factorial de ${valor + 4} es: ${factorial(valor + 4)}.`);
saltaLn();