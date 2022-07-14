//Sons
function tocaSom (selectorAudio){
    const elemento = document.querySelector(selectorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();       
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas=document.querySelectorAll('.tecla');


for(let contador =0;contador < listaDeTeclas.length;contador ++){

    const teclas = listaDeTeclas[contador];

    const instrumento = teclas.classList[1];

    //Template string
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function (){
        tocaSom(idAudio);
    }
    teclas.onkeydown = function(clique){

        if(clique.code ==="Enter"||clique.code === "Space"){
            teclas.classList.add('ativa');
        }
        
    }
    teclas.onkeyup = function (){
        teclas.classList.remove('ativa');
    }

}


