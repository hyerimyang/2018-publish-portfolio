$(document).ready (function(){
	num = 1; 
	$('#header_left_hide ul').click(function(){
		if (num == 1)
		{
			$('#header_left_hide li:eq(1)').hide();
			$('#header_left_hide li:eq(0)').css({'transform':'rotate(45deg)','left':'-1px'});
			$('#header_left_hide li:eq(2)').css({'transform':'rotate(-45deg)'});
			num=2;
			$('#mobile_menu').animate({'left':'0px'},500);
		}
		else if (num == 2)
		{
			$('#header_left_hide li:eq(1)').show();
			$('#header_left_hide li:eq(0)').css({'transform':'rotate(0deg)','left':'0px'});
			$('#header_left_hide li:eq(2)').css({'transform':'rotate(0deg)'});
			num=1;
			$('#mobile_menu').animate({'left':'-750px'},500);
		}
	});

	$('#header_left').mouseenter(function(){
		$('#header_left_list ul').show();
	});
	$('#header_left').mouseleave(function(){
		$('#header_left_list ul').hide();
	});

	$('#menu>ul li:eq(0)').mouseenter(function(){
		$('#menu_slide1 ul').slideDown();

	});
	$('#menu>ul li:eq(0)').mouseleave(function(){
		$('#menu_slide1 ul').slideUp();
	});
	



	$(window).scroll(function(){
		st = $(window).scrollTop();
	});
	$('#back p').click(function(){
		$('body,html').animate({'scrollTop':'0'},1000);		
	});

	$('dt').click(function(){
		$('dd').addClass('off');
		$(this).siblings('dd').slideToggle().removeClass('off').addClass('on');
		$('.off').slideUp();
	});	



});