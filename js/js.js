/*
Realizar los siguientes ejercicios con Funciones u Operaciones Con Arreglos 
Cada ejercicio debe hacerse de las dos formas: 
General (Usando for of)
Simplificada (map, filter, join, reduce, sort y encadenamiento)

1) Calcular el promedio de calificaciones de los alumnos de una salón de clases.
La calificaciones se encontrarán en un array multidimensional:

Alumno 1. [5,8,9,8,10,6,7,8]
Alumno 2. [9,4,7,6,8,6,10,8]
Alumno 3. [6,8,9,8,10,6,7,9]
Alumno 4. [8,8,10,8,9,6,7,8]
Alumno 5. [7,8,10,8,9,6,7,8]
Alumno 6. [4,8,10,8,5,6,7,8]
Alumno 7. [3,8,9,8,8,6,7,10]
Alumno 8. [5,8,9,8,6,6,10,6]
Alumno 9. [9,8,8,8,10,6,8,8]
Alumno 10. [6,8,10,8,9,6,7,8]

2) Mostrar como podemos contar la cantidad de nombres repetidos en un aula de clase de 15 Alumnos
(Poner nombres repetidos)

3) Dada una lista de 10 articulos los cuales tienen como propiedades: nombre, descripción y precio. 
Indicar las instrucciones para ordenar por nombre (en orden descendente)
Por precio (en orden ascendente)

4) De esa lista de 10 articulos obtener el precio total a pagar por los mismos. 


*/



"use strict";
var Alumno1=[5,8,9,8,10,6,7,8];
var Alumno2=[9,4,7,6,8,6,10,8];
var Alumno3=[6,8,9,8,10,6,7,9];
var Alumno4=[8,8,10,8,9,6,7,8];
var Alumno5=[7,8,10,8,9,6,7,8];
var Alumno6=[4,8,10,8,5,6,7,8];
var Alumno7=[3,8,9,8,8,6,7,10];
var Alumno8=[5,8,9,8,6,6,10,6];
var Alumno9=[9,8,8,8,10,6,8,8];
var Alumno10=[6,8,10,8,9,6,7,8];



//promedio General Alumno :

var tot=0;
for(var x of Alumno1){
    tot += x
}
console.log("Promedio de Alumno 1 : " + tot/Alumno1.length)

var tot2=0;
for(var x2 of Alumno2){
    tot2 += x2
}
console.log("Promedio de Alumno 2 : " + tot2/Alumno2.length)

var tot3=0;
for(var x3 of Alumno3){
    tot3 += x3
}
console.log("Promedio de Alumno 3 : " + tot3/Alumno3.length)

var tot4=0;
for(var x4 of Alumno4){
    tot4 += x4
}
console.log("Promedio de Alumno 4 : " + tot4/Alumno4.length)

var tot5=0;
for(var x5 of Alumno5){
    tot5 += x5
}
console.log("Promedio de Alumno 5 : " + tot5/Alumno5.length)

var tot6=0;
for(var x6 of Alumno6){
    tot6 += x6
}
console.log("Promedio de Alumno 6 : " + tot6/Alumno6.length)

var tot7=0;
for(var x7 of Alumno7){
    tot7 += x7
}
console.log("Promedio de Alumno 7 : " + tot7/Alumno7.length)

var tot8=0;
for(var x8 of Alumno8){
    tot8 += x8
}
console.log("Promedio de Alumno 8 : " + tot8/Alumno8.length)
var tot9=0;
for(var x9 of Alumno9){
    tot9 += x9
}
console.log("Promedio de Alumno 9 : " + tot9/Alumno9.length)

var tot10=0;
for(var x10 of Alumno10){
    tot10 += x10
}
console.log("Promedio de Alumno 10 : " + tot10/Alumno10.length)



//Promedio simplificado

console.log("**********Promedio simplificado**************")



let sum = Alumno1.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom = sum / Alumno1.length;
console.log("Promedio de Alumno 1 :" + prom)


let sum2 = Alumno2.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom2 = sum2 / Alumno2.length;
console.log("Promedio de Alumno 2 :" + prom2)


let sum3 = Alumno3.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom3 = sum3 / Alumno3.length;
console.log("Promedio de Alumno 3 :" + prom3)


let sum4 = Alumno4.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom4 = sum4 / Alumno4.length;
console.log("Promedio de Alumno 4 :" + prom4)



let sum5 = Alumno5.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom5 = sum5 / Alumno5.length;
console.log("Promedio de Alumno 5 :" + prom5)



let sum6 = Alumno6.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom6 = sum6 / Alumno6.length;
console.log("Promedio de Alumno 6 :" + prom6)


let sum7 = Alumno7.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom7 = sum7 / Alumno7.length;
console.log("Promedio de Alumno 7 :" + prom7)


let sum8 = Alumno8.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom8 = sum8 / Alumno8.length;
console.log("Promedio de Alumno 8    :" + prom8)

let sum9 = Alumno9.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom9 = sum9 / Alumno9.length;
console.log("Promedio de Alumno 9    :" + prom9)

