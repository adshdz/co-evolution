
const datosForm = document.querySelector("input.submit");

datosForm.addEventListener("click", function(e){
    e.preventDefault();
    const email = document.querySelector("input.emailForm");
    const parrafo = document.querySelector("div.errores ul")
    const pass  = document.querySelector("input.passForm");
    const arrayErrores = [];

    if(email.value == ""){
        arrayErrores.push("El campo email esta vacio");
    }
    if(pass.value == ""){
        arrayErrores.push("El campo pass esta vacio");
    }
    if(arrayErrores.length>0){
        for( let i = 0; i<arrayErrores.length; i++){
            parrafo.innerHTML += "<li>" + arrayErrores[i] + "</li>"
        }
    }
});