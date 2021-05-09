$(document).ready(function(){
	$('#wrap td').mouseenter(function(){
		$(this).children('div').stop().animate({'left':'0'},200);
		$(this).siblings().children('div').stop().animate({'left':'-260px'},200);
	});
	$('#wrap td').mouseleave(function(){
		$(this).children('div').stop().animate({'left':'-260px'},200);
	});

	//man_bg slide 
	var leftnum = 0;
	var position = -2400;
	auto = setInterval(function(){
		if (leftnum <= -7200) 
		{
			$('#slide').css('left','0');
			leftnum = 0; //1번그림의 위치가 0
		}
		leftnum = leftnum + position;
		$('#slide').animate({left:leftnum},800);
	},3000)

	//right_menu bg 색상 
	$('#right_menu li:eq(0)').mouseenter(function(){
		$(this).css({'background-color':'#ffc100','transition':'0.5s'});
		$(this).children('p').css('color','#fff');
	});
	$('#right_menu li:eq(1)').mouseenter(function(){
		$(this).css({'background-color':'#99cc41','transition':'0.5s'});
		$(this).children('p').css('color','#FFF');
	});
	$('#right_menu li:eq(2)').mouseenter(function(){
		$(this).css({'background-color':'#f68a0a','transition':'0.5s'});
		$(this).children('p').css('color','#FFF');
	});
	$('#right_menu li:eq(3)').mouseenter(function(){
		$(this).css({'background-color':'#7436b5','transition':'0.5s'});
		$(this).children('p').css('color','#FFF');
	});
	$('#right_menu li:eq(4)').mouseenter(function(){
		$(this).css({'background-color':'#ff617f','transition':'0.5s'});
		$(this).children('p').css('color','#FFF');
	});
		$('#right_menu li').mouseleave(function(){
		$(this).children('p').css('color','#777');
		$(this).css({'background-color':'#3a3a3a'});
	});
});