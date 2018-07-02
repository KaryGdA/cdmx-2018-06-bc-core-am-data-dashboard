let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";

//Evento para llamar la información de la API.

//SEDE - CHILE
//Generación 3
chile1.addEventListener("click", function(){
  clicking3a();
})
//Botón para llamar la información de estudiantes de la tercera generación.
let clicking3a = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.santiago.generacion.tercera.estudiantes);

  })
}

//Generación 4
chile2.addEventListener("click", function(){
  clicking3b();
})
//Botón para llamar la información de estudiantes de la cuarta generación.
let clicking3b = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.santiago.generacion.cuarta.estudiantes);

  })
}

//Generación 5
chile3.addEventListener("click", function(){
  clicking3c();
})
//Botón para llamar la información de estudiantes de la quinta generación.
let clicking3c = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.santiago.generacion.quinta.estudiantes);


  })
}
