class Paper {
    constructor(x, y,width,height) {
      var options = {
        'isStactic':false,
        'density':1.2,
        'friction':1.2,
        'restitution':1.2
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
    
  
      push();
      translate(pos.x, pos.y);
     
      image(this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  