$(function() { 
	
	$("#fadeout").click(function(){
		$("#theDiv").fadeOut("normal");
	});
	$("#fadein").click(function(){
		$("#theDiv").fadeIn(3000);
	});
	$("#fadeto3").click(function(){
		$("#theDiv").fadeTo(2000, .3); //fades to 30% of opacity
	});
	$("#fadeup").click(function(){
		$("#theDiv").fadeTo(2000, 1, function(){
			alert("The Div is back to opacity"); //this will alert once the Div is BACK to FULL opacity
		});  //brings back up to normal 1.0
	});
            
});