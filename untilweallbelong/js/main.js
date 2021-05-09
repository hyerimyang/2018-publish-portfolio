$(document).ready(function(){
	$('#menu_button').click(function(){
		$('#wrap').animate({'left':'-600px'});
		$('#side_menu').animate({'right':'0px'});
	});

		$('#side_menu h1').click(function(){
		$('#wrap').animate({'left':'0px'});
		$('#side_menu').animate({'right':'-600px'});
	});

		$('#menu_button').onmouseover(function(){
		$('#menu_button ul li:eq(0)').css({'width':'20px'});
	});
});