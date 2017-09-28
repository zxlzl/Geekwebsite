var clipInit=function (){
	    //var pageCon;
        var m = 0;
	    /*$.ajax({
	      type:"GET",
	    	url:'StudyCenter_queryAllStudyCenter',
	    	data:{
	    		manager:"GeekManager"
	    	},
	    	success:function(data) {
                var list = JSON.parse(data);
                var l = list.length;
                if(list[l-1].status == "1") {
                var n = 0;var str;var str1 = " ";var str2="";var str3="";var str4="";var str5="";
                    var q=0;
                for (var i = 0; i < list.length; i++) {                 
                    //console.log(list[i].stuKind);
                    if(list[i].stuKind == '书籍推荐'){
                        q++;
                    }else if (list[i].stuKind == '学习网站链接') {
                        m = m+1;
                        //console.log(1);
                            if(i>q-1&&i<q+3) {
                                str1+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImgUrl+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                console.log(str1);
                                $('#link'+((i-q)+1)/3).html(str1);
                            } else if(i>=3+q&&i<6+q) {
                                str2+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImgUrl+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+(((i-q)+1)/3)).html(str2);
                            } else if(i>=6+q&&i<9+q) {
                                str3+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImgUrl+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+(((i-q)+1)/3)).html(str3);
                            } else if(i>=9+q&&i<12+q) {
                                str4+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImgUrl+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+(((i-q)+1)/3)).html(str4);
                            } else if(i>=12+q&&i<15+q) {
                                str5+='<div class="text"><div class="entry-header"><div><a href="'
                                      +list[i].stuLink+
                                      '" class="entry-title">'
                                      +list[i].stuName+
                                      '</a></div><div class="post-metas">'
                                      +list[i].stuReco+
                                      '</div></div><img src="'
                                      +list[i].stuImgUrl+
                                      '"><p>'
                                      +list[i].stuIntr+
                                      '</p></div>';
                                $('#link'+(((i-q)+1)/3)).html(str5);
                            }     					
            		    }
            	  }
            } 
	    	},
        error:function() {
          alert("无法获取数据！");
        }
	    });*/

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
      } else{
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