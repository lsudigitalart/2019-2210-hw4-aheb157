function Drop(x,y){

    this.x= x;
    this.y= y;
    this.r=4;
    //this.toDelete =false;


    this.show=function(){
    fill(0,215,255);
    noStroke();
    ellipse(this.x, this.y,this.r*2,this.r*2); }
    
    //this.remove=function(){
     //this.toDelete =true;

    //}


    this.hits=function (flower){
        var d=dist(this.x,this.y,flower.x,flower.y);
     if (d<this.r + flower.r){
         return true;
     }else {
         return false;
     }
    }

    this.move= function(){
        this.y=this.y- 5}}