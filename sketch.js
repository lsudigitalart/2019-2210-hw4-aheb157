
//i tried by myself for hours and couldnt get anything to work so heres me following a tutorial by the coding train on youtube but changing colors and some stuff
var ship;
var flowers =[];
var drops = [];
function setup(){
    createCanvas(600,400);
    ship= new ship();
    //drops=new Drop(width/2, height/2);
    for(var i =0; i<6; i++){
    flowers[i]= new flower(i*80+80,60);
}}

function draw(){
background(51);
ship.show();
ship.move();
for(var i =0; i<drops.length; i++){
    drops[i].show();
    drops[i].move();
    for(var j =0; j<flowers.length; j++){
       if(drops[i].hits(flowers[j])){
           flowers[j].begone();
           //drops[i].remove();
          
       }
    }

}
var edge =false;

for(var i =0; i < flowers.length; i++){
    flowers[i].show();
    flowers[i].move();
    if (flowers [i].x > width || flowers[i].x < 0){
    edge = true;
}}
if (edge){
    for (var i =0; i<flowers.length; i++){
        flowers[i].shiftDown();

}}
var stop = false;
for (var j =0; j<flowers.length; j++){
    if(flowers[j] > 350){
        stop=true;}
        if (stop){
        textSize(50);
        stroke(255,0,0);
        text("GAME OVER",width/4, height/2);
    }}
//for(var i =0; i<drops.length; i++){
 //if (drops[i].toDelete){
  //   drops.splice(i, 1);
 //}
 textSize(15);
fill(255,215,0);
noStroke();
text("Shrink all blocks before they reach you.   Space to fire---Left and Right arrows to move", 10, 20); 
}
function keyReleased(){
    if (key!=' '){
    ship.setDir(0);
    }
}

function keyPressed (){
if (key===' '){
    var drop = new Drop (ship.x, height-40);
    drops.push(drop);
}

if (keyCode==RIGHT_ARROW){
ship.setDir (1);
    } else if (keyCode==LEFT_ARROW){
        ship.setDir(-1);
     } }

   
