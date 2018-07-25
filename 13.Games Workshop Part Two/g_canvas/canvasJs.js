
let canvas = document.getElementById('can')
let ctx = canvas.getContext('2d')

let bgReady = false;
let bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};

bgImage.src = "./images/background.png";

let heroReady = false;
let heroImage = new Image();

heroImage.onload = function () {
    heroReady = true;
};

heroImage.src = "./images/hero.png";

let monsterReady = false;
let monsterImage = new Image();

monsterImage.onload = function () {
    monsterReady = true;
};

monsterImage.src = "./images/monster.png";

let hero = {
    speed: 5,
    x: 0,
    y: 0
};

let monster = {
    speed: 3,
    x: 0,
    y: 0
};

let monstersCaught = 0;

let keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
});

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
});

let reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    monster.x = 32 + (Math.random() * (canvas.width - 64));
    monster.y = 32 + (Math.random() * (canvas.height - 64));
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let update = function () {

    if (38 in keysDown && hero.y > 20) {
        hero.y -= hero.speed;
    }
    if (40 in keysDown && hero.y < 420) {
        hero.y += hero.speed;
    }
    if (37 in keysDown && hero.x > 30) {
        hero.x -= hero.speed;
    }
    if (39 in keysDown && hero.x < 450) {
        hero.x += hero.speed;
    }

    if (87 in keysDown) {
        if (monster.y <= 0)
            monster.y += 450;

        monster.y -= monster.speed;
    }

    if (83 in keysDown) {
        if (monster.y >= 450)
            monster.y -= 450;

        monster.y += monster.speed;
    }

    if (65 in keysDown) {
        if (monster.x <= 0)
            monster.x += 480;

        monster.x -= monster.speed;
    }

    if (68 in keysDown) {
        if (monster.x >= 480)
            monster.x -= 480;

        monster.x += monster.speed;
    }

    if (hero.x <= (monster.x + 32)
        && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32)
        && monster.y <= (hero.y + 32)) {

        ++monstersCaught;
        reset();
    }
};

let render = function () {

    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }

    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "12px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Monsters caught: " + monstersCaught, 32, 62);
    ctx.fillText("Hero controls: Up Down Left Right", 32, 32);
    ctx.fillText("Monster controls: W S A D", 342, 32);

    if (monstersCaught == 5) {

        ctx.fillStyle = "red";
        ctx.font = "50px Helvetica";
        ctx.fillText("Game Over!", 110, 200);
        ctx.fillText("Hero Won!", 120, 250);

        monsterReady = false;
        heroReady = false;

        document.getElementById('restartBtn')
            .style.display = 'block';

        document.getElementsByTagName('body')[0]
            .style.background = 'red';
    }
};

let main = function () {
    update();
    render();
    requestAnimationFrame(main);
};

let w = window;

requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

reset()

main()