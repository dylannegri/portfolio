/* Your code starts here */

var app = app || {};

app.main = (function() {
	//console.log('Your code starts here!');

	$('.items').mouseenter(function(){
		$(this).css('opacity',0.5);
	});
	$('.items').mouseleave(function(){
		$(this).css('opacity', 1);
	});
	$('.navs').mouseenter(function(){
		$(this).css({'color':'rgb(100,100,255)'},1000);
	});
	$(".navs").mouseleave(function(){
		$(this).css({'color': 'white'},50);
	});

	$(document).ready(function () {
		// console.log("ready!");
		$("#skill01").animate({"width": "63%"},1000);
		$("#skill02").animate({"width": "57%"},1250);
        $("#skill03").animate({"width": "60%"},1500);
        $("#skill04").animate({"width": "90%"},1750);
        $("#skill05").animate({"width": "72%"},2000);
        $("#skill06").animate({"width": "65%"},2250);
        $("#skill07").animate({"width": "84%"},2500);
        $("#skill08").animate({"width": "55%"},2750);
        $("#skill09").animate({"width": "100%"},3000);
    });

	var init = function(){
		console.log('Initializing app.');
		
	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);