window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		
		/*
		ctx.fillStyle = "blue";
		ctx.fillRect(150, 50, 100, 50);

		ctx.translate(200, 75); 
		
		ctx.rotate(.5);
		ctx.fillStyle = "red";
		ctx.fillRect(-50, -25, 100, 50);  //rotates around on top of first rectangle
*/
		var radians = (Math.PI/180)*20; //making a starburst 20 is degrees

		ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);
		//for(var degrees = 0; degrees<360; degrees+=20){
		for (var degrees = 0; degrees<=180; degrees+=20){ //half circle
		ctx.beginPath();
		ctx.moveTo(0,0 );
		ctx.lineTo(100, 0); //100 pixels long
		ctx.stroke();
		ctx.rotate(radians);

		


		}

		/*
		ctx.beginPath();
		ctx.moveTo(0,0 );
		ctx.lineTo(100, 0); //100 pixels long
		ctx.stroke(); */



			
						
		}
	}
}