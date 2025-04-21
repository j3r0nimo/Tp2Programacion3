// se previene la acción por defecto 
document.getElementById("myFormulario").addEventListener("submit", function(Enviar) {
Enviar.preventDefault();  
console.log('Se impidió la acción por defecto (Submit)');
    
    // variable para almacenar texto ingresado  
    let textoIngresado = document.getElementById("idTexto").value;
    
        // si hay contenido en la variable
        if (textoIngresado.trim() !== ""){
            console.log(textoIngresado)
    
            // entonces se crea un elemento <li> y se le asigna el contenido
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = textoIngresado;       
            
            // se agrega el elemento a la lista y se vacía la variable inicial
            document.getElementById("listaDeTareas").appendChild(nuevoLi);
            document.getElementById("idTexto").value = ""; 
            
            document.querySelectorAll("li").forEach(li => {
                li.addEventListener("click", () => {
                  li.classList.toggle("completado");
                });
              });
        }
    
        // pero si no se ingreso nada...
        else{
            alert("DEBE INGRESAR UN TEXTO.")
        }                  

    }); 

    