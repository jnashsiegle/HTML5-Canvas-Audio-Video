window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
			var bmp = new createjs.Bitmap();

			//load the image and wait until it is fully loaded to do anything with it

			var img = new Image();
			img.src = "images/ship.svg";

			img.onload = updateStage;

			function updateStage(e){

				bmp = new createjs.Bitmap(e.target);//wrap the bm class around the image that has been loaded into it
				//find the cneter of the canvas
				var centerX = canvas.width/2;
				var centerY = canvas.height/2;

				//move ship to center of stage
				bmp.x = centerX;
				bmp.y = centerY;

				//change registration point
				bmp.regX = 50;
				bmp.regY = 50;

				//scale it up
				bmp.scaleX = 4;
				bmp.scaleY = 4;


				stage.addChild(bmp);
				//stage.update(); moved down to function

			}

			//ticker controls timing

			createjs.Ticker.addEventListener("tick", tick);//function name to be called

			function tick(e){

				bmp.rotation +=2;
				bmp.x += 2;
				stage.update();

			}
		
}