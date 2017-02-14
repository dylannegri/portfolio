function Ground(x, y){
  this.x = x;
  this.y = y
	this.w = 2000;
  this.h = -80;


  this.show = function() {
  	noStroke();
    fill(0,20,255,150);
    rect(this.x, this.y , this.w, this.h);
  }

}