function Drop(x, y){
	this.x = x;
	this.y = y;
	this.r = 2
	this.delete = false;
  this.aaa = [20];

  for(var i = 0; i<3; i++){
    this.aaa[i]=70-Math.random()*140;
  }

  this.show = function() {
  	noStroke();
    fill(255,255,0);
    for(var i = 0; i<3; i++){
      ellipse(this.x+this.aaa[i], this.y+Math.random()*10, this.r, this.r*2);
    }
  }

  this.hits = function(y){
  	var d = abs(this.y-y);
  	if (d < 10) {
  		return true;
  	} else {
  		return false;
  	}
  }

  this.hits02 = function(x, y){
    var u = abs(this.x && this.y);
    if(u > 1) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function(){
  	this.y += 2;
  }

  this.gone = function(){
  	this.delete = true;
  }
}