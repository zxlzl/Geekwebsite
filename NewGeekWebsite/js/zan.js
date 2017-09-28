$(document).ready(function(){
    $('.heart').click(function(){{
      var A=$(this).attr("id");
      var B=A.split("like");
        var messageID=B[1];//splitting like1 to 1
        var C=parseInt($("#likeCount"+messageID).html());
      $(this).css("background-position","")
        var D=$(this).attr("rel");
       
        if(D === 'like') 
        {      
        $("#likeCount"+messageID).html(C+1);
        $(this).addClass("heartAnimation").attr("rel","unlike");
        }
        else
        {
        $("#likeCount"+messageID).html(C-1);
        $(this).removeClass("heartAnimation").attr("rel","like");
        $(this).css("background-position","left");
      }
    }})
});

//  $.ajax({
//       type: "POST",// url: "message_like_ajax.php",
//       data: dataString,
//       cache: false,
//       success: function(data){
//       $("#likeCount"+messageID).html(data);
//       if(D === 'like') {
//         $(this).addClass("heartAnimation").attr("rel","unlike"); //applying animation class
//       }
//       else{
//         $(this).removeClass("heartAnimation").attr("rel","like");
//         $(this).css("background-position","left");
//       }
//     }); //ajax end

//   });//heart click end

// });