window.onload = function() {
	var theCanvas = document.getElementById('Canvas1a');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.globalAlpha = 1; //default value
				
				// Array of all the compositing methods
/*2nd part*/	var compMethods = ["source-over", "source-in", "source-out", "source-atop", "lighter", "xor", "destination-over", "destination-in", "destination-out", "destination-atop", "darker", "copy" ];
			
			
			// Array of 4 squares
			var rects1 = [
					{x:20, y:20, width:75, height:75},
					{x: 40, y:50, width: 75, height: 75},
					{x: 150, y:20, width: 75, height: 75},
					{x: 170, y:50, width: 75, height: 75},
					{x: 280, y:20, width: 75, height: 75},
					{x: 300, y:50, width: 75, height: 75},
					{x: 410, y:20, width: 75, height: 75},
					{x: 430, y:50, width: 75, height: 75}
			
					];	

					for(var i = 0; i<rects1.length; i+=2){

						ctx.fillStyle = "blue";
						ctx.fillRect(rects1[i].x, rects1[i].y, rects1[i].width, rects1[i].height);//out of the above array
						
						ctx.fillStyle = "red";
						ctx.fillRect(rects1[i+1].x, rects1[i+1].y, rects1[i+1].width, rects1[i+1].height);

						ctx.globalAlpha -= .3;  //fades out the squares incrementally


					}
			// Array of 2 squares
			var rects = [
					{x:20, y:20, width:75, height:75},
					{x: 40, y:50, width: 75, height: 75},
					
					];

					var methods=0;

					for(var i = 0; i<compMethods.length; i++){

						var cvsName = "Canvas" +(i+1);  //grabs the canvas id from htm
						var curCanvas = document.getElementById(cvsName);
						var curContext = curCanvas.getContext("2d");

						curContext.fillStyle = "blue";
						curContext.fillRect(rects[0].x, rects[0].y, rects[0].width, rects[0].height);

						curContext.globalCompositeOperation = compMethods[methods++];

						curContext.fillStyle = "green";
						curContext.fillRect(rects[1].x, rects[1].y, rects[1].width, rects[1].height);

					}

				}			
			
			
	
			
											
		}
	}
