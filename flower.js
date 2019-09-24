function flower(x,y){

this.x=x;
this.y=y;
this.r =30;
this.xdir=1;


this.begone=function(){
    this.r=this.r-2;
}
this.shiftDown= function(){
    this.xdir *= -1;
    this.y += this.r;
}

this.move=function(){
    this.x=this.x+this.xdir;
}


this.show=function(){
fill(255,0,0);
stroke(255,0,0);
rect(this.x, this.y,this.r*2,this.r*2); }  
}

