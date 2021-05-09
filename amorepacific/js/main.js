$(document).ready(function(){
	//스크롤 부드럽게 해당위치로 이동하는 제이쿼리
	$('a[href^=#]').click(function() {
		var speed = 400;  /*전환되는 속도 1000=1초*/
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

	// main video
	//글자 위에서아래 순서로 뜨게하기 
	$('.main-contents #left_line,#right_line,h3').animate({'opacity':'1'},300);
	$('.main-contents h2').delay(400).animate({'opacity':'1'},300);
	$('.main-contents h4').delay(500).animate({'opacity':'1'},300);

	// header mouseover, leave
	$('header').mouseover(function(){
		$('header').css({"background":"#062c5e" });
	});
	$('header').mouseleave(function(){
		$('header').css({"background":"none" });
	});
	
	// scrollTop
	nump = 0;
	$(window).scroll(function(){
		sctop = $(window).scrollTop()
		$('header').css({"background":"none" });
		
		if(sctop == 0) {
			$('header').css({"height":"130px","background-color":"none"})
			$('.logo').css({"text-align": "center", 
			"margin": "25px auto 20px auto", "width":"250px"})
			$('.language-select').css({"display":"block"})

			$('.gnb').css({"width":"100%","margin-right":"auto", "margin-top":"0"})
			$('.gnb-menu').css({"width": "70%"})
			$('.gnb-menu>li').css({"font-size": "17px"})

			// header mouseover / mouseleave
			$('header').mouseover(function(){
				$('header').css({"background":"#062c5e","transition":"0.5s"});
			});
			$('header').mouseleave(function(){
				$('header').css({"background":"none","transition":"0.5s"});
			});

		}else if(sctop > 100) {
			$('header').css({"height":"60px","background-color":"#062c5e"})
			$('.logo').css({"text-align": "left", "margin" : "20px 0 20px 0", "width":"170px"})
			$('.logo >img').css({"width":"170px"})
			$('.language-select').css({"display":"none"})
			
			$('.gnb').css({"width":"55%","margin-right":"110px", "margin-top":"-64px"})
			$('.gnb-menu').css({"width": "100%"})
			$('.gnb-menu>li').css({"font-size": "16px"})

			// header mouseover / mouseleave
			$('header').mouseover(function(){
				$('header').css({"background":"#062c5e" });
			});
			$('header').mouseleave(function(){
				$('header').css({"background":"#062c5e" });
			});
		}
	})

});//end 