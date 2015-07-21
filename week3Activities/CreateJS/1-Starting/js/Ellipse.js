window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	var shape = new createjs.Shape();

	//Create our stroke
	shape.graphics.beginStroke("purple");

	//strokestyles
	shape.graphics.setStrokeStyle(10, "butt", "round");

	//Draw a circle
	//drawCircle(x, y, r);

	shape.graphics.drawCircle(100, 100, 50);

	//draw an ellipse
	//drawEllipse(x, y, w, h);
	shape.graphics.drawEllipse(75, 200, 150, 50);

	//arcs
	//arc(x, y, startAngle, endAngle, anticlockwise = 1 or clockwise = 0);
	shape.graphics.beginStroke("red");
	shape.graphics.arc(100,100, 75, 0,-90*(Math.PI/180), 1);

	stage.addChild(shape);
	stage.update();

}