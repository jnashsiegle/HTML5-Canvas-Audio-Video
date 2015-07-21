$(document).ready(function() {

	
	$(".gallery_thumbnails a").click(function(e){
		//disable links
		e.preventDefault();

		//create var to hold the links from the thumbnail
		var photo_fullsize = $(this).attr("href");//this represents what was clicked
		var photo_caption = $(this).attr("title");

		//Create our preview link

		var photo_preview = photo_fullsize.replace("_fullsize", "_preview");//replaces _fullsize with _preview

		//SlideUp our caption
		$(".gallery_caption").slideUp(500);  //bring back on screen down where we created the caption

		//Fadeout preview area
		$(".gallery_preview").fadeOut(500, function(){
			//preload our clicked image
			$(".gallery_preload_area").html('<img src = "' + photo_preview + '" />');

			//once image is preloaded then we can use it

			//test for it using farinspace pre-loader
			$(".gallery_preload_area img").imgpreload(function(){

				//console.log("test"); 

				//change the picture and link for the preview area
				$(".gallery_preview").html('<a class = "overlayLink" title = "' + photo_caption + '" href = "' + photo_fullsize + '" style = "background-image:url('+photo_preview + '); "> </a>');

				//fadeback in preview window

				$(".gallery_preview").fadeIn(500);

				$(".gallery_caption").html('<p><a class = "overlayLink zoom" title = "' + photo_caption + '" href = "' + photo_fullsize + '" >View Larger </a></p><p>' + photo_caption + '</p>');

				//slideDown our caption
				$(".gallery_caption").slideDown(500);

				setFancyBoxLinks();  //function is way below
				updateThumbnails();


			});


		});

	});//end of click

	//set the initial preview picture - create first vars
	var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
	var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
	var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");

	//set the caption and the photo
	$(".gallery_preview").html('<a class = "overlayLink" title = "' + first_photo_caption + '" href = "' + first_photo_fullsize + '" style = "background-image:url('+ first_photo_preview + '); "> </a>');

	$(".gallery_caption").html('<p><a class = "overlayLink zoom" title = "' + first_photo_caption + '" href = "' + first_photo_fullsize + '" >View Larger </a></p><p>' + first_photo_caption + '</p>');

	//set up fancy box links again as we are outside the click function where we did it before
	setFancyBoxLinks();
	updateThumbnails();





}); //end of ready function

function setFancyBoxLinks(){
	$("a.overlayLink").fancybox({
		//set options for fancybox
		'titlePosition':'over',//can be outside or inside or over
		'overlayColor': '#000',
		'overlayOpacity': .8,
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'autoScale': true

		//call this up inside the click function


	});

}

function updateThumbnails(){

	$(".gallery_thumbnails a").each(function(index){

		if($(".gallery_preview a").attr("href")==$(this).attr("href")){
			//if the anchor tag is the same as the preview anchor
			//shade the thumbnail and give it a class of selected

			$(this).addClass("selected");
			$(this).children().fadeTo(250, .4);

		}else{
				//remove selected class and fadeup to 100% opacity
			$(this).removeClass("selected");
			$(this).children().css("opacity", "1");

		}
	});


}
