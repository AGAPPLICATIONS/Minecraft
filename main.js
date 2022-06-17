var canvas = new fabric.Canvas("myCanvas");
blockimagewidth = 30;
blockimageheight = 30;
playerx = 10;
playery = 10;
var playerobject = "";
var blockimageobject = "";

function playerupdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerobject);

    })


}

function newImage(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockimageobject = Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top: playery,
            left: playerx
        });
        canvas.add(blockimageobject);

    })


}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        console.log("p and shift key pressed together");
        blockimagewidth = blockimagewidth + 10;
        blockimageheight = blockimageheight + 10;
        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;

    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("m and shift key pressed together");
        blockimagewidth = blockimagewidth - 10;
        blockimageheight = blockimageheight - 10;
        document.getElementById("current_width").innerHTML = blockimagewidth;
        document.getElementById("current_height").innerHTML = blockimageheight;

    }
    if (keypressed == "87") {
        newImage("wall.jpg");
        console.log("w");
    }
    if (keypressed == "67") {
        newImage("cloud.jpg");
        console.log("c");
    }
    if (keypressed == "68") {
        newImage("dark_green.png");
        console.log("d");
    }
    if (keypressed == "71") {
        newImage("ground.png");
        console.log("g");
    }
    if (keypressed == "76") {
        newImage("light_green.png");
        console.log("l");
    }
    if (keypressed == "82") {
        newImage("roof.jpg");
        console.log("r");
    }
    if (keypressed == "84") {
        newImage("trunk.jpg");
        console.log("t");
    }
    if (keypressed == "85") {
        newImage("unique.png");
        console.log("u");
    }
    if (keypressed == "89") {
        newImage("yellow_wall.png");
        console.log("y");
    }
    if (keypressed == "37") {
        left();
        console.log("left");
    }
    if (keypressed == "38") {
        up();
        console.log("up");
    }
    if (keypressed == "39") {
        right();
        console.log("right");
    }
    if (keypressed == "40") {
        down();
        console.log("down");
    }
}



function up() {
    if (playery >= 0) {
        playery = playery - blockimageheight;
        console.log("x=" + playerx + "y=" + playery);
        canvas.remove(playerobject);
        playerupdate();
    }

}

function down() {
    if (playery <= 500) {
        playery = playery + blockimageheight;
        console.log("x=" + playerx + "y=" + playery);
        canvas.remove(playerobject);
        playerupdate();
    }

}

function left() {
    if (playerx >= 0) {
        playerx = playerx - blockimagewidth;
        console.log("x=" + playerx + "y=" + playery);
        canvas.remove(playerobject);
        playerupdate();
    }

}

function right() {
    if (playerx <= 850) {
        playerx = playerx + blockimagewidth;
        console.log("x=" + playerx + "y=" + playery);
        canvas.remove(playerobject);
        playerupdate();
    }

}