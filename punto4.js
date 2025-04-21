const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const lista = document.getElementById("todolist");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let texto = input.value.trim();
    if (texto === ""){
        return;
    }

    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto;

    nuevoLi.addEventListener('click', function(){
        nuevoLi.classList.toggle('seleccionado');
    })

    lista.appendChild(nuevoLi);
    input.value = "";
})

