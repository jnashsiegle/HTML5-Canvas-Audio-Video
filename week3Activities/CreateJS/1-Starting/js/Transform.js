window.onload = function() {

var canvas = document.getElementById("canvas1");
var stage = new createjs.Stage(canvas);

var shape = new createjs.Shape();

//setup a fill
shape.graphics.beginFill("red");

//draw rectangle
shape.graphics.rect(50,50, 100,100);

//rotate
//degrees
//rotates around registration point - MUST DO CHANGE AND MOVE BELOW IN ORDER TO GET REGX CENTERED IF IT DOES NOT START AT 0, 0
//shape.rotation = 30; //commented out for remaining of lesson

//change the registration point
//origin point of the square + width/2 or height/2
shape.regX = 100;
shape.regY = 100;

//move our square back down
shape.x = 200;
shape.y = 100;

//SCALE
//.5 half 2 = twice
//shape.scaleX = 1.5;
//shape.scaleY = .5;

//alpha
//shape.alpha = .25;

//visible
shape.visible = 1; //visible or not visible 0 or 1
//visiblility is different than alpha..if alpha 0 it can still be clicked on
//the shape is still there.  If it is not visible, it is no longer clickable
//it is no longer drawn

//skewing
shape.skewX = 200;
shape.skewY = 200;



stage.addChild(shape);
stage.update();


			
	
	
}