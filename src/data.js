//window.global = {

//Variables para jalar la información JSON, y por SEDE.
let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";
console.log(api);
let cdmx = document.querySelector("#cdmx");
let peru = document.querySelector("#peru");
let chile = document.querySelector("#chile");

//Evento para llamar la información del botón de la sede MÉXICO.
cdmx.addEventListener("click", function(){
  clicking1();
})
//Uso de FETCH y THEN.
let clicking1 = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.mexico)
  })
}

//Evento para llamar la información del botón de la sede PERÚ.
peru.addEventListener("click", function(){
  clicking2();
})
//Uso de FETCH y THEN.
let clicking2 = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.lima)
  })
}

//Evento para llamar la información del botón de la sede CHILE.
chile.addEventListener("click", function(){
  clicking3();
})
//Uso de FETCH y THEN.
let clicking3 = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.santiago)
  })
}

window.computeStudentsStats(laboratoria) => {
const obj ={
  campus: " ",
  generacion:" ",
  average: 0,
  count: 0,
}

  for (key in laboratoria) {
    object.campus = key;
    const object.generacion
    object.keys(laboratoria[ke].generacion);
  }
}
