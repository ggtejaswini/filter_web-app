noseX = 0;
noseY = 0;
function preload(){
    filterimg = loadImage('https://i.postimg.cc/kgSWqgSZ/dog-removebg-preview.png');
}

function back(){
    window.location="index.html";
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}

function modelloaded(){
    console.log("PoseNet is Initialized");
}

function gotposes(results){
    if (results.length  > 0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x-70;
        noseY = results[0].pose.nose.y-70;
        console.log("nose x = " +  noseX);
        console.log("nose y = " +  noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(filterimg,noseX,noseY,150,150);
}

function takesnapshot(){
    save('MyFilterImage.png');
}