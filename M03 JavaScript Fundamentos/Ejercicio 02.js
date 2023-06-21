/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   console.log(string);
}
//devolverString('Lima')
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   console.lo(x+y);
}
//suma(5,5)
function resta(x, y) {
   // Retorna el resultado de la resta.
   console.lo(x-y)
}
//resta(5,5)
function divide(x, y) {
   // Retorna el resultado de su división.
   console.lo(x/y)
}
//divide(5,5)
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   console.lo(x*y)
}
//multiplica(5,5)
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   console.lo(x%y)
}
//obtenerResto(5,5)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
