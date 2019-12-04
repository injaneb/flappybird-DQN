class Bird{
    constructor({speed}){
        this.speed = speed;
        this.x = 50;
        this.y = 250;
        this.alive = true;
    }

    restart(){
        
    }

    jump(){
        if(this.y > 10) this.y -= this.speed * 3.5;
    }

    show(){
        if(this.y < 500) this.y += this.speed;  
        else{this.alive = false}
        this.element = ellipse(this.x,this.y,20,20);
    }

}

