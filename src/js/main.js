
const datosForm = document.querySelector("input.submit");


const email = document.querySelector("input.emailForm");
const parrafo = document.querySelector("div.errores ul")
const pass  = document.querySelector("input.passForm");
const arrayErrores = [];

datosForm.addEventListener("click", function(e){
    e.preventDefault();
    

    if(email.value == ""){
        arrayErrores.push("El campo email esta vacio");
    }
    if(pass.value == ""){
        arrayErrores.push("El campo contraseña esta vacio");
    }
    if(arrayErrores.length>0){
        
        for( let i = 0; i<arrayErrores.length; i++){
            parrafo.innerHTML += "<li>" + arrayErrores[i] + "</li>"
        }

    }
// se busca dejar en blanco los mensajes de errores
    setTimeout(()=>{
    parrafo.outerHTML = "";
}, 2000)
});

email.addEventListener('input', function(e) {
    campo = e.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (emailRegex.test(campo.value)) {
      valido.innerText = " correo válido";
    } else {
      valido.innerText = "incorrecto";
    }
});


