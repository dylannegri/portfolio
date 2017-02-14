var player;
var ground;
var cloud01;
var drops = [];
var umbrella;
var GRAVITY = 2;


function setup() {
	createCanvas(windowWidth, 500);

	player = createSprite(width/4, height - 60, 20, 40);
	player.velocity.x = 0;
	player.velocity.y = 0;


	// ground = createSprite(0, height, 2000, 80);
	// ground.shapeColor = color(111);
	ground = new Ground(0, height);

	
	cloud01 = new cloud(width*.7,200);
	console.log(cloud01);
}

function draw(){
	background(51);
	ground.show();

var edge = false;

	cloud01.move();

	if(cloud01.x > width - 100 || cloud01.x < 100){
		edge = true;
	}
	if (edge) {
		cloud01.reverse();
	}




//cloud rain drops
for(var i = 0; i < drops.length; i++){
  	drops[i].show();
  	drops[i].move();

  	if(drops[i].hits(ground.y)){
  		drops[i].gone();
  		console.log("Rain is gone!");
  	}

  	if (keyDown('e')) {
  	 	umbrella = new Umbrella(player.position.x, player.position.y - 30);
	 	umbrella.show();
  		if(drops[i].hits(player.position.y -30)){
  			drops[i].gone();
  			console.log("umbrella works!");
  		}
  	}
}



//------------------PLayer Controls--------------------
	if (keyDown("d")) {
		player.velocity.x += .2;
	} 
	if (keyDown("a")) {
		player.velocity.x -= .2;
	}
	if (keyWentUp("w")) {
		player.position.y = player.position.y -40;
	}
	if (player.position.y <= height - 60){
		player.position.y += 5;		
	}
	// if (keyDown("e")) {
	// 	umbrella = new Umbrella(player.position.x, player.position.y - 30);
	// 	umbrella.show();
	// }

//------------------PLayer Controls--------------------
	cloud01.display();
	drawSprite(player);

var drop = new Drop(cloud01.x, cloud01.y);
	drops.push(drop);

for(var i = drops.length-1; i >= 0; i--) {
  	if (drops[i].delete) {
  		drops.splice(i, 1);
	}
}// cloud raindrops get deleted

}//draw

function keyReleased() {
	if(key != ' '){
		player.velocity.x = 0;
	}
	if(key != ' '){
		player.velocity.y = 0;
	}
}//key released to stop movement










// function mousePressed(){
// 	cloud01.clicked();
// }//mouse pressed

// function cloud01(x,y){


// cloud01.clicked = function() {
// 	console.log(cloud01.x);
// 	var d = dist(mouseX, mouseY, cloud01.x, cloud01.y);
// 	//mousePressed();
// }
// }//cloud function