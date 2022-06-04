/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectable;
var canyon;


function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	collectable =
	{
		x_pos: 100,
		y_pos: floorPos_y - 25,
		size: 30,
		isFound: false,
	}
	canyon = 
	{
		x_pos: 300,
		y_pos: floorPos_y,
	}
}

function draw() {

	///////////DRAWING CODE//////////

	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	fill(160, 82, 45);
	rect(canyon.x_pos - 25,  canyon.y_pos, 100, 200);
	fill(0, 191, 255);
	rect(canyon.x_pos, canyon.y_pos, 50, 200);

	stroke(255);
	beginShape();
	vertex(canyon.x_pos + 10, canyon.y_pos + 10);
	vertex(canyon.x_pos + 40, canyon.y_pos + 30);
	vertex(canyon.x_pos + 10, canyon.y_pos + 50);
	vertex(canyon.x_pos + 40, canyon.y_pos + 70);
	vertex(canyon.x_pos + 10, canyon.y_pos + 90);
	vertex(canyon.x_pos + 40, canyon.y_pos + 110);
	endShape();
	noStroke();
	
	if (canyon.x_pos < gameChar_x && gameChar_x < canyon.x_pos + 50 && gameChar_y >= canyon.y_pos)
	{
		isPlummeting = true;
	}
	
	if (isPlummeting)
	{
		gameChar_y += 50;
	}


	// collectable token
	if (dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos + 25) < 20) {
		collectable.isFound = true;
	}
	if (collectable.isFound == false) {
		fill(0, 255, 0);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size + 20, collectable.size + 20);
		fill(0, 0, 255);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size);
		fill(255, 0, 0);
		ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 10, collectable.size - 10);
		fill(255, 255, 255);
		triangle(
			collectable.x_pos, collectable.y_pos - 10, 
			collectable.x_pos + 7, collectable.y_pos + 5, 
			collectable.x_pos - 7, collectable.y_pos + 5);
		stroke(255);
	}



	//the game character (action)
	if (isLeft && isFalling) {
		// add your jumping-left code
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x - 8, gameChar_y - 52, 6, 6);
		line(gameChar_x, gameChar_y - 45, gameChar_x - 9, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 30);

		// legs
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 5, gameChar_y - 20);
		vertex(gameChar_x - 3, gameChar_y - 10);
		vertex(gameChar_x + 5, gameChar_y - 0);
		endShape();

		beginShape();
		vertex(gameChar_x - 5, gameChar_y - 20);
		vertex(gameChar_x - 13, gameChar_y - 10);
		vertex(gameChar_x - 5, gameChar_y - 0);
		endShape();

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 20, gameChar_y - 23);
		vertex(gameChar_x + 10, gameChar_y - 33);
		endShape();

		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x, gameChar_y - 23);
		endShape();

		// set default
		strokeWeight(1);
	}
	else if (isRight && isFalling) {
		// add your jumping-right code
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x + 8, gameChar_y - 52, 6, 6);
		line(gameChar_x, gameChar_y - 45, gameChar_x + 9, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 30);

		// legs
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 5, gameChar_y - 20);
		vertex(gameChar_x + 13, gameChar_y - 10);
		vertex(gameChar_x + 5, gameChar_y - 0);
		endShape();

		beginShape();
		vertex(gameChar_x - 5, gameChar_y - 20);
		vertex(gameChar_x + 3, gameChar_y - 10);
		vertex(gameChar_x - 5, gameChar_y - 0);
		endShape();

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x, gameChar_y - 23);
		vertex(gameChar_x + 10, gameChar_y - 33);
		endShape();

		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x - 20, gameChar_y - 23);
		endShape();

		// set default
		strokeWeight(1);

	}
	else if (isLeft) {
		// add your walking left code
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x - 8, gameChar_y - 52, 6, 6);
		line(gameChar_x, gameChar_y - 45, gameChar_x - 9, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 30);

		// legs
		fill(255, 228, 181);
		ellipse(gameChar_x - 7, gameChar_y - 7, 6, 18);
		ellipse(gameChar_x + 7, gameChar_y - 7, 6, 18);

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 10, gameChar_y - 33);
		vertex(gameChar_x, gameChar_y - 33);
		endShape();

		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x - 20, gameChar_y - 33);
		endShape();

		// set default
		strokeWeight(1);
	}
	else if (isRight) {
		// add your walking right code
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x + 8, gameChar_y - 52, 6, 6);
		line(gameChar_x, gameChar_y - 45, gameChar_x + 9, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 30);

		// legs
		fill(255, 228, 181);
		ellipse(gameChar_x - 7, gameChar_y - 7, 6, 18);
		ellipse(gameChar_x + 7, gameChar_y - 7, 6, 18);

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 20, gameChar_y - 33);
		vertex(gameChar_x + 10, gameChar_y - 33);
		endShape();

		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x, gameChar_y - 33);
		endShape();

		// set default
		strokeWeight(1);
	}
	else if (isFalling || isPlummeting) {
		// add your jumping facing forwards code
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x + 5, gameChar_y - 52, 6, 6);
		ellipse(gameChar_x - 5, gameChar_y - 52, 6, 6);
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x - 5, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 27);

		// legs
		fill(255, 228, 181);
		ellipse(gameChar_x - 7, gameChar_y - 7, 6, 10);
		ellipse(gameChar_x + 7, gameChar_y - 7, 6, 10);

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 10, gameChar_y - 33);
		vertex(gameChar_x + 20, gameChar_y - 23);
		endShape();

		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x - 20, gameChar_y - 23);
		endShape();

		// set default
		strokeWeight(1);
	}
	else {
		// add your standing front facing code
		//character
		//general 
		strokeWeight(1);
		stroke(color(0, 0, 0));

		// head
		fill(0, 0, 0);
		triangle(gameChar_x, gameChar_y - 65, gameChar_x + 3, gameChar_y - 62, gameChar_x - 3, gameChar_y - 62);
		fill(255, 239, 213);
		ellipse(gameChar_x, gameChar_y - 50, 23, 23);

		//eyes
		ellipse(gameChar_x + 5, gameChar_y - 52, 6, 6);
		ellipse(gameChar_x - 5, gameChar_y - 52, 6, 6);
		line(gameChar_x + 5, gameChar_y - 45, gameChar_x - 5, gameChar_y - 45)

		// body
		fill(255, 255, 0);
		ellipse(gameChar_x, gameChar_y - 24, 22, 30);

		// legs
		fill(255, 228, 181);
		ellipse(gameChar_x - 7, gameChar_y - 7, 6, 18);
		ellipse(gameChar_x + 7, gameChar_y - 7, 6, 18);

		//arms
		strokeWeight(5);
		strokeJoin(MITER);
		beginShape();
		vertex(gameChar_x + 10, gameChar_y - 33);
		vertex(gameChar_x + 20, gameChar_y - 33);
		endShape();
		beginShape();
		vertex(gameChar_x - 10, gameChar_y - 33);
		vertex(gameChar_x - 20, gameChar_y - 33);
		endShape();

		// set default
		strokeWeight(1);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	// toward left and right
	if (isLeft) {
		gameChar_x -= 2;
	}
	else if (isRight) {
		gameChar_x += 2;
	}


	// add gravity
	if (gameChar_y < floorPos_y) {
		gameChar_y += 1;
		isFalling = true;
	}
	else {
		isFalling = false;
	}
}


function keyPressed() {
	// if statements to control the animation of the character when
	// keys are pressed.
	if (keyCode == 37) {
		console.log("left arrow");
		isLeft = true;
	}
	
	if (keyCode == 39) {
		isRight = true;
		console.log("right arrow");
	}

	if (gameChar_y == floorPos_y) {
		if (keyCode == 32) {
			console.log("flying");
			gameChar_y -= 130;
		}
	}
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased() {
	// if statements to control the animation of the character when
	// keys are released.
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
	if (keyCode == 37) {
		console.log("left arrow");
		isLeft = false;
	}
	else if (keyCode == 39) {
		isRight = false;
		console.log("right arrow");
	}
}   
