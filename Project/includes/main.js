window.onload = function() {
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	//text class is for working with text
	var sentence = new createjs.Text();
	var sentence2 = new createjs.Text();
	//modify the text property
	sentence.text = "LightPoint";
	sentence2.text = "Development"
	sentence.font = "bold 60px Verdana";
	sentence2.font = "bold 60px Verdana";
	sentence.color = "#657036";
	sentence2.color = "#657036";
	//text IS a display object
	//it inherits all of the normal properties
	sentence.x = 100;
	sentence.y = 100;
	sentence2.x = 200;
	sentence2.y = 175;


	stage.addChild(sentence);
	stage.addChild(sentence2);
	stage.update();	
}

/*+++++++++++++++++Let's fade in the site name++++++++++++++++*/
$(document).ready(function() { 
	$("#canvas1").fadeIn(2000);            
});

/*++++++++++++++++Let's make a hidden navigation set ++++++++++++++ */
$(document).ready(function(){
    $( '.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand')
   })
 })
