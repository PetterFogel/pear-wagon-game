interface Images {
    keyboard: p5.Image;
    mouse: p5.Image;
    greenPear: p5.Image;
    rottenPear: p5.Image;
    wagon: p5.Image;
    bomb: p5.Image;
    star: p5.Image;
    heart: p5.Image;
    cloud1: p5.Image;
    cloud2: p5.Image;
    tree: p5.Image;
}
interface Sounds {
    intro: p5.SoundFile;
    greenpear: p5.SoundFile;
    rottenpear: p5.SoundFile;
    star: p5.SoundFile;
    heart: p5.SoundFile;
    bomb: p5.SoundFile;
}

//---- GLOBAL VARIABLES ----//
let pearWagon: PearWagon;
let images: Images;
let sounds: Sounds;

function preload() {
    images = {
        keyboard: loadImage('assets/images/keyboard.png'),
        mouse: loadImage('assets/images/mouse.png'),
        greenPear: loadImage('assets/images/pear.png'),
        rottenPear: loadImage('assets/images/rottenpear.png'),
        wagon: loadImage('assets/images/wagon.png'),
        bomb: loadImage('assets/images/bomb.png'),
        star: loadImage('assets/images/star.png'),
        heart: loadImage('assets/images/heart.png'),
        cloud1: loadImage('assets/images/cloud1.png'),
        cloud2: loadImage('assets/images/cloud2.png'),
        tree: loadImage('assets/images/tree.png')
    }

    sounds = {
        intro: loadSound('assets/sounds/intro.wav'),
        greenpear: loadSound('assets/sounds/greenpear.wav'),
        rottenpear: loadSound('assets/sounds/rottenpear.wav'),
        star: loadSound('assets/sounds/star.wav'),
        heart: loadSound('assets/sounds/heart.wav'),
        bomb: loadSound('assets/sounds/bomb.wav')
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    pearWagon = new PearWagon();
}

function draw() {
    pearWagon.update();
    pearWagon.draw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}