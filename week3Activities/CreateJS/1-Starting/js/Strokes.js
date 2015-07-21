window.onload = function() {
	
var canvas = document.getElementById("canvas1");

var stage = new createjs.Stage(canvas);

//Setup Shape
var shape = new createjs.Shape();

//Setup stroke
shape.graphics.beginStroke("purple");

//Setup Properties
//setStrokeStyle(width, caps, joints, miter); all but width are optional
shape.graphics.setStrokeStyle(10, "round", "miter", 6);

//Draw a line

shape.graphics.moveTo(25,25);
shape.graphics.lineTo(250, 25);

//second line
shape.graphics.moveTo(50,50);

//.graphics.quadraticCurveTo(cps, cpy, c, y);
//shape.graphics.quadraticCurveTo(50, 175, 250, 250);

//arcTo(x1, y1, x2, y2, radius);
//shape.graphics.arcTo(100, 50, 100, 500, 60);

//bezier curves
//bezierCurveTo(cp1x, cp1y, x, y);
shape.graphics.bezierCurveTo(100,50, 250,50, 200, 250,250);


//third line
shape.graphics.lineTo(50,250);


stage.addChild(shape);

stage.update();
	
	
}