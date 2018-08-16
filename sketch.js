let runningPig;
let walkingPig;
let sleepingPig;
let pigs = [];
let sprites = [];

let isStart = false;

function preload() {
    runningPig = loadImage('heoChayChay.png');
    walkingPig = loadImage('heoDiDi.png');
    pigs.push(runningPig, runningPig, walkingPig);
}

function setup() {
    let sketchHolder = document.getElementById('sketch-holder');
    let startBtn = document.getElementById('startBtn');
    let canvas = createCanvas(sketchHolder.offsetWidth, 600);
    canvas.parent(sketchHolder);
    background(0);

    startBtn.onclick = raceBegin;

    for(let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * pigs.length);
        sprites.push(new Sprite(pigs[index], 144, 144, 0, i * 144, random(0.3, 0.47)));
    }

    sprites.map(sprite => sprite.render(0));
}

function draw() {
    if(isStart && sprites.length != 0) {
        background(0);
        sprites.map(sprite => sprite.animate());
    }
}

function raceBegin() {
    isStart = !isStart;
}


