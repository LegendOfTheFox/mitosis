function Cell(pos, r, c) {
    
    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(width), random(height));
    }
    
    this.r = r || 60;
    //generate a random color
    this.c = c || color(random(100,255), 0, random(100,255), 80);
    
    this.clicked = function(x, y){
        var d = dist(this.pos.x, this.pos.y, x, y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }//clicked
    
    this.mitosis = function() {
        this.pos.x += random(-this.r, this.r);
        var cell = new Cell(this.pos, this.r* 0.8, this.c);
        return cell;
    }//mitosis
    
    this.move = function () {
      var vel = p5.Vector.random2D();
        this.pos.add(vel);
    }//move
    
    this.show = function () {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r );
    }//show

}//Cell