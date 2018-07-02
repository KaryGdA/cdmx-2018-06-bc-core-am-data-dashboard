//Evento para llamar la información de la API.
let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json";
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
    console.log(data.mexico.generacion.tercera.estudiantes);
  })
}

//function pintar(datos){
  //let mexGen3 = data.mexico.generacion.tercera.estudiantes;
  //mexGen3.innerHTML = "";
//}

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
