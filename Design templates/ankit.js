$(document).ready(function(){
	$('.fa-bars').on('click',function(){
		$('.nav').css('left','70%').fadeIn();
	});

	$('.fa-times').on('click',function(){
		$('.nav').fadeOut();
	});


	$('.submit').on('click',function(){
		$('.search p').fadeIn();
	});

	$('.submit').on('dblclick',function(){
		$('.search p').fadeOut();
	});	


});