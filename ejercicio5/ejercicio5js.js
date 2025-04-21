const form = document.getElementById("formulario");
form.addEventListener("submit",(e)=>{e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const nombreV = document.getElementById("nombreV");
    const email = document.getElementById("email").value;
    const emailV = document.getElementById("emailV");
    const edad = document.getElementById("edad").value;
    const edadV = document.getElementById("edadV");
    let rgxemail = /^\S+@\S+\.\S+$/

    if (nombre == ""){
        nombreV.textContent = "llenar casilla"
    }else{
        nombreV.textContent = ""
    }

    if (email == ""){
        emailV.textContent = "llenar casilla"
    }
    else if(rgxemail.test(email)){
        emailV.textContent = "email valido"
    }
    else{
        emailV.textContent = "email no valido"
    }

    if (edad == ""){
        edadV.textContent = "llenar casilla"
    }else if(edad < 18){
        edadV.textContent = "menor de edad"
    }
    else{
        edadV.textContent = "mayor de edad"
    }
});