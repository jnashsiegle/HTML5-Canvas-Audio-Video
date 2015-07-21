window.onload = function() {
	
	var canvas = document.getElementById("canvas1");

	var stage = new createjs.Stage(canvas);

		//Draw a rectangle

		var rect1 = new createjs.Shape();

		//Create our fill

		//rect1.graphics.beginFill("purple");
		//rect1.graphics.beginFill("rgb(162, 216, 255"); //light blue
		//rect1.graphics.beginFill(createjs.Graphics.getRGB(162, 216, 255, .5));//rgba
		
		//Create a linear beginLinearGradientFill gradient placement #between 0-1   start gradient/end gradient  
		//rect1.graphics.beginLinearGradientFill(["yellow", "red"], [0, 1], 50,50, 150,150);//diagonal gradient to make horizontal
		//to make horizontal use: 
		//rect1.graphics.beginLinearGradientFill(["yellow","purple", "red"], [0, .5, 1], 50,50, 150,50);

		//Create a radial gradient
		rect1.graphics.beginRadialGradientFill(["yellow","green", "red"], [0,.5,1], 100,100,0, 100,100,100);//150/150/with radius of 0 etc

		//Draw the actual rectangle

		rect1.graphics.rect(50,50, 100,100);

		//Add stage

		stage.addChild(rect1);

		stage.update();


	
			
}