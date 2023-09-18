 var canvas = document.getElementById("meuCanvas");
 var caneta = canvas.getContext("2d");

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;

function add() {
    imgBackground = new Image();
    imgBackground.onload = uploadBackground;
    imgBackground.src = backgroundImage ;  // Corrigido para backgroundImage
    
    imgRover = new Image();
    imgRover.onload = uploadGreenCar;
    imgRover.src = greencarImage;  // Corrigido para greencarImage
}

function uploadBackground() {
    caneta.drawImage(imgBackground, 0 , 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
    caneta.drawImage(imgRover, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    // ... restante do código ...
}

function up() {
    if(greencar_y >= 0) {
        greencar_y -= 10;
        uploadBackground();  // Corrigido para uploadBackground
        uploadGreenCar();
    }
}

function down() {
    if(greencar_y <= 500) {
        greencar_y += 10;
        uploadBackground();
        uploadGreenCar();
    }
}

function left() {
    if(greencar_x >= 0) {
        greencar_x -= 10;
        uploadBackground();
        uploadGreenCar();
    }
}

function right() {
    if(greencar_x <= 900) {
        greencar_x += 10;
        uploadBackground();
        uploadGreenCar();
    }
}

