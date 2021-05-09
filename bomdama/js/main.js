$(document).ready(function(){ //callback
	//Top_Menu////////////////////////////////////////////////////
	//top에서 50내려오면 topmenu 배경색,글자색 바뀜 
	$(window).scroll(function(){
		if( $(window).scrollTop() > 50){ 
			//top_menu bg,color
			$('#menu').css('background-color','rgba(255,255,255,0.9)'); 
			$('#menu #left>li').css('color','#5e5e5e'); 
			$('#menu #right>li').css('color','#5e5e5e');
			//햄버거메뉴바 이미지 변경
			$('#menu #right li img:nth-child(1)').stop().animate({'opacity':'0'});
 			$('#menu #right li img:nth-child(2)').stop().animate({'opacity':'1'});
		}
		else if( $(window).scrollTop() == 0){
			//top_menu bg,color
			$('#menu').css('background-color','')
			$('#menu #left>li').css('color','#fff'); 
			$('#menu #right>li').css('color','#fff');
			//햄버거메뉴바 이미지 변경
			$('#menu #right li img:nth-child(1)').stop().animate({'opacity':'1'});
 			$('#menu #right li img:nth-child(2)').stop().animate({'opacity':'0'});
		}
	});


	//top_menu에 mouseover했을 때, 
	//font-color 검정으로 변경 / 메뉴바 이미지 변경
	$('#menu').mouseover(function(){
		$('#menu li').css('color','#5e5e5e');
		$('#menu #right li img:nth-child(1)').stop().animate({'opacity':'0'});
 		$('#menu #right li img:nth-child(2)').stop().animate({'opacity':'1'});
	});
	$('#menu').mouseleave(function(){
		$('#menu li').css('color','#FFF');
		$('#menu #right li img:nth-child(1)').stop().animate({'opacity':'1'});
 		$('#menu #right li img:nth-child(2)').stop().animate({'opacity':'0'});
	});


	//main video////////////////////////////////////////////////////
	//글자 순서대로 나타나게하기
	$('#txt_2 span:eq(0)').animate({'opacity':1},1000,function(){
		$('#txt_2 span:eq(1)').animate({'opacity':1},1000,function(){
			$('#txt p').animate({'opacity':1},1000);
		});
	});
		
	//watch버튼 마지막에 나타나게하기
	$('#watch').delay(3500).fadeIn();
		
	//watch버튼 hover효과
	$('#watch').mouseenter(function(){
		//#watch 가로사이즈는 180으로 늘어나고 -> 그 안에 자식인 #a가 나타난다 (순서대로)
		$(this).stop().animate({'width':'180px'},300).children('#a').fadeIn();
	});
	$('#watch').mouseleave(function(){
		$(this).stop().animate({'width':'160px'},300).children('#a').fadeOut();
	});


	//slide_image////////////////////////////////////////////////////
	var leftnum1 = 0; //slide left 0
	var position = -1000; //img width 1000px 맨처음 초기값을 -1000으로 잡아둠
	auto = setInterval(function(){
		if (leftnum1 <= -3000) 
		{
			$('#img_wrap').css('left','0');
			leftnum1 = 0; //1번그림의 위치가 0
		}
		leftnum1 = leftnum1 -1000; //여기서 -position 으로 해도 됨. 위에서 1000으로 설정했다면
		$('#img_wrap').animate({left:leftnum1},500);
		
	},2000);
		
	//img 에 mouseover하면 슬라이드 정지 
	$('#img_wrap img').mouseover(function(){
		clearInterval(auto);
	});
	//떼면 다시 원래대로 실행 
	$('#img_wrap img').mouseout(function(){
		auto = setInterval(function(){
			if (leftnum1 <= -3000) 
			{
				$('#img_wrap').css('left','0');
				leftnum1 = 0; //1번그림의 위치가 0
			}
			leftnum1 = leftnum1 -1000; //여기서 -position 으로 해도 됨. 위에서 1000으로 설정했다면
			$('#img_wrap').animate({left:leftnum1},500);
			
		},2000);
	});


	//나만의 청첩장, 디자이너 컬렉션////////////////////////////////////////////////////
	//make, view button mouse 효과 
	$('#box').mouseenter(function(){
		$(this).animate({'width':'140px'},500).children().fadeIn();
	});
	$('#box').mouseleave(function(){
		$(this).animate({'width':'120px'},500).children('#aa').fadeOut();
	});

	$('#more').mouseenter(function(){
		$(this).animate({'width':'140px'},500).children().fadeIn();
	});
	$('#more').mouseleave(function(){
		$(this).animate({'width':'120px'},500).children('#aaa').fadeOut();
	});

		
	//side_menu////////////////////////////////////////////////////
	var num=1;
	$('#menu #right li img').click(function(){
		if (num==1)
		{
			$('#side_menu').animate({'right':0},500);
			num=2;
			$('#side_menu').css('position','fixed');
		}
		else if (num==2)
		{
			$('#side_menu').animate({'right':-500},500);
			num=1;
		}
	});

	$('#close').click(function(){
		$('#side_menu').animate({'right':-500},500);
	});

		
});//end