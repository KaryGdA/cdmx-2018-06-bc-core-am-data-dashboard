//Trayendo la clase de los inputs para darle estilo
let welcomeEnter = document.getElementById("#welcome");
//Evento del botón
button.addEventListener("click", event => {
  //Llamando input para meter nombre de usuario
    let userName = document.getElementById("#nameUser").value;
    //llamando input para clave
    let userPassword = document.getElementById("#password").value;
    //Comparando que el nombre de usuario y la clave sean las correctas
    if(userName === "usuario" && userPassword === "clave"){
      //Esconder los inputs y botón de bienvenida
         welcomeEnter.style.display = "none";
}else{
  //Ventana emergente de Error
    alert("Los datos ingresados son incorrectos!")
};
})
