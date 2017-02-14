function cloud(x,y) {
	this.x = x;
	this.y = y;
	this.col = color(222);
	this.radius01 = 150;
	this.radius02 = 50;
	this.xdir = 1;


this.display = function(){
	noStroke();
	fill(this.col);
	ellipse(this.x, this.y, this.radius01, this.radius02);
}

this.clicked = function(){
	if(dist(mouseX,mouseY,this.x,this.y)<100){
		this.animate();
	}
}

// this.animate = function() {
// 	this.x -= 50-Math.random()*100;
// }

this.move = function(){
  	this.x = this.x + this.xdir;
  }

this.reverse = function() {
	this.xdir *= -1;
}
}
