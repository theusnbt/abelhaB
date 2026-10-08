class Obj{
    constructor(posx, posy, width, height, color){
        this.posx = posx;
        this.posy = posy;
        this.width = width;
        this.height = height;
        this.color = color;
        
    }

    desenharObjeto(){
        let img = new Image();
        img.src = this.color;
        colmeia.drawImage(img, this.posx, this.posy, this.width, this.height);
        
    }
}


class Abelha extends Obj{
    dir = 0
    quadro = 1
    timer = 0
    move(){
        this.posx += this.dir
    }
    animacao(){
        this.timer +=1
        if (this.timer >10){
            this.timer = 0
            this.quadro +=1
        }
        if (this.quadro > 4){
            this.quadro = 1
        }
        this.color = "img/Abelha"+this.quadro+".png"
    }
}

class Aranha extends Obj{   
    quadro = 1
    timer = 0
    move(){
        this.posy += 3
        if(this.posy > 690){
            this.posy = -100
            this.posx = Math.random() * (400)
        }
    }
    animacao(){
        this.timer +=1
        if (this.timer >10){
            this.timer = 0
            this.quadro +=1
        }
        if (this.quadro > 4){
            this.quadro = 1
        }
        this.color = "img/Aranha"+this.quadro+".png"
    }
}

class BG extends Obj{
    move(velocidade, limite, posInicial){
        this.posy += velocidade
        if(this.posy > limite){
            this.posy = posInicial
        }
    }
}