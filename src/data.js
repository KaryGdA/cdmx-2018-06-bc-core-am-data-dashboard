global.window = {
let api = "https://anavzqz.github.io/cdmx-2018-06-bc-core-am-data-dashboard/data/laboratoria.json"

  computeStudentsStats: (laboratoria) => {
let clicking = function(){
  fetch(api).then(function(datos){
  return datos.json();
}).then(function(data){
  let sede = data.lima[0, 0, 0].nombre;
  console.log(sede);
})
}

};


  computeGenerationsStats: () => {

  };
};
