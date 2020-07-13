class Box {
    constructor(x, y, width, height,options) {
      var options={
        isStatic:true
      }
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3){
        this.body.display();
        }
      push();
      rectMode(CENTER);
      strokeWeight(4);
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      stroke("red");
      fill(255);
      rect(pos.x,pos.y, this.width, this.height);
      pop();
    }
    }