/*展示切换*/
$(function() {
	$(".title span").click(function() {
		var index = $(this).index();
		$(this).addClass("SpanBorder").siblings().removeClass("SpanBorder");
		var show = ["$('#show1')","$('#show2')","$('#show3')","$('#show4')"];
		$('.PictureShow').hide();
		var i = show[index];
		if(index == 0) {
			$('#show1').show();
		}
		else if(index == 1) {
			$('#show2').show();
		}
		else if(index == 2) {
			$('#show3').show();
		}
		else if(index == 3) {
			$('#show4').show();
		} 
	});

})

/*展开收起*/
window.onload = function() {
function BrowseMore (id1,id2) {
    var more = document.getElementById(id1);
    var br1 = document.getElementById('BookRecommendation1');
    var br2 = document.getElementById('BookRecommendation2');
    var br3 = document.getElementById('BookRecommendation3');
    var br4= document.getElementById('BookRecommendation4');
    var detail = document.getElementById(id2);
    more.onclick = function() {
        br1.style.display = 'none';
        br2.style.display = 'none';
        br3.style.display = 'none';
        br4.style.display = 'none';
        detail.style.display = 'block';
    }
}
BrowseMore('more1','detail1');
BrowseMore('more2','detail2');
BrowseMore('more3','detail3');
BrowseMore('more4','detail4');
function PickUp(id1,id2) {
	var pu = document.getElementById(id1);
    var br1 = document.getElementById('BookRecommendation1');
    var br2 = document.getElementById('BookRecommendation2');
    var br3 = document.getElementById('BookRecommendation3');
    var br4= document.getElementById('BookRecommendation4');
    var detail = document.getElementById(id2);
    pu.onclick = function() {
        br1.style.display = 'block';
        br2.style.display = 'block';
        br3.style.display = 'block';
        br4.style.display = 'block';
        detail.style.display = 'none';
    } 
}
PickUp('PickUp1','detail1');
PickUp('PickUp2','detail2');
PickUp('PickUp3','detail3');
PickUp('PickUp4','detail4');
}

