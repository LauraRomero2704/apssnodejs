/* 
// Declarar Variables
const num1 = 6;
      num2 = 10;
    
// Declarar Texto
let suma = num1 + num2;

// Imprimir por Consola
console.log(`SUMA: ${num1} + ${num2} = ${suma}`);
*/


// FUNCION SUMAR 

// Declarar Variables
const sumar = (num1, num2) => 
{
      // Declarar Texto
      let suma = num1 + num2;

      // Mostrar por Consola
      console.log(`SUMA: ${num1} + ${num2} = ${suma}`);
}

exports.suma = sumar;


// FUNCION RESTA 

// Declarar Variables
const restar = (num1, num2) => 
{
      // Declarar Texto
      let resta = num1 - num2;

      // Mostrar por Consola
      console.log(`RESTA: ${num1} - ${num2} = ${resta}`);
}

exports.resta = restar;


// FUNCION MULTPLICACION 

// Declarar Variables
const multiplicar = (num1, num2) => 
{
      // Declarar Texto
      let multiplicacion = num1 * num2;

      // Mostrar por Consola
      console.log(`MULTIPLICACION: ${num1} * ${num2} = ${multiplicacion}`);
}

exports.multiplicacion = multiplicar;


// FUNCION DIVISION

// Declarar Variables
const dividir = (num1, num2) => 
{
      // Declarar Texto
      let division = num1 / num2;

      // Mostrar por Consola
      console.log(`DIVISION: ${num1} / ${num2} = ${division}`);
}

exports.division = dividir;


// FUNCION POTENCIA

// Declarar Variables
const potenciar = (num1, num2) => 
{
      // Declarar Texto
      let potencia = Math.pow(num1, num2);

      // Mostrar por Consola
      console.log(`POTENCIA: ${num1} ^ ${num2} = ${potencia}`);
}

exports.potencia = potenciar;


// FUNCION RADICACION

// Declarar Variables
const radicar = (num1) => 
{
      // Declarar Texto
      let radica = Math.sqrt(num1);

      // Mostrar por Consola
      console.log(`RADICACION: √ ${num1} = ${radica}`);
}

exports.radica = radicar;