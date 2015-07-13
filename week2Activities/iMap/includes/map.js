/**
*@author Jana Nash-Siegle
*/

$(document).ready(function(){

	$('#mapForm').change(function(){

		//alert( $('#mapForm option:selected').val() );  //tests to see if mapForm changes and will tell us the selected option
		
		var selectedContinent = $('#mapForm option:selected').val();

		if( selectedContinent == 'ALL'){
			$('a.dot').show(1000);  //if sected val is all, ALL dots will show in 1 sec			
		}
		else
		{
			$('a.dot[continent*="'+selectedContinent+'"]').show(1000);  //*= means contains / to test replace x with '+selectedContinent+'
			$('a.dot[continent!="'+selectedContinent+'"]').hide(1000);  //!=means does not contain
		}
	});

		$('a.dot').click(function(){

			//alert($(this).attr('city')); //gets value of city on click TEST

			$('a.dot').removeClass('selected'); //removes selected class from ALL Dots
			$(this).addClass('selected');//re adds the green dot ONLY to the dot clicked on

			var city = '.city_detail#' + $(this).attr('city'); //setting string that will target city detail with id city name value that matches the city detail
			var htmlCode = $(city).html(); //uses above to target the hidden html

			$('.detail_container').fadeOut(500, function(){

				$('.detail_container .city_detail').html(htmlCode);//sets the html from city detail into the detail container
				$('.detail_container').fadeIn(500);
			});

		});




});