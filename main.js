var noseX=0;
var noseY=0;
leftwristX=0
rightwristX=0;
difference=0
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,410);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}

function draw(){
    background('#e7d1ff');
    textsize('text', noseX, noseY);
    fill('#dff7f3');
    stroke('#dff7f3');
    document.getElementById("square_side").innerHTML=difference;
}