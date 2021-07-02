var video;
function preload(){

}

function setup(){
var canvas=createCanvas(400, 400);
canvas.position(550, 250)
video=createCapture(VIDEO)
video.hide();
tint_color="";
}

function draw(){
image(video, 0, 0, 400, 400);
tint(tint_color);
}

function take_snapshot(){
save('person.png');
}

function filter_tint(){
tint_color=document.getElementById("Color Name").value
}