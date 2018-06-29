//window.global = {


//Variables para jalar la información JSON, por SEDE y GENERACIONES.
let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";
let cdmx = document.querySelector("#cdmx");
let generacionesM = document.querySelector("#mexGen");
let peru = document.querySelector("#peru");
let chile = document.querySelector("#chile");



//Evento para llamar la información de la API.
//SEDE - MÉXICO
cdmx1.addEventListener("click", function(){
  clicking1a();
})
//Botón para llamar la información de estudiantes de la tercera generación.
let clicking1a = function (){
  fetch(api).then(function(datos){
    return datos.json();
  }).then(function(data){
    console.log(data.mexico.generacion.tercera.estudiantes);
  })
}
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
