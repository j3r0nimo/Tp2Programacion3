const btnResaltar = document.getElementById('btnResaltar');
const btnOcultar = document.getElementById('btnOcultar');
let parrafos = document.getElementsByClassName('parrafo');

btnResaltar.addEventListener('click', function() {
    for(let i = 0; i<parrafos.length;i++){
        parrafos[i].classList.add('resaltado');
    };
});

btnOcultar.addEventListener('click', function() {
    for(let i = 0; i<parrafos.length;i++){
        parrafos[i].classList.toggle('oculto');
    };
});