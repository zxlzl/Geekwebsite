window.onload = function() {
     alert("2");
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
    // alert(i);
    if(j==0) {
        div[div.length-1].style.display = 'none';
    }
    else {
        div[j-1].style.display = 'none';
    }    
    div[j].style.display ='block';
    }
}