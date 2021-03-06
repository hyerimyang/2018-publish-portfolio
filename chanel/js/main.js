$(document).ready(function () {
	var leftnum = 0; //slide left 0
	var position = -2000; //img width 1000px 맨처음 초기값을 -1000으로 잡아둠
	auto = setInterval(function(){
		if (leftnum <= -6000) 
		{
			$('#slide').css('left','0');
			leftnum = 0; //1번그림의 위치가 0
		}
		leftnum = leftnum -2000; //여기서 -position 으로 해도 됨. 위에서 1000으로 설정했다면
		$('#slide').animate({left:leftnum},800);
				
	},3000);


	//#top2 img 를 클릭하면 #top1이 slideDown되게 하라
	$('#top2 img').click(function(){
		$('#top1').slideToggle();//한번누르면 내려오고 다시한번더 누르면 올라가는 동작, 자동적으로 알맞게 설정됨.
	});
			
			
	//mainimage 
	$('#slide_bt1').click(function(){ //버튼1을 클릭했을 때 
		$('#slide').animate({'left':'0'},400);  //silde는 position:absolute; 가 되어있으므로 left를 사용할 수 있다.
						                        //화면이 animate로 속도 400으로 나타남. 
		$('#slide_bt1').css({'background-color':'#000'}); //버튼1을 클릭했을때 버튼1의 배경색은 검정색 
		$('#slide_bt2').css({'background-color':'#fff'});  //버튼1을 클릭했을때 버튼2의 배경색은 하얀색
		$('#slide_bt3').css({'background-color':'#fff'});  //버튼1을 클릭했을때 버튼3의 배경색은 하얀색
	});
	$('#slide_bt2').click(function(){  //버튼2를 클릭했을 때
		$('#slide').animate({'left':'-2000'},400);  //이미지는 animate효과로 400의속도로 왼쪽으로 2000만큼 이동한다. / 이미지 width가 2000px이므로 
		$('#slide_bt2').css({'background-color':'#000'});
		$('#slide_bt1').css({'background-color':'#fff'});
		$('#slide_bt3').css({'background-color':'#fff'});
	});
	$('#slide_bt3').click(function(){
		$('#slide').animate({'left':'-4000'},400); //왼쪽으로 4000만큼 이동한다. 속도는 400
		$('#slide_bt3').css({'background-color':'#000'});
		$('#slide_bt2').css({'background-color':'#fff'});
		$('#slide_bt1').css({'background-color':'#fff'});
	});

	
	//coco 상품이미지 롤링
	$('#bt1').click(function(){  //버튼1을 선택했을 때
		$('#coco_slide_img_wrap').animate({'left':'0'},400); //이미지슬라이드가 속도 400으로 나타남 
		$('#coco_wrap_content_bg').css({'background-color':'#e5c7b5'});  //전체배경을 설정
		$('#bt1').animate({'width':'30px'},300); //버튼1을 클릭했을 때 버튼 1은 width가 30px만큼 늘어난다. 속도는 300으로 
		$('#bt2').animate({'width':'10px'});//나머지 버튼들은 width=10px
		$('#bt3').animate({'width':'10px'});
		$('#bt4').animate({'width':'10px'});
		$('#coco_wrap_content_bg_right').fadeOut(); //오른쪽 글씨가 fadeOut 으로 사라졌다가 fadeIn 으로 다시 나타난다.
		$('#coco_wrap_content_bg_right').fadeIn();
	});
	$('#bt2').click(function(){
		$('#coco_slide_img_wrap').animate({'left':'-250'},400);
		$('#coco_wrap_content_bg').css({'background-color':'#d69d84'});
		$('#bt2').animate({'width':'30px'},300);
		$('#bt1').animate({'width':'10px'});
		$('#bt3').animate({'width':'10px'});
		$('#bt4').animate({'width':'10px'});
		$('#coco_wrap_content_bg_right').fadeOut();
		$('#coco_wrap_content_bg_right').fadeIn();
	});
	$('#bt3').click(function(){
		$('#coco_slide_img_wrap').animate({'left':'-500'},400);
		$('#coco_wrap_content_bg').css({'background-color':'#c21422'});
		$('#bt3').animate({'width':'30px'},300);
		$('#bt2').animate({'width':'10px'});
		$('#bt1').animate({'width':'10px'});
		$('#bt4').animate({'width':'10px'});
		$('#coco_wrap_content_bg_right').fadeOut();
		$('#coco_wrap_content_bg_right').fadeIn();
	});
	$('#bt4').click(function(){
		$('#coco_slide_img_wrap').animate({'left':'-750'},400);
		$('#coco_wrap_content_bg').css({'background-color':'#000000'});
		$('#bt4').animate({'width':'30px'},300);
		$('#bt2').animate({'width':'10px'});
		$('#bt3').animate({'width':'10px'});
		$('#bt1').animate({'width':'10px'});
		$('#coco_wrap_content_bg_right').fadeOut();
		$('#coco_wrap_content_bg_right').fadeIn();
	});


}); // 제이퀴리 끝