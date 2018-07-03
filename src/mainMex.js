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
  }).then(function(laboratoria){
    console.log(laboratoria.mexico.generacion.tercera.estudiantes);
    let listaM3 = laboratoria.mexico.generacion.tercera.estudiantes;
    let listaCompleta = listaM3 +"";
    alumasG3.innerHTML = listaCompleta;
    for (let i = 0; i < listaM3.length; i++) {
   alumasG3.innerHTML += `
   <ol>
     <li scope="col"> ${listaM3[i].nombre}</li>
     <li scope="col"> ${listaM3[i].turno}</li>
     <li scope="col"> ${listaM3[i].correo}</li>
    </ol>
  `
}
  })
}

//Generación 4
  cdmx2.addEventListener("click", function(){
    clicking1b();
  })
  //Botón para llamar la información de estudiantes de la cuarta generación.
  let clicking1b = function (){
    fetch(api).then(function(datos){
      return datos.json();
    }).then(function(laboratoria){
    console.log(laboratoria.mexico.generacion.cuarta.estudiantes);
    let listaM4 = laboratoria.mexico.generacion.cuarta.estudiantes;
    let listaCompleta2 = listaM4 +"";
    alumasG4.innerHTML = listaCompleta2;
    for (let i = 0; i < listaM4.length; i++) {
   alumasG4.innerHTML += `
   <ol>
     <li scope="col"> ${listaM4[i].nombre}</li>
     <li scope="col"> ${listaM4[i].turno}</li>
     <li scope="col"> ${listaM4[i].correo}</li>
    </ol>
  `
  }
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
  }).then(function(laboratoria){
  console.log(laboratoria.mexico.generacion.quinta.estudiantes);
  let listaM5 = laboratoria.mexico.generacion.quinta.estudiantes;
  let listaCompleta3 = listaM5 +"";
  alumasG5.innerHTML = listaCompleta3;
  for (let i = 0; i < listaM5.length; i++) {
 alumasG5.innerHTML += `
 <ol>
   <li scope="col"> ${listaM5[i].nombre}</li>
   <li scope="col"> ${listaM5[i].turno}</li>
   <li scope="col"> ${listaM5[i].correo}</li>
  </ol>
`
}
})

}
