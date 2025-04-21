function resaltar_parrafos(){   
    let losParrafos = document.querySelectorAll('.parrafo');

    losParrafos.forEach(losParrafos => {
        losParrafos.classList.add('resaltado')
    })
}

function ocultar_parrafos(){
    let losParrafos = document.querySelectorAll('.parrafo');

    losParrafos.forEach(losParrafos => {
        losParrafos.classList.add('oculto')
    })
}