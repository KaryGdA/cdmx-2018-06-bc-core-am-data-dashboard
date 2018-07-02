//window.global = {


//Variables para jalar la información JSON, por SEDE y GENERACIONES.
let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";
console.log(api);
let cdmx = document.querySelector("#cdmx");
let peru = document.querySelector("#peru");
let chile = document.querySelector("#chile");


let mexGen4 = [];
let mexGen5 = [];
let peruGen3 = [];
let peruGen4 = [];
let peruGen5 = [];




//Evento para llamar la información de la API.

//SEDE - MÉXICO
//Generación 3
cdmx1.addEventListener("click", function(){
  clicking1a();
})
//Botón para llamar la información de estudiantes de la tercera generación.
let clicking1a = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    //console.log(data.mexico.generacion.tercera.estudiantes);
  })
}

function pintar(datos){
  let mexGen3 = data.mexico.generacion.tercera.estudiantes;
  mexGen3.innerHTML = "";
}

//Generación 4
  cdmx2.addEventListener("click", function(){
    clicking1b();
  })
  //Botón para llamar la información de estudiantes de la cuarta generación.
  let clicking1b = function (){
    fetch(api).then(function(datos){
      return datos.json();
    }).then(function(data){
    console.log(data.mexico.generacion.cuarta.estudiantes);
  })

}

//Generación 5
cdmx3.addEventListener("click", function(){
  clicking1c();
})
//Botón para llamar la información de estudiantes de la cuarta generación.
let clicking1c = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
  console.log(data.mexico.generacion.quinta.estudiantes);
})

}



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
