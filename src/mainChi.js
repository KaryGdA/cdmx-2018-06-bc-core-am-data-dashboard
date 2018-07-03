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

  }).then(function(laboratoria){
    console.log(laboratoria.santiago.generacion.tercera.estudiantes);
    let listaC3 = laboratoria.santiago.generacion.tercera.estudiantes;
    let listaCompleta = listaC3 +"";
    alumasG3.innerHTML = listaCompleta;
    for (let i = 0; i < listaC3.length; i++) {
   alumasG3.innerHTML += `
   <ol>
     <li scope="col"> ${listaC3[i].nombre}</li>
     <li scope="col"> ${listaC3[i].turno}</li>
     <li scope="col"> ${listaC3[i].correo}</li>
    </ol>
  `
}


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

  }).then(function(laboratoria){
    console.log(laboratoria.santiago.generacion.cuarta.estudiantes);
    let listaC4 = laboratoria.santiago.generacion.cuarta.estudiantes;
    let listaCompleta2 = listaC4 +"";
    alumasG4.innerHTML = listaCompleta2;
    for (let i = 0; i < listaC4.length; i++) {
   alumasG4.innerHTML += `
   <ol>
     <li scope="col"> ${listaC4[i].nombre}</li>
     <li scope="col"> ${listaC4[i].turno}</li>
     <li scope="col"> ${listaC4[i].correo}</li>
    </ol>
  `
}


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

  }).then(function(laboratoria){
    console.log(laboratoria.santiago.generacion.quinta.estudiantes);
    let listaC5 = laboratoria.santiago.generacion.quinta.estudiantes;
    let listaCompleta3 = listaC5 +"";
    alumasG5.innerHTML = listaCompleta3;
    for (let i = 0; i < listaC5.length; i++) {
   alumasG5.innerHTML += `
   <ol>
     <li scope="col"> ${listaC5[i].nombre}</li>
     <li scope="col"> ${listaC5[i].turno}</li>
     <li scope="col"> ${listaC5[i].correo}</li>
    </ol>
  `
}



  })
}
