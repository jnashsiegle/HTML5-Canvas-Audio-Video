
if (Modernizr.canvas){
	//canvas is supported

	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");

	//Draw some text on our canvas
	ctx.font = "25pt Georgia";
	ctx.fillText("Canvas is supported!", 20, 60);
	}else {
	//canvas is not supported
	//polyfill would go here



}

	//let's see what all Modernizr is testing for
	console.log(Modernizr);

	//let's test for drag and drop

	if(Modernizr.draganddrop){
		ctx.font = "25pt Georgia";
		ctx.fillText("Drag and Drop Works!!", 20, 120);
	}else{
		//polyfills would go here

	}