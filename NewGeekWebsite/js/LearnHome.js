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
			$('#show4').show();
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
    //var br3 = document.getElementById('BookRecommendation3');
    var br4= document.getElementById('BookRecommendation4');
    var detail = document.getElementById(id2);
    more.onclick = function() {
        br1.style.display = 'none';
        br2.style.display = 'none';
        //br3.style.display = 'none';
        br4.style.display = 'none';
        detail.style.display = 'block';
    }
}
BrowseMore('more1','detail1');
BrowseMore('more2','detail2');
/*BrowseMore('more3','detail3');*/
BrowseMore('more4','detail4');
function PickUp(id1,id2) {
	var pu = document.getElementById(id1);
    var br1 = document.getElementById('BookRecommendation1');
    var br2 = document.getElementById('BookRecommendation2');
    //var br3 = document.getElementById('BookRecommendation3');
    var br4= document.getElementById('BookRecommendation4');
    var detail = document.getElementById(id2);
    pu.onclick = function() {
        br1.style.display = 'block';
        br2.style.display = 'block';
        //br3.style.display = 'block';
        br4.style.display = 'block';
        detail.style.display = 'none';
    } 
}
PickUp('PickUp1','detail1');
PickUp('PickUp2','detail2');
/*PickUp('PickUp3','detail3');*/
PickUp('PickUp4','detail4');
}

	

    /*浏览量*/
    /*$('.PictureShow a').click(function(){
    	$.ajax({
    		type:"GET",
    		url:'StudyCenter_queryAllStudyCenter',
    		data:{

		    },
    		success:function(data){
                if(data.status != '1') {
            	alert("出错了！");
            } else{alert(0);}
    		},
        error:function(){
          alert("无法获取数据！");
        }
    	});
    });*/
    //这个怎么测？

	/*交互*/
	/*$.ajax({
		type:"GET",
		url:'StudyCenter_queryAllStudyCenter',
		data:{
			Manager:"GeekManager"
		},
		success:function(data){
			var list = JSON.parse(data);
			var l = list.length;

			if(list[l-1].status == "1"){
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
                var m=0,n=0,q=0;
            	for (var i = 0; i < list.length; i++) {

                    if (list[i].stuKind == '书籍推荐') {
                        m++;
                        
                        if(i<6) {
            				str1+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i+1)+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';

            			}
            		    
            		    str12+='<li><a href="'
            				    +list[i].stuLink+
            				    '"><img src="'
            				    +list[i].stuImgUrl+
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
                        
                        n++;

                        if(i>m&&i<(m+6)) {
                            str2+= '<li><a href="'
                                +list[i].stuLink+
                                '"><div class="ranking mt5 mr5 white HihgLight">'
                                +(i-m)+
                                '</div>'
                                +list[i].stuName+
                                '</a></li>';

                        }

                        
                        str21+= '<li><a href="'
                            +list[i].stuLink+
                            '"><div class="ranking mt5 mr5 white HihgLight">'
                            +(i-m+1)+
                            '</div>'
                            +list[i].stuName+
                            '</a></li>';
            			
                        $('#WebTxt').html(str2);
            			$('#WebTxt-more').html(str21);
            	    } else if (list[i].stuKind == '成功案例') {
            			
                        q++;
                        if (i>(m+n)&&i<(m+n+6)) {
            				str3+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i-(m+n))+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
            			}	
            		    
            		    str31+= '<li><a href="'
            				    +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +(i-(m+n+1))+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			$('#SucTxt').html(str3);
            			$('#SucTxt-more').html(str31);
            			
            	    } else if (list[i].stuKind == '好玩好用') {
                        
                        if(i>(m+n+q)&&i<(m+n+q+6)) {
            				str4+= '<li><a href="'
            				       +list[i].stuLink+
            				       '"><div class="ranking mt5 mr5 white HihgLight">'
                                   +(i-(m+n+q))+
            				       '</div>'
                                   +list[i].stuName+
                                   '</a></li>';
            			}
            			str42+='<li><a href="'
            				    +list[i].stuLink+
            				    '"><img src="'
            				    +list[i].stuImgUrl+
            				    '"></a></li>';
            			str41+= '<li><a href="'
            				    +list[i].stuLink+
            				    '"><div class="ranking mt5 mr5 white HihgLight">'
                                +(i-(m+n+q+1))+
            				    '</div>'
                                +list[i].stuName+
                                '</a></li>';
            			
                        $('#GoodTxt').html(str4);
            			$('#GoodTxt-more').html(str41);
            			$('#GoodShow').html(str42);
            	    }            	
                }
            }
		},
    error:function() {
      alert("无法获取数据！");
    }
	});*/
