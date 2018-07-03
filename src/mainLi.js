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

  }).then(function(laboratoria){
    console.log(laboratoria.lima.generacion.tercera.estudiantes);
    let listaL3 = laboratoria.lima.generacion.tercera.estudiantes;
    let listaCompleta = listaL3 +"";
    alumasG3.innerHTML = listaCompleta;
    for (let i = 0; i < listaL3.length; i++) {
   alumasG3.innerHTML += `
   <ol>
     <li scope="col"> ${listaL3[i].nombre}</li>
     <li scope="col"> ${listaL3[i].turno}</li>
     <li scope="col"> ${listaL3[i].correo}</li>
    </ol>
  `
}


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

  }).then(function(laboratoria){
    console.log(laboratoria.lima.generacion.cuarta.estudiantes);
    let listaL4 = laboratoria.lima.generacion.cuarta.estudiantes;
    let listaCompleta2 = listaL4 +"";
    alumasG4.innerHTML = listaCompleta2;
    for (let i = 0; i < listaL4.length; i++) {
   alumasG4.innerHTML += `
   <ol>
     <li scope="col"> ${listaL4[i].nombre}</li>
     <li scope="col"> ${listaL4[i].turno}</li>
     <li scope="col"> ${listaL4[i].correo}</li>
    </ol>
  `
}


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

  }).then(function(laboratoria){
    console.log(laboratoria.lima.generacion.quinta.estudiantes);
    let listaL5 = laboratoria.lima.generacion.quinta.estudiantes;
    let listaCompleta3 = listaL5 +"";
    alumasG5.innerHTML = listaCompleta3;
    for (let i = 0; i < listaL5.length; i++) {
   alumasG5.innerHTML += `
   <ol>
     <li scope="col"> ${listaL5[i].nombre}</li>
     <li scope="col"> ${listaL5[i].turno}</li>
     <li scope="col"> ${listaL5[i].correo}</li>
    </ol>
  `
}


  })
}
