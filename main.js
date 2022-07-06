//Sons
function tocaSom (idElementAudio){
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas=document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length){

    const teclas = listaDeTeclas[contador];

    const instrumento = teclas.classList[1];

    //Template string
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function (){
        tocaSom(idAudio);
    }

    contador ++;

}