$(function() {
	/*好玩好用动态效果*/

	$("#show1 ul li img").hover(function(){
		$(this).css("width","210px");
		$(this).css("height","200px");

	});
	$("#show1 ul li img").mouseout(function(){
		$(this).css("width","200px");
		$(this).css("height","200px");

	});
	$("#show4 ul li img").hover(function(){
		$(this).css("width","210px");
		$(this).css("height","200px");

	});
	$("#show4 ul li img").mouseout(function(){
		$(this).css("width","200px");
		$(this).css("height","200px");

	});



	/*********************分页*************************/
	var clipInit=function (){
	    //var pageCon;
        var m = 0;
	    $.ajax({
	    	type:"GET",
	    	url:'http://rap.taobao.org/mockjsdata/14238/hahaha',
	    	data:{
	    		manager:"GeekManager"
	    	},
	    	success:function(data) {
                var list = data;
                var n = 0;var str1;var str2;var str3;var str4;var str5;
                for (var i = 0; i < list.length; i++) {                 
                    var str;
                    if (list[i].stuKind == '学习网站链接') {  
                        m = m+1;
                            if(i<3) {
                                str1+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(i);
                                $('#link'+((i+1)/3)).html(str1);
                            } else if(i>=3&&i<6) {
                                str2+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+((i+1)/3)).html(str2);
                            } else if(i>=6&&i<9) {
                                str3+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                //console.log(str3);
                                $('#link'+((i+1)/3)).html(str3);
                            } else if(i>=9&&i<12) {
                                str4+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                //console.log(str4);
                                $('#link'+((i+1)/3)).html(str4);
                            } else if(i>=12&&i<15) {
                                str5+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+((i+1)/3)).html(str5);
                            }     					
            		}
            	}
	    	}

	    })
/*$(function(){
    data = [
        {
            stuKind:"学习网站链接",
            stuName:"慕课网",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"hahha",
            stuImg:"../images/精通css.jpg",
            stuView:"2",
            stuLink:"www.baidu.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"哈哈哈",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"嘻嘻嘻",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"第5页",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        }
    ];
                var list = data;
                var n = 0;var str1;var str2;var str3;var str4;var str5;
                for (var i = 0; i < list.length; i++) {                 
                    var str;
                    if (list[i].stuKind == '学习网站链接') {  
                        m = m+1;
                            if(i<3) {
                                str1+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(i);
                                $('#link'+((i+1)/3)).html(str1);
                            } else if(i>=3&&i<6) {
                                str2+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(str2);
                                $('#link'+((i+1)/3)).html(str2);
                            } else if(i>=6&&i<9) {
                                str3+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(str3);
                                $('#link'+((i+1)/3)).html(str3);
                            } else if(i>=9&&i<12) {
                                str4+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(str4);
                                $('#link'+((i+1)/3)).html(str4);
                            } else if(i>=12&&i<15) {
                                str5+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImg+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+((i+1)/3)).html(str5);
                            }
                                                   
                    }
                }console.log(m);pageCon = m/3;console.log(pageCon); 

});
*/	    

        pageCon = 5;
	    liTab=3;    
	    medCur=Math.ceil(liTab/2);
	    var str="";
	    str+="<ul>";
	    str+="<li class='disbled' id='firstPage' onclick='FirstPage()'>首页</li>";
	    str+="<li class='disbled' id='lastPage' onclick='LastPage()'><</li>";
	    str+="<div id='pageU' class='fl'>";
	    if(liTab<=pageCon){
		    for(var i=1;i<=liTab;i++){
			    str+="<li id='clip"+i+"' onclick='pageInt(&#039;clip"+i+"&#039;,&#039;"+liTab+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
		    }
	    }else{
		    for(var i=1;i<=pageCon;i++){
			    str+="<li id='clip"+i+"' onclick='pageInt(&#039;clip"+i+"&#039;,&#039;"+pageCon+"&#039;,&#039;"+medCur+"&#039;)'>"+i+"</li>";
		    }
	    }
	    
	    str+="</div>";
	    str+="<li class='BORDER' id='nextPage' onclick='NextPage()'>></li>";
	    str+="<li class='BORDER' id='endPage' onclick='EndPage()' style='border-right:1px solid #ccc'>尾页</li>";
	    str+="</ul>";
	    $(".page").html(str);
	    function pageInt(obj,page,medCur){
	        var value=parseInt($("#"+obj).text());
	        if(value <= medCur){
		        clipPage(value,page);
	        }else if(value > medCur){
		        clipPageMax(value,page,medCur);
	        }
        }
        pageInt('clip1',pageCon,medCur);
        
	    
    }
    clipInit();
    
    //单击事件  选择页数
    ///给当前页设置高亮

    //设置当点击的值小于预设固定值
    function clipPage(cur,page){
	    var str="";
	    for(var i=1;i<=page;i++){
		    var liId="clip"+i;
		    if(cur==i){
			    $("#"+liId).attr("class","curPage");
			    $("#link"+i).show();
		    }else{
			    $("#"+liId).attr("class","BORDER");
			    $("#link"+i).hide();
		    }
		    $("#"+liId).text(i);
	    }
	    pageControl(cur);
    }

    //设置的中转站，根据获取的值更改操作
    pageInt=function (obj,page,medCur){
	    var value=parseInt($("#"+obj).text());
	    if(value <= medCur){
		    clipPage(value,page);
	    }else if(value > medCur){
		    clipPageMax(value,page,medCur);
	    }
    }

    //设置当获取的值大于预设固定值
    function clipPageMax (cur,page,medCur){
	    var str="";
	    var startNum=cur-medCur+1;
	    var maxPage=startNum+parseInt(page)-1;
	    $(".link").hide();
	    if(maxPage<pageCon){ 
		    for(var i=1;i<=page;i++){
			    var liId="clip"+i;;
			    if(medCur==i){
				    $("#"+liId).attr("class","curPage");
				    $("#link"+(i+1)).show();
			    }else{
				    $("#"+liId).attr("class","BORDER");					    			    
			    }
			    $("#clip"+i).text(startNum);
			    startNum++;
		    }
	    }else{	    	
		    var end = new RegExp(/\d+$/);
		    var page=parseInt(end.exec(page));
		    var curT=cur-pageCon+page;
		    var maxP=pageCon;
		    for(var i=page;i>=1;i--){
			    var liId="clip"+i;
			    if(curT==i){
				    $("#"+liId).attr("class","curPage");
				    $("#link"+(i+2)).show();
			    }else{
				$("#"+liId).attr("class","BORDER");
			    }
			    $("#"+liId).text(maxP);
			    maxP--;
		    }
		
	    }
	    pageControl(cur);
    }
    //首页，尾页，上一页，下一页 的样式
    function pageControl(cur){
	    if(cur==1){
		    $("#firstPage").attr("class","disbled");
		    $("#lastPage").attr("class","disbled");
		    $("#nextPage").attr("class","BORDER");
		    $("#endPage").attr("class","BORDER");
	    }else if(cur==pageCon){
		    $("#firstPage").attr("class","BORDER");
		    $("#lastPage").attr("class","BORDER");
		    $("#nextPage").attr("class","disbled");
		    $("#endPage").attr("class","disbled");
	    }else{
		    $("#firstPage").attr("class","BORDER");
		    $("#lastPage").attr("class","BORDER");
		    $("#nextPage").attr("class","BORDER");
		    $("#endPage").attr("class","BORDER");
	    }
    }
    //第一页 显示
    FirstPage=function (){
	    var forNum=parseInt(liTab);
	    clipPage(1,forNum);
    }
    //尾页 显示
    EndPage=function (){
	    var maxV=parseInt(pageCon);
	    clipPageMax(maxV,liTab,medCur);
    }
    //上一页 显示
    LastPage=function (){
	    var choice=$(".curPage").attr('id');
	    var obj=$("#"+choice).prev().attr('id');
	    pageInt(obj,liTab,medCur);
    }
    //下一页 显示
    NextPage=function (){
	    var choice=$(".curPage").attr('id');
	    var obj=$("#"+choice).next().attr('id');
	    pageInt(obj,liTab,medCur);
    }
    /*********************分页*************************/

    /*浏览量*/
    $('.PictureShow a').click(function(){
    	$.ajax({
    		type:"GET",
    		url:"http://rap.taobao.org/mockjsdata/14238/hahaha",
    		data:{},
    		success:function(data){
                if(data.status != '1') {
            	alert("出错了！");
            } else{alert(0);}
    		}
    	});
    });//这个怎么测？

	/*交互*/
	$.ajax({
		type:"GET",
		url:'http://rap.taobao.org/mockjsdata/14238/hahaha',
		data:{
			Manager:"GeekManager"
		},
		success:function(data){
            if(data.status === '1'){
                console.log(data.stuKind);
                console.log(data.stuLink);
                console.log(data.stuName);
                console.log(data.stuImg);
                console.log(data.stuIntr);
                console.log(data.stuReco);
            	var list=data;
                var str1 = '';
                var str11 = '';
                var str12 = '';
                var str2 = '';
                var str21 = '';
                var str22 = '';
                var str3 = '';
                var str31 = '';
                var str32 = '';
                var str4 = '';
                var str41 = '';
                var str42 = '';
            	for (var i = 0; i < list.length; i++) {
            		if (list[i].stuKind == '书籍推荐') {
            			if(i<6) {            				
            				str1+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
            				       '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
            			}
            		    
            		    str12+='<li><a href="'
            				    +list[i].stuLink+
            				    '"><img src="'
            				    +list[i].stuImg+
            				    '"></a></li>';
            		    str11+= '<li><a href="'
            				    +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +(i+1)+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			
            			$('#BookTxt').html(str1);
            			$('#BookTxt-more').html(str11);
            			$('#BookShow').html(str12);
            		} else if (list[i].stuKind == '学习网站链接') {
            			if(i<6) {            				
            				str2+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
            			}           				
            			str21+= '<li><a href="'
            				     +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +(i+1)+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			$('#WebTxt').html(str2);
            			$('#WebTxt-more').html(str21);
            	    } else if (list[i].stuKind == '成功案例') {
            			if (i<6) {
            				str3+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +c+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
            			}	
            		    /*str32+='<li><div class="effect-9 single-member"><div class="member-image"><img src="'
            				    +list[i].stuImg+
            				    '"></a></div><div class="more-info"><p><a class="white f14 mt50" href="'
            				    +link[i].stuLink+
            				    '">'
            				    +link[i].stuIntr+
            				    '</a></p></div></div></li>';*/
            		    str31+= '<li><a href="'
            				    +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +cc+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			$('#SucTxt').html(str3);
            			$('#SucTxt-more').html(str31);
            			//$('#SucShow').html(str32);
            	    } else if (list[i].stuKind == '好玩好用') {
            			if(i<6) {           				
            				str4+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
            			}
            				
            			str42+='<li><a href="'
            				    +list[i].stuLink+
            				    '"><img src="'
            				    +list[i].stuImg+
            				    '"></a></li>';
            			str41+= '<li><a href="'
            				    +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +dd+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			$('#GoodTxt').append(str4);
            			$('#GoodTxt-more').append(str41);
            			$('#GoodShow').append(str42);
            	    }            	
                }
            }
		}
	});
