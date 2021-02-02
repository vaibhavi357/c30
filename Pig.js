class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    //visibility = 0to255
    //0 = 1 fully off byte(8 bits)= 0000 0000(invisible)
    //1 = 1 fully on byte(8 bits)= 1111 1111(completely visible)
    //make the pig completely visible when the game starts
    this.Visibility = 255;
  }

  display(){
  	//study the speed of the pig, it changes when it is hit by the bird
  	console.log(this.body.speed);
  	
//display the pig if the speed is less than 3, else make it disappear gradually
  	if (this.body.speed<3) {
  		super.display()
  	} 
  	else {
  		World.remove(world,this.body);

// use push and pop so that changes are not applied to all the objects of the game
  		push();
  		this.Visibility = this.Visibility-5;
  		//tint creates vanishing effect, adds a transparent layer to the image
  		tint(255,this.Visibility);
  		image(this.image,this.body.position.x,this.body.position.y,50,50);
  		pop();
  	}
  }

};