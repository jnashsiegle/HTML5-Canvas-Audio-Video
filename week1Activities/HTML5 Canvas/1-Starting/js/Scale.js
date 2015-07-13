window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
		ctx.save();
		ctx.fillStyle = "blue";
		ctx.fillRect(0,0, 100, 50);

		//scale transform

		ctx.scale(1.5, 2); //150% bigger //also scales whitespace between objects if more than one
		ctx.fillRect(0, 50, 100, 50);

		//Create a third rectangle  IMPORTANT scaling is additive so use save and restore
		ctx.restore();
		ctx.fillStyle = "purple";
		ctx.scale(.5, .5);//
		ctx.fillRect(0, 100, 100, 50);
						
		}
	}
}