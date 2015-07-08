window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
			
			ctx.save(); //right way to get back to origin
			ctx.fillStyle = "blue";
			ctx.fillRect(0,0, 100, 50);

			//Translate the origin to the middle of the canvas

			ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2); //gives us the center
			ctx.fillRect(-50,-25, 100, 50);  //centers it by taking 1/2 width and height	

			//how to get back to origin  version 1
			//ctx.translate(-ctx.canvas.width/2, -ctx.canvas.height/2);
			ctx.restore();
			ctx.fillStyle = "red";
			ctx.fillRect(0,0,100,50);   


		}
	}
}