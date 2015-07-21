window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//create shape
	var shape = new createjs.Shape();

	//Set up Stroke
	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(10, "butt", "round");

	//draw a normal rectangle
	shape.graphics.rect(50,50, 300,300);

	//draw a rounded rectangle
	//drawRoundRect(x, y, w, h, radius);
	shape.graphics.beginStroke("blue");
	shape.graphics.drawRoundRect(75,75, 250,250, 50);

	//Complex Round Rectangle
	//drawRoundRectComplex(x, y, w, h, TL, TR, BR, BL);
	shape.graphics.beginStroke("red");
	shape.graphics.drawRoundRectComplex(100,100, 200,200, 50, 0, 50, 0);




	//add shape to stage
	stage.addChild(shape);

	stage.update();

	
	
}