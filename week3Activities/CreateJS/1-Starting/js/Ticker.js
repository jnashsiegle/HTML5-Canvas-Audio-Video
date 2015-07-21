window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a red rectangle
	var shape = new createjs.Shape();
	
	//Fill 
	shape.graphics.beginFill("red");
	
	//Draw out the rectanlge
	shape.graphics.rect(0,0, 100, 100);
	
	//Change its registeration point
	shape.regX = 50;
	shape.regY= 50;
	
	//Move the rect to (100,100)
	shape.x = 100;
	shape.y = 100;
	
	stage.addChild(shape);
	
	//stage.update();

	//Ticker Class controls time
	//centralized heartbeat that makes a ticking noise
	//have a listener for tick 

	//set framerate.  FPS ( frames per second)
	//default value is 20 fps
	createjs.Ticker.setFPS(30);
	//30fps

	//create a listener
	createjs.Ticker.addEventListener("tick", ticks);//ticks here is name not a function

	function ticks(e){
		//console.log("tick");

		shape.rotation +=8;
		//shape.alpha -=.05;
		//shape.x += 5;
		//shape.y += 5; //- would make it go up
		//shape.skewX  += 20;
		//shape.skewY +=20;
		//shape.scaleX +=.2;
		//shape.scaleY +=.2;
		stage.update();  //had to move stage.update(); from up above to inside this function
	}
	
	
			
}