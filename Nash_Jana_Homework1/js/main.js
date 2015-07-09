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
                        ctx.fillStyle = "blue";
        				ctx.strokeStyle = "black";
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
                        ctx.fillStyle = "rgba(255, 0, 0, .5)";
        				ctx.strokeStyle = "black";
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
                        ctx.fillStyle = "red";
        				ctx.strokeStyle = "blue";
        				ctx.lineWidth = "2";

        				//draw star
        				ctx.beginPath();
        				ctx.moveTo(100, 100);
        				ctx.lineTo(150, 25);//top point upward
        				ctx.lineTo(200, 100);//top point downward
        				ctx.lineTo(295, 100);//right horizontal
        				ctx.lineTo(220, 170);//right point diagonal
        				ctx.lineTo(245, 260);//right bottom point
        				ctx.lineTo(150, 205);//right bottom point to leftwards
        				ctx.lineTo(55, 260);//left bottom point
        				ctx.lineTo(80, 170);//left bottom point upwards
        				ctx.lineTo(5, 100);//left horizontal
        				
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

var theCanvas = document.getElementById("Canvas4");  
        		if(theCanvas){
        			//Get Context
        			var ctx = theCanvas.getContext("2d");
        			if(ctx){
        				//setting style
                        ctx.fillStyle = "yellow";
        				ctx.strokeStyle = "orange";
        				ctx.lineWidth = "3";

        			var degrees = "180";
        			var radians = (degrees / 180)*Math.PI; 

        				//draw umbrella top
        				ctx.beginPath();
        				ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2 + 10, 150, 0, radians, true); //will set into center of canvas	
        				ctx.fill();
        				ctx.stroke();

        				//draw scallops	

        				//draw path to clip from 
        				ctx.beginPath();
        				ctx.moveTo(200, 162);
        				ctx.quadraticCurveTo(250, 135, 300, 162);
        				ctx.quadraticCurveTo(350, 135, 400, 162);
        				ctx.quadraticCurveTo(450, 135, 500, 162);

        				// remove fill from half circle
						ctx.globalCompositeOperation = 'destination-out';
						ctx.fill(); 

						// reset mode to default so we can add stroke
						ctx.globalCompositeOperation = 'source-over';
						ctx.beginPath();
        				ctx.moveTo(200, 162);
        				ctx.quadraticCurveTo(250, 135, 300, 162);
        				ctx.quadraticCurveTo(350, 135, 400, 162);
        				ctx.quadraticCurveTo(450, 135, 500, 162); 
        				ctx.stroke();
        				
        			}        			
        		}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

var theCanvas = document.getElementById("Canvas5");  
                if(theCanvas){
                    //Get Context
                    var ctx = theCanvas.getContext("2d");
                    if(ctx){

                        var theString = "Why do people not like me?"
                        var theString1 = "I am a mere font!"

                        //setting style
                        ctx.font = "35pt Comic Sans MS"
                        ctx.fillStyle = "#FF0000";
                        ctx.baseline = "alphabetic";
                        ctx.strokeStyle = "#00004C";                        
                        ctx.lineWidth = "2";

                        //draw shadow
                        ctx.shadowColor = "#6666FF";
                        ctx.shadowOffsetX = -10; 
                        ctx.shadowOffsetY = -5; 
                        ctx.shadowBlur = 10;

                        //draw text
                        ctx.fillText(theString, 50, 100);
                        ctx.fillText(theString1, 50, 200);
                        ctx.strokeText(theString, 50, 100);
                        ctx.strokeText(theString1, 50, 200);
                    }

                }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

var theCanvas = document.getElementById("Canvas6");  //Due to size of image completed in 2 canvases
                if(theCanvas){
                    //Get Context
                    var ctx = theCanvas.getContext("2d");
                    if(ctx){

                        var srcImg = document.getElementById("img1");
                        
                        //setting style
                        

                        
                        //draw image  - totally doesn't fit 3300x1088
                        ctx.drawImage(srcImg, 0,0);//loads the whole image into the canvas

                        //draw image again scaled down by 1/2

                        ctx.drawImage(srcImg, 5, 5, 1650, 544);//scales image above by half
                    }
                }
/*******************************************
Part 6
Image in re-scaled size to fit within canvas
3. Slice a section of the logo out and draw that onto the canvas.
********************************************/
var theCanvas = document.getElementById("Canvas7");  //Due to size of image completed in 2 canvases
                if(theCanvas){
                    //Get Context
                    var ctx = theCanvas.getContext("2d");
                    if(ctx){

                        var srcImg = document.getElementById("img1");
                        
                        //setting style    

                        //draw image again scaled to fit (25%)
                        ctx.drawImage(srcImg, 5, 5, 825, 272);

                        //draw sliced Web Animation Wording
                        ctx.drawImage(srcImg, 200, 165, 3200, 300, 0, 450, 1000, 100)
                    }
                }

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