/*$(function(){
    data = [
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"hahha",
            stuImg:"../images/精通css.jpg",
            stuView:"2",
            stuLink:"www.baidu.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"书籍推荐",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        }
    ];
                var StuKind = data.stuKind;
                var StuName = data.stuName;
                var StuImg = data.stuImg;
                var StuView = data.stuView;
                var StuLink = data.stuLink;
                var StuReco = data.stuReco;
                var StuIntr = data.stuIntr;
                var list=data;
                var str1 = '';
                var str11 = '';
                var str12 = '';
                for (var i = 0; i < list.length; i++) {
                    if (list[i].stuKind == '书籍推荐') {
                        //{
                            
                            str12+='<li><a href="'
                                   +list[i].stuLink+
                                   '"><img src="'
                                   +list[i].stuImg+
                                   '"></a></li>';
                            str11+= '<li><a href="'
                                   +list[i].stuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
                                   '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
                            if(i<6) {                            
                            str1+= '<li><a href="'
                                   +list[i].stuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
                                   '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
                            }
                        //}
                        alert(str12);
                        $('#BookTxt').html(str1);
                        $('#BookTxt-more').html(str11);
                        $('#BookShow').html(str12);
                    } else if (list[i].StuKind == '学习网站链接') {
                        for (var b = 0; b<6; b++) {
                            var str2 = '';
                            str2+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +b+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        for (var bb = 0; bb<list.length; bb++) {
                            var str21 = '';
                            var str22 = '';
                            str21+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +bb+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        $('#WebTxt').html(str2);
                        $('#WebTxt-more').html(str21);
                    } else if (list[i].StuKind == '成功案例') {
                        for (var c = 0; c<6; c++) {
                            var str3 = '';
                            str3+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +c+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        for (var cc = 0; cc<list.length; cc++) {
                            var str31 = '';
                            var str32 = '';
                            str32+='<li><div class="effect-9 single-member"><div class="member-image"><img src="'
                                   +list[i].StuImg+
                                   '"></a></div><div class="more-info"><p><a class="white f14 mt50" href="'
                                   +link[i].StuLink+
                                   '">'
                                   +link[i].StuIntr+
                                   '</a></p></div></div></li>';
                            str31+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +cc+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        $('#SucTxt').html(str3);
                        $('#SucTxt-more').html(str31);
                        $('#SucShow').html(str32);
                    } else if (list[i].StuKind == '好玩好用') {
                        for (var d = 0; d<6; d++) {
                            var str4 = '';
                            str4+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +c+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        for (var dd = 0; dd<list.length; dd++) {
                            var str41 = '';
                            var str42 = '';
                            str42+='<li><a href="'
                                   +list[i].StuLink+
                                   '"><img src="'
                                   +list[i].StuImg+
                                   '"></a></li>';
                            str41+= '<li><a href="'
                                   +list[i].StuLink+
                                   '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +dd+
                                   '</div>'
                                   +list[i].StuName+
                                   '</a></li>';
                        }
                        $('#GoodTxt').append(str4);
                        $('#GoodTxt-more').append(str41);
                        $('#GoodShow').append(str42);
                    }
                }
});*/
/*$(function(){
    data = [
        {
            stuKind:"学习网站链接",
            stuName:"慕课网",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"hahha",
            stuImg:"../images/精通css.jpg",
            stuView:"2",
            stuLink:"www.baidu.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"哈哈哈",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
        {
            stuKind:"学习网站链接",
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        }，
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"嘻嘻嘻",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
            stuName:"精通css",
            stuImg:"../images/精通css.jpg",
            stuView:"1",
            stuLink:"www.163.com",
            stuReco:"1",
            stuIntr:"1"
        },
    ];
});*/
})
