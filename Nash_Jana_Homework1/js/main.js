/*
     Name: Jana Nash-Siegle
     Date: 7-8-2015
     Class & Section:  WIA-1501
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
*/
window.onload = function(){  //Load up our script in preparation of each canvas content
         		
        	

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
	var theCanvas = document.getElementById("Canvas1"); 
        		if(theCanvas){
        			//Get Context
        			var ctx = theCanvas.getContext("2d");
        			if(ctx){
        				//setting style
        				ctx.strokeStyle = "black";
        				ctx.fillStyle = "blue";
        				ctx.lineWidth = "10";

        				//draw rectangle
        				ctx.strokeRect(0,0, 50, 100);
        				ctx.fillRect(0,0, 50, 100); 
        			}
        		}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


var theCanvas = document.getElementById("Canvas2");  
        		if(theCanvas){
        			//Get Context
        			var ctx = theCanvas.getContext("2d");
        			if(ctx){
        				//setting style
        				ctx.strokeStyle = "black";
        				ctx.fillStyle = "rgba(255, 0, 0, .5)";
        				ctx.lineWidth = "2";

        				//draw circle
        				var degrees = 360;
        				var radians = (degrees / 180)*Math.PI;

        				ctx.beginPath();
        				ctx.arc(50, 50, 30, 0, radians);
        				ctx.fill();
        				ctx.stroke();
        			}
        		}




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


var theCanvas = document.getElementById("Canvas3");  
        		if(theCanvas){
        			//Get Context
        			var ctx = theCanvas.getContext("2d");
        			if(ctx){
        				//setting style
        				ctx.strokeStyle = "blue";
        				ctx.fillStyle = "red";
        				ctx.lineWidth = "2";

        				//draw star
        				ctx.beginPath();
        				ctx.moveTo(100, 100);
        				ctx.lineTo(150, 25);//top point
        				ctx.lineTo(200, 100);//top point
        				ctx.lineTo(275, 100);//right horizontal
        				ctx.lineTo(220, 150);//right point diagonal
        				ctx.lineTo(225, 220);//right bottom point
        				ctx.lineTo(150, 175);//right bottom point to leftwards
        				ctx.lineTo(75, 220);//left bottom point
        				ctx.lineTo(85, 150);//left bottom point upwards
        				ctx.lineTo(25, 100);//left horizontal
        				
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
        				
        			}
        		}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


}//closing script bracket

        	console.log(Modernizr);  //let's see what Modernizr is checking