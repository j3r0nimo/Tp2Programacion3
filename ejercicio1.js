// Selecciona el titulo con getElementById() y cambia su texto.

const miTitulo = document.getElementById("tituloPrincipal")
miTitulo.textContent = "Un poco de historia"
console.log(miTitulo);
   

// Selecciona los parrafos con getElementsByClassName() y cambia su color.

let pColor = document.getElementsByClassName("parrafo")    
for (let i = 0; i < pColor.length; i++){
    pColor[i].style.color = "#C00587"
}; 


// Selecciona los elementos <li> con querySelectorAll() y agrega un texto al final de cada uno.

let theList = document.querySelectorAll("li")
theList.forEach((li) => {
    li.textContent += ' - TEXTO AGREGADO CON JAVASCRIPT '
});