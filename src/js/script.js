let colmeia = document.getElementById("palco").getContext("2d");

let abelha = new Abelha(200, 500, 100, 100, "../assets/img/Abelha1.jpeg");
let aranha = new Aranha(100, 100, 100, 100, "../assets/img/Aranha1.jpeg");

document.addEventListener("keydown", (e) => {
    if(e.key == "a")
        abelha.dir = -3;

    if (e.key =="d")
        abelha.dir = 3;
    
});

document.addEventListener("keyup", (e) => {
    if(e.key == "a")
        abelha.dir = 0;
    
    if (e.key =="d")
        abelha.dir = 0;
    
});

//Desenha elementos na tela
function desenho(){ 
    abelha.desenharObjeto();
    aranha.desenharObjeto();
}


//atualiza os frames
function update(){ 
    abelha.move();
    aranha.move();
}

function main(){
    colmeia.clearRect(0, 0, 500, 690);
    update();
    desenho();
}

setInterval(main, 10); //chama a func em 10s
