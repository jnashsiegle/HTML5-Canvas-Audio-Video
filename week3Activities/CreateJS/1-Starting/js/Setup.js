window.onload = function() {
	
	//first create our stage

	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas); //creates a new stage and wraps it around our canvas

	//create a blue circle
	var circleGraphic = new createjs.Graphics();

	circleGraphic.beginFill("blue");
	circleGraphic.drawCircle(0,0, 50); //50 is the radius


	  	//create our shape and wrap around our graphic
	  	//shape is a display object that handles vector graphics
	  	var circleShape = new createjs.Shape(circleGraphic);
	
		//Access some of the shapes properties

		circleShape.x = 50; //moves the shape from 0,0 to 50 to the right
		circleShape.y = 50; //moves it to 50 on the y
		//matches the radius as otherwise the circle would be partially off canvas.

		//Add shape to stage's display list
		stage.addChild(circleShape);

		//In order to show on our screen let's update the stage
		stage.update();


			
}