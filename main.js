status = "";
function preload(){

}
function setup(){
    canvas = createCanvas(400, 290);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 480, 350);
}
function start(){
   
        objectdetector = ml5.objectDetector('cocossd', modalloaded);
        document.getElementById("status").innerHTML = "Detecting Objects";
}
function modalloaded(){
    console.log("modal loaded");
    status = true;
}
