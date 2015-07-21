window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	var shape = new createjs.Shape();

	shape.graphics.beginStroke("purple");
	shape.graphics.setStrokeStyle(5, "round", "round");

	//drawPolyStar(x, y, radius, #sides, pointSize, angle);

	//5 sides star -  pointSize - 0 = polygon, 1-spikes
	shape.graphics.drawPolyStar(75,75, 50, 5, .5, -90);

	//3 sided polygon aka triangle
	shape.graphics.drawPolyStar(550,75, 50, 3, 0, -90);

	var shape2 = new createjs.Shape();

	shape2.graphics.beginFill("red");
	shape2.graphics.drawPolyStar(250,250, 50, 3, 0, -90);

	//add event listener to make clickable

	shape2.addEventListener("click", function(event){

		console.log("the text string of red triangle has been clicked");
	});


	stage.addChild(shape);
	stage.addChild(shape2);
	stage.update();
	
	
}