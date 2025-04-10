
let btnEnviar = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("txtNombre");

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

     //let nombre = txtNombre.value.trim().toUpperCase();
     let nombre = txtNombre.value.trim();
     localStorage.setItem("nombre", nombre);

});


function id_help() {
    let state = document.getElementById("id_num")
    let helper = document.getElementById("id_help").innerHTML = "<br><sup><i>DNI O RUC</i></sup>";
    if (state.onclick === true) {
        helper.style.display = "block";
    } else {
        helper.style.display = "none";
    }
}


window.addEventListener("load",function(event){ //carga lo que tiene la página referenciada con el main
    console.log("Se terminó de cargar la página");
});//load
