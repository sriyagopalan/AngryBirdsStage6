class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.tragictree = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x > 10 && this.body.position.x > 220) {

    
    var position = [this.body.position.x, this.body.position.y]
    this.tragictree.push (position); 
    }
    for(var i = 0; i < this.tragictree.length; i++)
    image(this.smokeImage, this.tragictree[i][0], this.tragictree[i][1])
  }
}
