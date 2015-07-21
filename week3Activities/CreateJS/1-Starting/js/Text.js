window.onload = function() {
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

	//text class is for working with text
	var sentence = new createjs.Text();

	//modify the text property
	sentence.text = "This is a sentence about nothing...or is it?";
	sentence.font = "bold 30px Times";
	sentence.color = "blue";

	//text IS a display object
	//it inherits all of the normal properties

	sentence.x = 150;
	sentence.y = 50;
	//sentence.rotation = 45;

	//text has more properties than other objects
	//textAlign - "left", "right", "center"
	sentence.textAlign = "left"; //left is default

	//lineWidth
	sentence.lineWidth = 200;

	//space between line
	//lineHeight
	sentence.lineHeight = 50;

	//stroke the outside of text
	//outline
	sentence.outline = false;

	//combine them into one line
	var sentence2 = new createjs.Text("This is our 2nd sentence", "bold 30px Times", "blue");


	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.update();
	
	
}