var theCanvas = document.getElementById("Canvas8");  //Due to size of image completed in 2 canvases
                if(theCanvas){
                    //Get Context
                    var ctx = theCanvas.getContext("2d");
                    if(ctx){

                    var canvasWidth=1100;
                    var canvasHeight=800;
                    theCanvas.setAttribute("width",canvasWidth);
                    theCanvas.setAttribute("height",canvasHeight);

                        //add sky background
                    var skyGradient = ctx.createLinearGradient(0,0,0,canvasHeight);
                      skyGradient.addColorStop(0,"#00aaff");
                      skyGradient.addColorStop(1,"#ffffff");

                      ctx.fillStyle = skyGradient;
                      ctx.fillRect(0,0,canvasWidth,canvasHeight);

                      //add sun

                      var radGrad = ctx.createRadialGradient(925, 150, 20, 925, 150, 100);
                        
                        //Add color stops
                        radGrad.addColorStop(0, "rgba(253, 184, 19, 1");
                        radGrad.addColorStop(0.1, "rgba(253, 184, 19, .9)");
                        radGrad.addColorStop(0.2, "#fdff00");
                        radGrad.addColorStop(0.3, "#fdff00");
                        radGrad.addColorStop(0.4, "rgba(254,255,127, 1)");
                        radGrad.addColorStop(0.6, "rgba(254,255,127, 1)");
                        radGrad.addColorStop(0.8, "rgba(254,255,127, .75)");
                        radGrad.addColorStop(0.9, "rgba(254,255,127, .45)");
                        radGrad.addColorStop(1, "rgba(254,255,127, .01)");

                        ctx.fillStyle = radGrad;

                        ctx.beginPath();
                        ctx.arc(925, 150, 100, 0, 2*Math.PI);
                        ctx.fill();

                    // add ocean floor
                        var oceanGradient = ctx.createLinearGradient(0, 1100, 0, 0); 

                        //Add color stops
                        oceanGradient.addColorStop(0, "#1A2980");                        
                        oceanGradient.addColorStop(1, "#26D0CE");

                        ctx.strokeStyle = oceanGradient;
                        ctx.lineWidth = "5";
                        ctx.fillStyle = oceanGradient;

                        ctx.fillRect(0, 550, 1100, 300);
                        ctx.strokeRect(0, 550, 1100, 300);

                    //add clouds
                        var srcImg2 = document.getElementById("img2");
                                             
                        //draw image  
                        ctx.drawImage(srcImg2, 0,0); //left cloudbank
                        ctx.drawImage(srcImg2, 1000, 0, 500/2, 323/2);

                        //slice part of cloudbank                                         
                        ctx.drawImage(srcImg2, 250, 200, 200, 225, 400, 100, 500, 350);

                    //draw boat

                        //setting style
                        ctx.fillStyle = "#996515";
                        ctx.strokeStyle = "orange";
                        ctx.lineWidth = "3";                    

                        //draw bottom of boat
                        
                        ctx.lineWidth = 2;
                        ctx.beginPath();
                        ctx.moveTo(800,525);
                        ctx.lineTo(845,545);
                        ctx.lineTo(925,545);
                        ctx.lineTo(950,525);
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();

                        //pole for sails

                        ctx.strokeStyle = "#b5651d"
                        ctx.beginPath();
                        ctx.moveTo(875, 525);
                        ctx.lineTo(875, 425);
                        ctx.stroke();

                        //left sail
                        ctx.fillStyle = "#00FF00";
                        ctx.strokeStyle = "#006600"
                        ctx.lineWidth = 1;
                        ctx.beginPath();                        
                        ctx.moveTo(878,425);
                        ctx.lineTo(878,525);
                        ctx.lineTo(955,515);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();

                        //right sail
                        ctx.fillStyle = "red";
                        ctx.strokeStyle = "dark red";
                        ctx.beginPath();
                        ctx.moveTo(873,425);
                        ctx.lineTo(873,525);
                        ctx.lineTo(825,515);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();

                    //seagulls
                        
                        ctx.strokeStyle = "#545454"
                        ctx.lineWidth = "3";
                        ctx.beginPath();
                        ctx.moveTo(300, 350);
                        ctx.quadraticCurveTo(315, 335, 310, 350);
                        ctx.quadraticCurveTo(320, 335, 315, 350);                        
                        ctx.stroke();

                    //fish
                    var srcImg3 = document.getElementById("img3");
                        ctx.drawImage(srcImg3, 260, 310, 515, 481, 250, 575, 500/3, 700/3);
                        ctx.drawImage(srcImg3, 508, 554, 773, 551, 800, 600, 271, 189 );



                        

                        
                    }
                }




        	console.log(Modernizr);  //let's see what Modernizr is checking



      }//closing script bracket