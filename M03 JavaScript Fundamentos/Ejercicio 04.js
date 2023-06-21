/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   var num;
   console.log('El numero elevado al cuadrado es:' + num);
}
//elevarAlCuadrado(8**2);
function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   var num;
   console.log('El numero elevado al cubo es:' + num);
}
//elevarAlCubo(3**3);
function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   var resultado = Math.pow(num,exponet)
   console.log('El numero elevado es:' + resultado);
}
//tienenMismaLongitud(3,4);
function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
  console.log(Math.round(num));
}
//redondearNumero(21.5);
function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
  console.log(Math.ceil(num));
}
//redondearNumero(21.5);
function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   console.log(Math.random(num));
}
//numeroRandom(1);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
