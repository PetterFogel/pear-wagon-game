interface Images {
    keyboard: p5.Image;
    mouse: p5.Image;
    greenPear: p5.Image;
    rottenPear: p5.Image;
    wagon: p5.Image;
    bomb: p5.Image;
}

//---- GLOBAL VARIABLES ----//
let pearWagon: PearWagon;
let images: Images;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
    images = {
        keyboard: loadImage('assets/keyboard.png'),
        mouse: loadImage('assets/mouse.png'),
        greenPear: loadImage('assets/images/pear_small.png'),
        rottenPear: loadImage('assets/images/rottenpear.svg'),
        wagon: loadImage('assets/images/wagon.svg'),
        bomb: loadImage('assets/images/bomb.svg')
        // heart: loadImage('assets/images/heart.svg'),
        // star: loadImage('assets/images/star.svg')
    }
    // Tyvärr har jag inte fått till den globala typningen för
    // inladdningen av ljud men fungerar bra enligt nedan..
    // sound = (window as any).loadSound('../assets/mySound.wav');
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function below
 */
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    pearWagon = new PearWagon();
}

// function mousePressed() {
//     // pearWagon.buttons = [];
//     // pearWagon.buttons.push(pearWagon.startScreen.playButton);
//     // pearWagon.buttons.push(pearWagon.startScreen.howToButton);

//     // for(let i = 0; i < pearWagon.buttons.length; i++){
//     //     if (i === 0){
//     //         pearWagon.buttons[i].clicked(pearWagon.startScreen, "play");
//     //     } else {
//     //         pearWagon.buttons[i].clicked("how");
//     //     }
//     // }

//     switch(pearWagon.gameState) {
//         case "start":
//             pearWagon.startScreen.clicked();
//             break;
//         case "over":
//             pearWagon.gameOverScreen.clicked();
//             break;
//         case "play":
//             // code
//             break;
//         case "how":
//             pearWagon.howToPlayScreen.clicked();
//             break;
//     }
// }

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
    pearWagon.update();
    pearWagon.draw();
}


/**
 *  Built in windowResize listener function in P5
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}