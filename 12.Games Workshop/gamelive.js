
(function app() {

    const catSpeed = 5;
    let mouseSpeed = 1;
    let resourses = 2;

    let theCat = document.getElementById('theCat');
    theCat.onload = onResourseLoad;

    let theMouse = document.getElementById('theMouse');
    theMouse.onload = onResourseLoad;

    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    window.addEventListener('keydown', keyboardHender);
    window.addEventListener('keyup', keyboardHender);
    let keysPressed = {};

    let guy = {x: 400, y:300};
    let mouse = {x: 10, y:10, dirX:true, dirY:true};
    let distance = 0;
    let score = 0;
    let level = 1;
    function keyboardHender(event) {

        if(event.type === 'keydown') 
            keysPressed[event.code] = true;
        else 
            delete keysPressed[event.code];
    }

    function main() {

        for(let key in keysPressed) {

            if (key === "ArrowLeft") {
                guy.x -= catSpeed;
            }
            else if (key === "ArrowRight") {
                guy.x += catSpeed;
            }
            else if (key === "ArrowUp") {
                guy.y -= catSpeed;
            }
            else if (key === "ArrowDown") {
                guy.y += catSpeed;
            }
        }

        moveMouse();
        detectCollusion();
        draw();
        requestAnimationFrame(main);
    }

    function draw(event) {

        ctx.clearRect(0,0,800,600);
        ctx.drawImage(theMouse, mouse.x - theMouse.width / 2, mouse.y - 36);
        ctx.drawImage(theCat, guy.x-110, guy.y-100);

        ctx.fillText(`Score: ${score.toString()}`, 50, 50);
        ctx.fillText(`Level: ${level.toString()}`, 50, 60);
    }

    function detectCollusion() {

        distance = Math.sqrt((guy.x - mouse.x) ** 2 + (guy.y - mouse.y) ** 2);

        if(distance < 40) {

            score ++;
            
            if(score === 5)
                level++;

            if(score === 10)
                level++;

            if(score === 15)
                level++;

            if(score === 20)
                level++;

            if(score === 25)
                level++;

            if(score === 31)
                alert("You won !!!");

            mouse.x = Math.random() * 800;
            mouse.y = Math.random() * 600;
            guy.x = Math.random() * 800;
            guy.y = Math.random() * 600;
        }
    }

    function moveMouse() {
        
        if(mouse.dirX) {
            mouse.x += mouseSpeed;
            if(mouse.x >= 770)
                mouse.dirX = false;
        }
        else {
            mouse.x -= mouseSpeed;
            if(mouse.x <= 10) {
                mouse.dirX = true;
            }
        }
        if(mouse.dirY) {
            mouse.y += mouseSpeed;
            if(mouse.y >= 570)
                mouse.dirY = false;
        }
        else{
            mouse.y -= mouseSpeed;
            if(mouse.y <= 10) {
                mouse.dirY = true;
            }
        }
    }
    
    function onResourseLoad() {
        resourses--;
        if(resourses == 0)
            main();
    }

    main();
})();