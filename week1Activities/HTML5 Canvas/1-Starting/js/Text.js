window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			var theString = "Drawing text on a Canvas";

			//Simple Text using defaults
			ctx.fillText(theString, 20, 20);//20 to right and 20 down
			
			//Styling
			ctx.font = "25pt Georgia";
			ctx.fillStyle = "blue";
			ctx.fillText(theString, 20, 60);

			//stroke and filled text
			ctx.font = "32pt Verdana";
			ctx.fillStyle = "yellow";
			ctx.textBaseline = "middle";//puts the baseline into the middle of text
			ctx.strokeStyle = "rgba(0, 255, 0, .8)";//use all css/rgb or rgba colors
			ctx.fillText(theString, 20, 160);
			ctx.strokeText(theString, 20, 160);


			
						
		}
	}
	


}