var asteroids = [];

function windowResized(){
  resizeCanvas(windowWidth, 180);
}

function setup(){
	canvas = createCanvas(windowWidth, 180);
	canvas.position (0, 0);
  	canvas.style('z-index', '-1');

	for(var i = 0; i < 6; i++){
		asteroids.push(new Asteroid());
		
	}
	//Asteroid.edges();
}

function draw(){
	background(0, 10);
	

	for (var i = 0; i < asteroids.length; i++){
		asteroids[i].render();
		asteroids[i].edges();
		asteroids[i].update();
		for (var z = 0; z < asteroids.length; z++){
			if(i != z && asteroids[i].intersects(asteroids[z])) {
				asteroids[i].changeDirection();
				asteroids[z].changeDirection();
			}//intersect condition
		}//second loop
	}//first loop
}//draw

function mousePressed(){
	for(var i = asteroids.length - 1; i >= 0; i--){
		console.log("clicked!");
		asteroids[i].clicked();

	}
}

