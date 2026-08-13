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

let bee = new Object(200, 500, 100, 100, "yellow")
let spider = new Object(100, 100, 100, 100, "black")

function draw(){ //Desenha elementos na tela
    bee.drawObject()
    spider.drawObject()
}

function update(){ //atualiza os frames

}

function main(){
    draw()
    update()
}

setInterval(main, 10)//chama a func em 10s

