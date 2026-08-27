let colmeia = document.getElementById("palco").getContext("2d")

class Object{
    constructor(posx, posy, width, height, color){
        this.posx = posx
        this.posy = posy
        this.width = width
        this.height = height
        this.color = color
        
    }

    drawObject(){
        colmeia.fillStyle = this.color
        colmeia.fillRect(this.posx, this.posy, this.width, this.height)
    }
}

let abelha = new Object(200, 500, 100, 100, "yellow")
let aranha = new Object(100, 100, 100, 100, "black")

document.addEventListener("keydown", (e) => {
    if(e.key == "a")
        abelha.posx -= 10
    
    if (e.key =="d")
        abelha.posx += 10
    
})

function draw(){ //Desenha elementos na tela
    abelha.drawObject()
    aranha.drawObject()
}

function update(){ //atualiza os frames

}

function main(){
    colmeia.clearRect(0, 0, 500, 690)
    draw()
    update()
}

setInterval(main, 10)//chama a func em 10s

