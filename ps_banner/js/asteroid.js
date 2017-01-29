function Asteroid(pos){
	if (pos) {
		//create new obj at the same location.
		this.pos = pos.copy();
	} else{
		this.pos = createVector(random(width), random(height));
	}
	this.vel = p5.Vector.random2D();
	this.r = random(10, 20);
	this.strk = color(255, 50); 
	this.total = floor(random(5, 20));
	this.offset = [];
	for(var i = 0; i < this.total; i++){
		this.offset[i] = random (-this.r / 4, this.r);
	}

/////////////^^^^Asteroid(global)^^^^/////////////////////
	
	this.update = function(){
		this.pos.add(this.vel);
	}//this is update

	this.render = function(){
		push();
		stroke(this.strk);
		noFill();
		translate(this.pos.x, this.pos.y);
		//ellipse(0,0, this.r*2);
		beginShape();
		for (var i = 0; i < this.total; i++){
			var angle = map(i, 0, this.total, 0, TWO_PI);
			var r = this.r + this.offset[i];
			var x = r * cos(angle);
			var y = r * sin (angle);
			vertex(x,y);
		}
		endShape(CLOSE);
		pop();

	}
	//break asteroids into two
	this.clicked = function(){
		d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

		if(d < this.r){
			this.strk = color (255, 50);
			this.vel = p5.Vector.random2D();
			
			return true;
		} else {
			return false;
		}
	}

	this.intersects = function(other) {
		var d2 = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
		if (d2 < (this.r) + (other.r)){
			this.strk = color (255, random(200), 0, 50);

			return true;
		} else {
			return false;
		}
	}

	this.changeDirection = function() {
		this.vel.x *= -1;
		this.vel.y *= -1;
	}

	this.edges = function(){
		if (this.pos.x > width + this.r){
			this.pos.x = -this.r;
		} else if (this.pos.x < -this.r) {
			this.pos.x = width + this.r;
		}
		if (this.pos.y > height + this.r){
			this.pos.y = -this.r;
		} else if (this.pos.y < -this.r) {
			this.pos.y = height + this.r;
		}
	}//edges
}