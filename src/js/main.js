
const datosForm = document.querySelector("input.submit");
const email = document.querySelector("input.emailForm");
const pass = document.querySelector("input.passForm");
const parrafo = document.querySelector("div.errores ul")
const arrayErrores = [];

datosForm.addEventListener("click", function (e) {
    if (email.value == "") {
        arrayErrores.push("El campo email esta vacio");
    }
    if (pass.value == "") {
        arrayErrores.push("El campo contraseña esta vacio");
    }
    if (arrayErrores.length > 0) {
        e.preventDefault();
        for (let i = 0; i < arrayErrores.length; i++) {
            parrafo.innerHTML += `<li id ="remove">  ${arrayErrores[i]}</li>`
        }
   remover("remove");
    }
});

function remover(id) {
    setTimeout(() => {
        for (let i = 0; i < arrayErrores.length; i++) {
            document.getElementById(id).remove();
        }
        for (let i = 0; i <= arrayErrores.length; i++) {
            arrayErrores.pop();
        }
    }, 2000)
}

email.addEventListener('input', function (e) {
    campo = e.target;
    valido = document.getElementById('emailOK');
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)) {
        valido.innerText = " correo válido";
    } else {
        valido.innerText = "incorrecto";
    }
});

passok

pass.addEventListener('input', function (e) {
    campo = e.target;
    valido = document.getElementById('passok');
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(campo.value)) {
        valido.innerText = " contraseña válida";
    } else {
        valido.innerText = "incorrecto";
    }
});




