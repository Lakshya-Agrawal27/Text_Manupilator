noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#0000FF');

    document.getElementById("square_side").innerHTML = "Width And Height Of The Text Will Be:-  " +  difference + "px"
    fill('#00008B');
    stroke('#00008B');
    text("Łightning", 205, 300);
    textSize(difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialised');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX);
        console.log("rightWristX = " + rightWristX);
        console.log("difference = " + difference);

    }
}


