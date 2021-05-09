$(document).ready(function(){
	$('#check input').click(function(){ //checkbox는 input으로 객체를 설정
		$('#admit').slideUp();
	});

	$('#close').click(function(){
		$('#admit').slideUp();
	});

}); // 끝