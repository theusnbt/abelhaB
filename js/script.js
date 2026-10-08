let colmeia = document.getElementById("palco").getContext("2d");

let bg = new BG (0,0,500,690,"img/FundoJogo.jpeg");
let bg2 = new BG(0,-690,500,690,"img/FundoJogo.jpeg")
let abelha = new Abelha(200, 500, 100, 100, "img/Abelha1.png");
let aranha = new Aranha(100, 100, 100, 100, "img/Aranha1.png");

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
    bg.desenharObjeto();
    bg2.desenharObjeto();
    abelha.desenharObjeto();
    aranha.desenharObjeto();
}


//atualiza os frames
function update(){ 
    abelha.move();
    abelha.animacao()
    aranha.move();
    aranha.animacao()
    bg.move(3, 690, 0);
    bg2.move(3,0,-690);
    
}

function main(){
    colmeia.clearRect(0, 0, 500, 690);
    update();
    desenho();
}

setInterval(main, 10); //chama a func em 10s
