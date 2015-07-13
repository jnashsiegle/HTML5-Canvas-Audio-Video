$(function() { 
	
	//add a click function to our buttons
	$("#hide").click(function(){
		$("#theDiv").hide("3000", function(){

			//alert("Div is now hidden");
			$("#theDiv").css("background-color", "red");


		});
	});
	$("#show").click(function(){    //the above color code would change box color once div is completely visible if placed here for a different effect
		$("#theDiv").show(6000);
	});
	$("#toggle").click(function(){
		$("#theDiv").toggle("slow");
	});

});


