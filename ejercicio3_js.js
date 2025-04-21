function resaltar_parrafos(){   
    let losParrafos = document.querySelectorAll('p');
    losParrafos.forEach(p => {
        p.classList.add('resaltado')
    })
}

function ocultar_parrafos(){
    let losParrafos = document.querySelectorAll('p');
    losParrafos.forEach(p => {
        p.classList.add('oculto')
    })
}
