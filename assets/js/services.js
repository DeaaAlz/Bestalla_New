$(window).scroll(function(){
  
  
  
    if($(window).scrollTop()>100)
    {
      $("#Re").css("opacity", "1");
    }
    else
    {
      $("#categ").css("opacity", "0");
    }

    if($(window).scrollTop()>750)
    {
      $("#Co").css("opacity", "1");
    }
    else
    {
      $("#Co").css("opacity", "0");
    }

    if($(window).scrollTop()>1450)
    {
      $("#Sc").css("opacity", "1");
    }
    else
    {
      $("#Sc").css("opacity", "0");
    }

    if($(window).scrollTop()>2280)
    {
      $("#Ho").css("opacity", "1");
    }
    else
    {
      $("#Ho").css("opacity", "0");
    }

    if($(window).scrollTop()>3050)
    {
      $("#Pu").css("opacity", "1");
    }
    else
    {
      $("#Pu").css("opacity", "0");
    }


    if($(window).scrollTop()>3790)
    {
      $("#Ot").css("opacity", "1");
    }
    else
    {
      $("#Ot").css("opacity", "0");
    }
  
    
  
    
  
  })