window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.save();  //variable way #2 of removing shadow, using restore below
		var origShadowColor = ctx.shadowColor;  //enables us to remove shadow later variable #1

		//set up our shadow
		ctx.shadowColor = "#000000";
		ctx.shadowOffsetX = 10;
		ctx.shadowOffsetY = 10;
		ctx.shadowBlur = 10; 
		
		//draw a simple rectangle
		ctx.fillStyle = "blue";
		ctx.fillRect(20, 20, 200, 100);

		//draw some text with shadow   Shadows effect everything below it
		ctx.fillStyle = "green";
		ctx.shadowColor = "rgba(0, 100, 100, .5)";
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 5;

		ctx.font = "25pt Georgia";
		ctx.fillText("Drawing Text on a Canvas!!", 250, 75);

		//Draw a red line with a purple shadow

		ctx.lineCap = "round";
		ctx.lineWidth = 25;
		ctx.shadowColor = "rgba(150, 0, 150, .5)";
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;
		ctx.shadowBlur = 15;

		ctx.strokeStyle = "red";
		ctx.beginPath();
		ctx.moveTo(50, 200);
		ctx.lineTo(450, 200);
		ctx.stroke();

		//Rectangle with no shadow
		//ctx.shadowColor = origShadowColor;  //removes shadow color variable way 1

		ctx.restore();  //remove shadow variable way #2 - resets to default values, preferred method

		ctx.fillStyle = "blue";
		ctx.fillRect(20, 225, 200, 50);
				
						
		}
	}
}