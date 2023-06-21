/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
     if(num === 0){
       console.log('Es Cero');
   }else if(num > 0){
    console.log(true);
   }else{
    console.log(false);
   }
  
}
//tienenMismaLongitud(1);
function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   return str
}
//const result = agregarSimboloExclamacion('Hello world'+'!');
console.log(result);

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   return nombre, apellidos
}
//tienenMismaLongitud=('Lucas,Tomas')
console.log(tienenMismaLongitud);
tienenMismaLongitud=('Lucas Tomas')
console.log(tienenMismaLongitud);
function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // var resultado = nombre + 'Martin!'
   console.log(resultado)
}
//obtenerSaludo('Hola ')
function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
    return alto * ancho
}
//console.log(obtenerAreaRectangulo(20,3));
function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   let  perimetro = lado * 4
    console.log('El perimetro de un cuadrado es:' + perimetro)
}
//tienenMismaLongitud(4)
function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   let areat= base * altura/2
    console.log("El area del tringulo es:" + areat)
}
//areaDelTriangulo(5,5)
function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   let conver= euro * 1.20
    console.log("La conversion es:" + conver)
}
//deEuroAdolar(20)
function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
    if(letra=='a' || letra=='e'|| letra=='i'||letra=='o'||letra=='u'){
        return 'Es Vocal'

    }else{
        return 'Dato Incorrecto'
    }
}
//console.log(tienenMismaLongitud('a'))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
