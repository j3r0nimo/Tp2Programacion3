function agregarElemento(){

    // variable para almacenar texto ingresado  
    let textoIngresado = document.getElementById("idTexto").value;
    
    // si hay contenido en la variable
    if (textoIngresado.trim() !== ""){

        // se crea un elemento <LI> y se le asigna contenido
        // se le agregan espacios para separarse del botón
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = textoIngresado += " - ";

        // se agrega un boton para borrar cada elemento creado
        const botonborrar = document.createElement('button');
        botonborrar.textContent = 'BORRAR';
        botonborrar.addEventListener('click',function(){
            nuevoLi.remove();
        });
        nuevoLi.appendChild(botonborrar);
        
        // se agrega el elemento a la lista y se vacía la variable inicial
        document.getElementById("listaDeElementos").appendChild(nuevoLi);
        document.getElementById("idTexto").value = "";

    }

    // si no se ingreso nada...
    else{
        alert("DEBE INGRESAR UN TEXTO.")
    }

}