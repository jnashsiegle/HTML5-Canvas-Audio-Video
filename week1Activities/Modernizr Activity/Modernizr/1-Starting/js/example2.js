
//load different scripts based on our tests
//Modernizr.load

Modernizr.load({
	test: Modernizr.inputtypes.date,
	yep: "js/success.js",
	nope: "js/fail.js",
	complete: function(){
		//this will run after the js file is loaded based on case above

		console.log("The test is complete");



	}


});