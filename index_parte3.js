/**********************************************
**                  EJERCICIO 1              **
**********************************************/
console.log('\nEjercicio 1 - Calcula area triángulo')

const areaTriangle = (h, b) => ( h * b ) / 2;

console.log(areaTriangle(3,8));   // 12
/**********************************************
**                  EJERCICIO 2              **
**********************************************/
console.log('\nEjercicio 2 - Calcula velocidad promedio')

const velocMedia = (dist, time) => dist / time;

console.log(velocMedia(100, 2));    // 2 (hrs?)
/**********************************************
**                  EJERCICIO 3              **
**********************************************/
console.log('\nEjercicio 3 - Calcula valor final inversión');
const valorFinal = (cap, int, time) => Math.round(cap * (1 + time * (int / 100)));
const data = {cap: 15000, int: 24, time: 1.5};
console.log(`El valor final de ${data.cap} a ${data.int}% anual durante ${data.time} años es: $${valorFinal(data.cap, data.int, data.time)}.`);


/**********************************************
**                  EJERCICIO 4              **
**********************************************/
console.log('\nEjercicio 4 - Calcule costo crédito')
const costoPrestamo = (capital, tasa, cuotas) => {
  tasaMes = (tasa / 100) / 12;
  valorCuota = (capital * tasaMes) / (1 - (1 + tasaMes) ** -cuotas);
  return Math.round(valorCuota * cuotas);
}

let capital = 1000000;
let tasaAnual = 20;
let cuotas = 60;

const valorFormato = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'CLP'}).format(costoPrestamo(capital, tasaAnual, cuotas));
console.log(`El costo de un crédito de capital $${capital} en ${cuotas} cuotas con tasa ${tasaAnual}% es: $${valorFormato}.`);
// CHECKED: Intl.NumberFormat() funciona en browser y Node
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// https://stackoverflow.com/questions/5731193/how-to-format-numbers
// https://calcuonline.com/calculadoras/calculadora-prestamos/
/**********************************************
 **                  EJERCICIO 5              **
 **********************************************/
console.log('\nEjercicio 5 - suma los digitos de un numero (Versión string)');

const sumaDigitos = n => n.toString().split('').reduce((a, b) => Number(a) + Number(b));

console.log('34 = ', sumaDigitos('34'));   // 7
console.log('1234 = ', sumaDigitos('1234')); // 10
/**********************************************
**                  EJERCICIO 6              **
**********************************************/
console.log('\nEjercicio 6 - calcula promedio sobre arreglo')

const calcProm = arr => arr.reduce((a, b) => a + b) / arr.length;

console.log(calcProm([1, 2, 3, 4]))   // 2.5
/**********************************************
**                  EJERCICIO 7              **
**********************************************/
console.log('\nEjercicio 7 - calcula desviación estándar')

const setDatos = [1, 2, 3, 6];

const stdDev = arr => {
  // paso 1 - obtener media de arr
  const media = arr.reduce((a,b) => a + b) / arr.length;

  // paso 2 - obtener (media - n)^2 para cada [e] en arr
  const sqrArr = arr.map(e => (media - e) ** 2);

  // paso 3 - obtener suma de sqrArr
  // paso 4 - obtener media de sqrArr
  const promSqrArr = sqrArr.reduce((a, b) => a + b) / sqrArr.length;

  // paso 5 - obtener sqrt(promSqrArr)
  const stdDeviation = Math.sqrt(promSqrArr);

  return stdDeviation;
}

console.log('La desviación estándar de [1, 2, 3, 6] es: ')
console.log(stdDev(setDatos));    // 1.87
/**********************************************
**                  EJERCICIO 8              **
**********************************************/
console.log('\nEjercicio 8 - Encuentra mediana');

const obtenerMediana = arr => {
  arr.sort((a, b) => a - b);
  const central = parseInt(arr.length / 2);
  const parOrNot = arr.length % central;
  return parOrNot === 0 ? (arr[central-1] + arr[central]) / 2 : arr[central];
}

const a = [8, 9, 5, 1, 6];
const b = [12, 5, 7, 2, 3, 6];

console.log(`La mediana de ${[...a]} es ${obtenerMediana(a)}`);
console.log(`La mediana de ${[...b]} es ${obtenerMediana(b)}`);
//https://mediancalculator.com/es/
/**********************************************
**                  EJERCICIO 9              **
**********************************************/
console.log('\nEjercicio 9 - Calcula impuesto');

const impuesto = (anual, tasa) => anual * (tasa / 100);

let tasa = 20;
let anual = 10000000
console.log(`El impuesto a pagar para $${anual} al ${tasa}% es: $${impuesto(anual, tasa)}`);
/**********************************************
**                 EJERCICIO 10              **
**********************************************/
console.log('\nEjercicio 10 - Calcula descuento')

const calcDesc = (origen, final) => 100 - ((final * 100) / origen);

console.log(`Origen $1000, final $800. Descuento = ${calcDesc(1000, 800)}%`);
/**********************************************
**                 EJERCICIO 11              **
**********************************************/
console.log('\nEjercicio 11 - Perimetro circulo')

const circunf = r => Math.PI * r * 2;

console.log(`Un circulo de radio 0.5 tiene perimetro: ${circunf(0.5)}`);
/**********************************************
**                 EJERCICIO 12              **
**********************************************/
console.log('\nEjercicio 12 - Calcula raiz cuadrada');

const sqrt = num => Math.sqrt(num);

console.log(`La raíz cuadrada de 16 es ${sqrt(16)}`);
/**********************************************
**                 EJERCICIO 13              **
**********************************************/
console.log('\nEjercicio 13 - Calcula potencia');

const calcPotencia = (base, exp) => base ** exp;

console.log(`2^5 es: ${calcPotencia(2, 5)}`);
/**********************************************
**                 EJERCICIO 14              **
**********************************************/
console.log('\nEjercicio 14 - Celsius to Fahrenheit')

const celsiusToFahr = c => (c * (9 / 5)) + 32;

console.log(`100C es igual a ${celsiusToFahr(100)}F.`);
/**********************************************
**                 EJERCICIO 15              **
**********************************************/
console.log('\nEjercicio 15 - Fahrenheit to Celsius')

const fahrenheitToCel = f => (f -32) * (5 / 9);

console.log(`100F es igual a ${fahrenheitToCel(100)}C.`);