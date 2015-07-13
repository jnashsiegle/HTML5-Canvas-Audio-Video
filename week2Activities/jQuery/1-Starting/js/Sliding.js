$(function() { 
	$("#slideup").click(function(){
		$("#theDiv").slideUp(2000);
	});
	$("#slidedown").click(function(){
		$("#theDiv").slideDown(4000, function(){
			$("#theDiv").css("background", "yellow"); //change background on slideDown completion
		});
	});
	$("#toggle").click(function(){
		$("#theDiv").slideToggle(3000);
	});

	



});

