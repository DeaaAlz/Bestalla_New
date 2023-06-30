$(window).scroll(function(){
  
  
  
    if($(window).scrollTop()>40)
    {
      $("#contact").css("opacity", "1");
    }
    else
    {
      $("#contact").css("opacity", "0");
    }

  
  })