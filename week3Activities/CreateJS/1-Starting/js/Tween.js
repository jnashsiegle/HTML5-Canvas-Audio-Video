window.onload = function() {
	
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);

	//create ball
	var ball = new createjs.Shape();

	//setup the ball
	ball.graphics.setStrokeStyle(5, "round", "round");
	ball.graphics.beginStroke("black");
	ball.graphics.beginFill("red");
	ball.graphics.drawCircle(0,0, 50);
	ball.graphics.endStroke();
	ball.graphics.endFill();

	//draw a line from center of ball to the outer edge so we can see how it moves

	ball.graphics.setStrokeStyle(1, "round", "round");
	ball.graphics.beginStroke("black");
	ball.graphics.moveTo(0,0);
	ball.graphics.lineTo(0, 50);
	ball.graphics.endStroke();

	//move the ball
	ball.x = 100;
	ball.y = 100;

	//create tweens

	//createjs.Tween.get(display object, {optional properties});
	//properties can be loop, useTicks, ignoreGlobal, boolean t or f, and more

	var tween = createjs.Tween.get(ball, {loop:true})
		.to({x:ball.x, y:canvas.height - 55, rotation:-360}, 1500, createjs.Ease.bounceOut)
		.wait(1000)
		.to({x:canvas.width -55, rotation:360}, 2500, createjs.Ease.bounceOut)
		.wait(1000)
		.call(tester)
		.to({scaleX: .5, scaleY: .5, x: 30, rotation: -360, y:canvas.height -30, alpha: 0}, 2500, createjs.Ease.bounceOut)
		.wait(1500)
		;

		function tester(){

			console.log("The tween has reached this point");
		}

	stage.addChild(ball);

	//stage.update();

	createjs.Ticker.addEventListener("tick", stage);



}