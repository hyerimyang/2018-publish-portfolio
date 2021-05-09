$(document).ready(function(){
		$('#icon li').click(function(){
			 linum = $(this).index()*-100; 
			$('#slide').animate({'left': linum+'%'},500);
			$(this).css('background-color','#FFF').siblings().css('background-color','rgba(255,255,255,0.5)');
		});

		num = 1; 
		$('#menu ul').click(function(){
			if (num == 1)
			{
				$('#menu li:eq(1)').hide();
				$('#menu li:eq(0)').css({'transform':'rotate(45deg)','left':'-1px','top':'1.4px'});
				$('#menu li:eq(2)').css({'transform':'rotate(-45deg)'});
				$('#menu_slide').slideDown();
				$('#menu_slide_icon').css('display','none');
				num=2;
				
			}
			else if (num == 2)
			{
				$('#menu li:eq(1)').show();
				$('#menu li:eq(0)').css({'transform':'rotate(0deg)','left':'0','top':'0'});
				$('#menu li:eq(2)').css({'transform':'rotate(0deg)'});
				$('#menu_slide').slideUp();
				$('#menu_slide_icon').css('display','block');
				num=1;
			}
		});


		$(window).scroll(function(){ //스크롤 이벤트: 스크롤이 움직일 때 반응한다.
			sc = $(window).scrollTop();
			if (sc >= 650 )
			{
				$('#menu').css({'position':'fixed','top':'0','margin-top':'0'});
			}
			else {
				$('#menu').css({'position':'absolute','margin-top':'650px','top':'0'})
			}
			
		});

		$('#image li').mouseenter(function(){
			$(this).children().animate({'width':'100%'},300);
		});
		$('#image li').mouseleave(function(){
			$(this).children().animate({'width':'90%'},300);
		});


		$('#shop_slide').mousemove(function(e){
			mouseX = e.pageX * -5.5;
			$('#shop_slide').css({'left':mouseX+'px'});
		});
		
		//rabbit more view 
		$('#rabbit_wrap ul li').mouseenter(function(){
			$(this).children('#bgbg').stop().animate({'opacity':'1'});
			$(this).siblings().children('#bgbg').stop().animate({'opacity':'0'});
		});


	});