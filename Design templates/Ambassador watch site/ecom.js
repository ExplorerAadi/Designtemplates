$(document).ready(function(){
	$('.chat').on('click',function(){
		$('.hidden').css('display','block');
	});

	$('.btnx').click(function(){
		$('.hidden').fadeOut();
	});


});