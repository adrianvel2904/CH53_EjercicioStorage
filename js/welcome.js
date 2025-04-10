let btnEliminar = document.getElementById("btnEliminar");
let encabezado2 = document.getElementsByTagName("h2").item(0);


    if(localStorage.getItem("nombre")!=null) {
    let nombre = localStorage.getItem("nombre");
    encabezado2.innerText = `Hola, ${nombre}, bienvenido de nuevo`;
    } else{
        encabezado2.innerHTML = `Por favor ve al index e ingresa tu nombre`;
    }


    btnEliminar.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.removeItem("nombre");
        encabezado2.innerText = `Por favor ve al index e ingresa tu nombre`;

    });