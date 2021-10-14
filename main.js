song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("mood.mp3");
    song2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 500);
}


function play()
{
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function play2()
{
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}



