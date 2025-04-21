function resaltar_parrafos(){   
    const losParrafos = document.querySelectorAll('p');
    losParrafos.forEach(p => {
        p.classList.add('resaltado')
    })
}

function ocultar_parrafos(){
    const losParrafos = document.querySelectorAll('p');
    losParrafos.forEach(p => {
        p.classList.add('oculto')
    })
}