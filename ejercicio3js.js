const btnResaltar = document.getElementById('btnResaltar');
const btnOcultar = document.getElementById('btnOcultar');
const parrafos = document.querySelectorAll('.parrafo');

btnResaltar.addEventListener('click', function() {
    parrafos.forEach(function(parrafo) {
        parrafo.classList.add('resaltado');
    });
});

btnOcultar.addEventListener('click', function() {
    parrafos.forEach(function(parrafo) {
        parrafo.classList.toggle('oculto');
    });
});