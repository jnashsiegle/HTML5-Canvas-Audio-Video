window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		//Create a variable to hold our image
		var srcImg = document.getElementById("img1");

		//Draw an image directly onto the canvas
		//ctx.drawImage(srcImg, 0,0);//loads the whole image into the canvas

		//Draw a scaled down image
		//drawImage(srcImg, dx, dy, dw, dh)
		//ctx.drawImage(srcImg, 50, 50, 240, 300);//scales image above by half
		
		//Draw a slice image
		//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh);
		//ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280)  //crow only

		//create a variable that holds a video
		var srcVid = document.getElementById("vid1");
		srcVid.play(); //plays the video

		//setInterval(function, Time-ms);

		setInterval(function(){
			ctx.drawImage(srcVid, 0, 0, 480, 270);

		}, 30); //time is in milliseconds / change to change framerate

     						
		}
	}
}