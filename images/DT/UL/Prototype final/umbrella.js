function Umbrella(x, y){
  this.x = x;
  this.y = y
  this.w = 60;
  this.h = 7;


  this.show = function() {
  	noStroke();
    fill(255,20,20);
    rectMode(CENTER);
    rect(this.x, this.y , this.w, this.h);
  }

}