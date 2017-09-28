$(function () {
	$("div.top>a").click(function(){
		$(this).addClass("a1");console.log(1);
    	$(this).siblings("a1").removeClass("a1");
	});
	
})