
// 	var i=0;
// 	var timer=setInterval(showImg,3000);
// 	function showImg(){
// 		i++;
// 		if (i==len) {
// 			i=0;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$("person").eq(i).show().siblings().hide();
// 	}
// 	$(".person").hover(function(){
// 		clearInterval(timer);
// 	},function(){
// 		timer=setInterval(showImg,3000);
// 	})
// //点击箭头
// 	$("#slider-next").click(function(){
// 		i++;
// 		if (i==len) {
// 			i=0;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$(".Front_pic li").eq(i).show().siblings().hide();
// 	});
// 	$("#slider-prev").click(function(){
// 		i--;
// 		if (i==-1) {
// 			i=len-1;
// 		}
// 		// $(".scroll_nav li").eq(i).addClass('active_1').siblings().removeClass('active_1');
// 		$(".person").eq(i).show().siblings().hide();
// 	});
// $(".Front_pic li").each(function(i){
// 	$(".Front_pic li").slice(i*6,i*6+6).wrapAll("<ul></ul>");
// });

window.onload = function() {
  

var i=0;
//3个div的统一class = 'Front_pic'
//找到所有的div
    var Front_pic1 = document.getElementById('Front_pic1');
    var Front_pic2 = document.getElementById('Front_pic2');
    var Front_pic3 = document.getElementById('Front_pic3');
    var Front_pic4 = document.getElementById('Front_pic4');
    var div = [Front_pic1,Front_pic2,Front_pic3,Front_pic4];
document.getElementById('slider-prev').onclick = function(){
    
    //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
    /*for(var i=0,len = div.length;i<len-1;i++){
        if(div[i].style.display == 'block'){
            div[i].style.display = 'none';
            div[i-1].style.display = 'block';
            break;
        }*/
       
    if(i==0) {
        i=div.length-1;
    }
    else{
        i--;
    }
    // alert(i);
    if(i==div.length-1) {
        div[0].style.display = 'none';
    }
    else {
        div[i+1].style.display = 'none';
    }    
    div[i].style.display ='block';
}
document.getElementById('slider-next').onclick = function(){
    
    //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
    /*for(var i=0,len = div.length;i<len-1;i++){
        if(div[i].style.display == 'block'){
            div[i].style.display = 'none';
            div[i-1].style.display = 'block';
            break;
        }*/
    if(i==div.length-1) {
        i=0;
    }
    else{
        i++;
    }
    // alert(2);
    if(i==0) {
        div[div.length-1].style.display = 'none';
    }
    else {
        div[i-1].style.display = 'none';
    }    
    div[i].style.display ='block';
};

function show(){
    
    var j=0;

    var backstage_pic1 = document.getElementById('backstage_pic1');
    var backstage_pic2 = document.getElementById('backstage_pic2');
    var div = [backstage_pic1,backstage_pic2];
document.getElementById('slider-prev1').onclick = function(){
    
    //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
    /*for(var i=0,len = div.length;i<len-1;i++){
        if(div[i].style.display == 'block'){
            div[i].style.display = 'none';
            div[i-1].style.display = 'block';
            break;
        }*/
    if(j==0) {
        j=div.length-1;
    }
    else{
        j--;
    }
    // alert(i);
    if(j==div.length-1) {
        div[0].style.display = 'none';
    }
    else {
        div[j+1].style.display = 'none';
    }    
    div[j].style.display ='block';
}
document.getElementById('slider-next1').onclick = function(){
    
    //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
    /*for(var i=0,len = div.length;i<len-1;i++){
        if(div[i].style.display == 'block'){
            div[i].style.display = 'none';
            div[i-1].style.display = 'block';
            break;
        }*/
    if(j==div.length-1) {
        j=0;
    }
    else{
        j++;
    }
    if(j==0) {
        div[div.length-1].style.display = 'none';
    }
    else {
        div[j-1].style.display = 'none';
    }    
    div[j].style.display ='block';
    }
}
show();
}
























/*document.getElementById("slider-next").onclick = function(){
    //找到所有的div
    var div = document.getElementsByTagName('Front_pic');
 
    //循环div，找到处于显示状态的div将其隐藏，并将其下一个div显示
    for(var i=0;i<div.length;i++){
            if(div[i].style.display == 'block'){
                div[i].style.display = 'none';
                if(i<div.length-1){
                    div[i+1].style.display = 'block';
                }else{
                    i=0;
                    div[i].style.display='block';
                }
                
            }  
    }*/


// 交互
//获取成员信息
// $(function(){
//     $.ajax({
//         type:"GET",
//         url:"",
//         data:{
//             Manager:"geekmanager"
//         },
//         success:function(data){
//             if (data.status == '1') {
//                 var str;
//                 var datateam = data.Object;
//                 for (var i = 0; i < datateam.length; i++) {
//                     /*$('.Person_view').html(list[i] + '<button id="PersonDel">删除</button>');*/
//                     var str = '<li>'+datateam[i]+'</li>';
//                 }
//                 $(".Front_re ul").html(str);
//             }else{
//                 alert("无法正确获取数据");
//             }
//         },
//         error:function(){

//         }
//     })
// })