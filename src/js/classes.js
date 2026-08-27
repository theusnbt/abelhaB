class Obj{
    constructor(posx, posy, width, height, color){
        this.posx = posx;
        this.posy = posy;
        this.width = width;
        this.height = height;
        this.color = color;
        
    }

    drawObject(){
        colmeia.fillStyle = this.color;
        colmeia.fillRect(this.posx, this.posy, this.width, this.height);
    }
}


class Abelha extends Obj{
    dir = 0;
     move(){
        this.posx += this.dir;
    }
}