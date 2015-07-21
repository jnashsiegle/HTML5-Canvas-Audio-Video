window.onload = function() {
	
	$(".lightbox_trigger").click(function(e){

		//prevent default action (make not clickable)
		e.preventDefault();

		//Get the clicked links href
		var image_href = $(this).attr("href");  //this represents whatever was clicked
		//console.log(image_href); //shows result in console of click

		//setup the lightbox if it doesn't exist or use the lightbox if it does

		if($("#lightbox").length>0){
			//lightbox DIV is already created, so then we can use it

			//Place the clicked href into our lightbox div img tag
			$("#content").html('<img src = "' + image_href + '"/>');

			$("#lightbox").slideDown(1000);


			}else{
				//First time around lighthouse DIV will not exist, so let's make it

				var lightbox = 
					'<div id = "lightbox">' + 
					'<p>Click to Close</p>' +
					'<div id = "content">' +
					//insert the clicked link href into an image
					'<img src = "' + image_href + '" />' +
					'</div>' +//ends content div 
					'</div>'; //closes lightbox div

					//Insert the lightbox html into our page

					$("body").append(lightbox);

					$("#lightbox").hide(); //hides the lightbox on the initial click as slideDown isn't working yet
					$("#lightbox").slideDown(1000); //adds the slideDown to the initial click of an image
			}
		}); //end of function

			//setup for our click to close
			$("#lightbox").live('click', function(){

				$("#lightbox").slideUp(1000);  //go back to top in the if statement to re-show
			});		//changed .hide to .slideUp...make .show slideDown for a bit of animation


} //end for window.onload