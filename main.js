
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

// Defina as posições iniciais da bola e do buraco.
var ball_X = 0;
var ball_Y = 0;
var hole_X = 100;
var hole_Y = 100;

var block_image_width = 5;
var block_image_height = 5;

function loadImg() {
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
    img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
	newImage();
}

function newImage() {
	// Escreva o código para enviar a imagem da bola ao canvas
	var img = new Image();
	img.onload = function() {
	ctx.drawImage(img, ball_X, ball_Y);
	};
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	var keyPressed = e.keyCode;
	console.log(keyPressed);

	// Verifique a condição das imagens da bola e do buraco para finalizar o jogo.
	// Se as coordenadas coincidirem, remova a imagem da bola, exiba a mensagem "Você atingiu o objetivo!!!"
	// e torne a borda do canvas vermelha 'red'.
	if (ball_X === hole_X && ball_Y === hole_Y) {
		var ballImage = document.getElementById("ball.png");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.strokeStyle = "red";
		ctx.lineWidth = 5;
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
		console.log("Você atingiu o objetivo!!!");
	} else {
		if (keyPressed == '38') {
			up();
			console.log("up");
			// Mova a bola para cima
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
			// Mova a bola para baixo
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
			// Mova a bola para a esquerda
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
			// Mova a bola para a direita
		}
	}
}

function up() {
	if (ball_Y > 0) {
		ctx.clearRect(ball_X, ball_Y, block_image_width, block_image_height);
		ball_Y -= block_image_height;
		newImage();
	}
}

function down() {
	if (ball_Y < canvas.height - block_image_height) {
		ctx.clearRect(ball_X, ball_Y, block_image_width, block_image_height);
		ball_Y += block_image_height;
		newImage();
	}
}

function left() {
	if (ball_X > 0) {
		ctx.clearRect(ball_X, ball_Y, block_image_width, block_image_height);
		ball_X -= block_image_width;
		newImage();
	}
}

function right() {
	if (ball_X < canvas.width - block_image_width) {
		ctx.clearRect(ball_X, ball_Y, block_image_width, block_image_height);
		ball_X += block_image_width;
		newImage();
	}
}


