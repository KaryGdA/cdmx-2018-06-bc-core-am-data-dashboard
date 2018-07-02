let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";

//Evento para llamar la información de la API.

//SEDE - PERÚ
//Generación 3
peru1.addEventListener("click", function(){
  clicking2a();
})
//Botón para llamar la información de estudiantes de la tercera generación.
let clicking2a = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.lima.generacion.tercera.estudiantes);

  })
}

//Generación 4
peru2.addEventListener("click", function(){
  clicking2b();
})
//Botón para llamar la información de estudiantes de la cuarta generación.
let clicking2b = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.lima.generacion.cuarta.estudiantes);

  })
}

//Generación 5
peru3.addEventListener("click", function(){
  clicking2c();
})
//Botón para llamar la información de estudiantes de la quinta generación.
let clicking2c = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.lima.generacion.quinta.estudiantes);

  })
}
