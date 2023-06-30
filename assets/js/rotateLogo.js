$(function(){
    
    var intervalIdd = window.setInterval(function(){
        rotatee(1);
      }, 10);
      
      
});
var aa=0;
function rotatee(x){
    $(".logoImg").css({"transform":"rotate("+aa+"deg)"});
    aa+=x;
    if(aa==360)
    {
        aa=0;
    }
};

$(".logoImg").mouseover(function(){
    intervalIdd=window.setInterval(function(){
        rotatee(-1);
      }, 10);
});

$(".logoImg").mouseleave(function(){
    intervalIdd=window.setInterval(function(){
        rotatee(1);
      }, 10);
});