let sum10 = Alumno10.reduce((Numero,Siguiente) => Numero += Siguiente);
let prom10 = sum10 / Alumno10.length;
console.log("Promedio de Alumno 10    :" + prom10)




console.log('Nombres Repetidos')

var NombresRepetidos=["Luis","Hugo","Luis","Hugo","Luis","Hugo","Luis","Paco","Luis","Eduardo","Luis","Erick","Luis","Abigail","Elena"]

console.log(NombresRepetidos.length)
//Conteo  General nombres :
var nombresAcomodados=[];

for (var i = 0; i < NombresRepetidos.length; i++) {
    //Esta for se va a rrepetir 15 veces
    if(nombresAcomodados.length==0){

         nombresAcomodados.push({
           nombre:NombresRepetidos[i],
           cantidad:1 
        })
    }else{
    
      for (var j = 0; j < nombresAcomodados.length; j++) {
        var flag=true;     
    if (NombresRepetidos[i] == nombresAcomodados[j].nombre) {        
      nombresAcomodados[j].cantidad = nombresAcomodados[j].cantidad + 1;
      flag = false;
      break;
    }

  }
  if(flag){
    nombresAcomodados.push({
           nombre:NombresRepetidos[i],
           cantidad:1 
        })
  }
   }
}
console.log(nombresAcomodados);


const cantidadNombres = NombresRepetidos.reduce((con, nombre) => { 
    con[nombre] = (con[nombre] || 0) +1;
    return con;
  }, {});
  
  console.log(cantidadNombres);



var Articulos =[{
nombre:"Articulo 1" ,
descripcion: "Descripcion1" ,
precio:1
},{
nombre:"Articulo 2" ,
descripcion: "Descripcion2" ,
precio:2
},{
nombre:"Articulo 3" ,
descripcion: "Descripcion3" ,
precio:3
},{
nombre:"Articulo 4" ,
descripcion: "Descripcion4" ,
precio:4
},{
nombre:"Articulo 5" ,
descripcion: "Descripcion5" ,
precio:5
},{
nombre:"Articulo 6" ,
descripcion: "Descripcion6" ,
precio:6
},{
nombre:"Articulo 7" ,
descripcion: "Descripcion7" ,
precio:7
},{
nombre:"Articulo 8" ,
descripcion: "Descripcion8" ,
precio:8
},{
nombre:"Articulo 9" ,
descripcion: "Descripcion9" ,
precio:9
},{
nombre:"Articulo 10" ,
descripcion: "Descripcion10" ,
precio:10
}]

/*
3) Dada una lista de 10 articulos los cuales tienen como propiedades: nombre, descripción y precio. 
Indicar las instrucciones para ordenar por nombre (en orden descendente)
Por precio (en orden ascendente)
*/
var ArticulosOrdenados = [];
ArticulosOrdenados.push(Articulos[0]);


for(var x = 0 ; x<Articulos.length;x++){
    for(var y = 0 ; y<ArticulosOrdenados.length;y++){
         var flag=true;   
console.log(Articulos[x].nombre>ArticulosOrdenados[y].nombre)
        if(Articulos[x].nombre>ArticulosOrdenados[y].nombre){
    ArticulosOrdenados.unshift(Articulos[x])
    flag = false;
    break;
    }else{
        
        ArticulosOrdenados.push(Articulos[x])
    flag = false;
    break;

    }

    }
    if(flag){
    ArticulosOrdenados.push(Articulos[x])
  }
 
}


var ArticulosOrdenadosPrecio = [];
ArticulosOrdenadosPrecio.push(Articulos[0]);


for(var x = 0 ; x<Articulos.length;x++){
    for(var y = 0 ; y<ArticulosOrdenadosPrecio.length;y++){
         var flag=true;   
console.log(Articulos[x].precio>ArticulosOrdenadosPrecio[y].precio)
        if(Articulos[x].precio>ArticulosOrdenadosPrecio[y].precio){
    ArticulosOrdenadosPrecio.unshift(Articulos[x])
    flag = false;
    break;
    }else{
        
        ArticulosOrdenadosPrecio.push(Articulos[x])
    flag = false;
    break;

    }

    }
    if(flag){
    ArticulosOrdenadosPrecio.push(Articulos[x])
  }
 
}

console.log("Ordenados por nombre")
console.log(ArticulosOrdenadosPrecio)
console.log("Ordenados por precio")
console.log(ArticulosOrdenados)

console.log("Menor a mayor Precio:");
console.log(Articulos.sort((a,b)=> a.precio - b.precio));
console.log("Z a A por nombre");
console.log(Articulos.sort(function(a, b){
  if (a.nombre > b.nombre) {
    return -1;
  }
  if (a.nombre < b.nombre) {
    return 1;
  }
  return 0;
}));


console.log("Total de precios Normal")
var cont = 0;
for(var x = 0;x<Articulos.length;x++){
cont += Articulos[x].precio
}
console.log(cont)


console.log("Total de precios simplificado")
var totalAges = Articulos.reduce((sum, value) => ( sum + value.precio ), 0);
console.log(totalAges)

