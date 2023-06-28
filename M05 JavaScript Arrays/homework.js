/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
    // Retornar el primer elemento del arreglo recibido por parámetro.
    // Tu código:
 }
 
 function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    return array[array.length -1];
 }
 
 function obtenerLargoDelArray(array) {
    // Retornar la longitud del arreglo recibido por parámetro.
    // Tu código:
    return array.length;
 }
 
 function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
     let arrayincremento =[];
     for(i=0; i<array.legth; i++){
         arrayincremento.push(array[i]+1)
     }
      return arrayincremento;
 }
 
 function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
    return array.push(elemento);
 }
 
 function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del arreglo recibido.
    // Retorna el arreglo.
    // Tu código:
 
    return array.unshit(elemento);
 }
 
 function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
 
    return palabras.join(' ');
 }
 
 function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:
 
    for (i = 0; i < array.lenght; i++) {
         if (elemento === array[i]) {
         return true;
         }
     }
     return false;
     
 }
 
 function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
 
    var acumulador =0;
     for(i=0; i<arrayOfNums.length; i++){
         acumulador = acumulador + arrayOfNums[i]
     }
         return acumulador
 }
 
 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
      let suma = 0;
   for (i = 0; i < resultadosTest.legth; i++) {
     suma = suma + resultadosTest[i];
   }
   return suma / resultadosTest.legth;
 }
  
 
 
 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
    let cajita = 0;
     for(i=0; i<arrayOfNums.legth; i++){
         if(arrayOfNums[i] > cajita){
             cajita = arrayOfNums[i]
 
         }
 
     }
     return cajita;
 }
 
 function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    let acumulador = 1;
     if (arguments.length === 0) {
       return 0;
     } else if (arguments.length === 1) {
       return arguments[0];
     } else {
       for (i = 0; i < arguments.length; i++) {
         acumulador = acumulador * arguments[i];
       }
     }
     return acumulador;
 }
 

function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    let acumularo = 0;
    for(i=0; i<array.legth; i++){
        if(array[i]>=18){
            acumularo = acumularo + 1
        }
    }
    return acumularo;
 }


 function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   // lunes = 1, martes = 2, .....
   // cualquier dia de la semana retorne = fin de semana
   // sabado y domingo = dia laboral

   if (numeroDeDia[i] === 1 || numeroDeDia[i] === 7) {
     return "Es Fin de semana";
   } else if (numeroDeDia > 1 && numeroDeDia < 7) {
     return "Es dia laboral";
   } else {
     return "No es un numero de la semana";
   }
 }
    
       
 function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    let numeroString = num.toString();
    if(numeroString[0] === '9'){
        return true;
    }else{
        return false;
    }
 }


 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:

    for(i=0; i<array.legth - 1; i++){
        if(array[i] !== array[i+1]){
            return false;
        }
 }
 return true;
 }




 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:

    let  nuevoarreglo = [];
    for(i=0; i<array.legth; i++){
        if(array[i] === 'enero' || array[i] === 'marzo' || array[i] === 'noviembre'){
             return nuevoarreglo.push(array[i]);
            
        }
    }
     if(nuevoarreglo.includes('Enero') && nuevoarreglo.includes('marzo') && nuevoarreglo.includes('noviembre')){
        return nuevoarreglo;

     }else{
        
        return 'No se encontro los mese pedidos'
     }

 }
  

 function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
    
    let arrayyabladelseis=[];
    for(i=0; i<61 ; i++){
        arrayyabladelseis.push(6 * i);    
    }

    return arrayyabladelseis;

 }

 let nuevoarray2=[];
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    for(i=0; i<array.legth; i++){
        if(array[i] > 100){
            nuevoarray2.push(array[i]);
        }
    }
        return nuevoarray2;
 }


 function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:

    let nuevoarray3 = [];
    let suma = num;
    for(i=0; i<10; i++){
            
            suma = suma + 2
            if(suma === i){
                break;
            }else{
                nuevoarray3.push(suma);
            }

    }
    if(nuevoarray3.length < 10){
        return 'se interrumpio'
    }else if(nuevoarray3 === 10){
        return nuevoarray3;
    }
 }
 
 function continueStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un array y retornarlo.
    // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
    // se continua con la siguiente iteración.
    // [PISTA]: utiliza el statement 'continue'.
    // Tu código:

    let nuevoarray4 = [];
    let suma = num;
    for(i=0; i<10; i++){
        if(i=== 5){
            continue;
        }else{
            suma = suma + 2;
            nuevoarray4.push(suma);
        }
    }
    return nuevoarray4;
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
