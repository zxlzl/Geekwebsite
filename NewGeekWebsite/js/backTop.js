$(function () {
	$(window).scroll(function(){
		if ($(window).scrollTop()>100){

			$("#back-top").fadeIn(500);

		} else {

			$("#back-top").fadeOut(500);

		}
	});

	//当点击跳转链接后，回到页面顶部位置

	$("#back-top").click(function(){

		$('body,html').animate({scrollTop:0},300);

		return false;
	});

});