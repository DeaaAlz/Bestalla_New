$(function(){
  
});


$(window).scroll(function(){
  
  

  if($(window).scrollTop()>30)
  {
    $("nav").removeClass("gradient-border");
  }
  else
  {
    if ($(window).width() > 990) 
    {
      $("nav").addClass("gradient-border");
    }
  }


  if($(window).scrollTop()>300)
  {
    $("#categ").css("opacity", "1");
  }
  else
  {
    $("#categ").css("opacity", "0");
  }

  if($(window).scrollTop()>1100)
  {
    $("#smallServices").css("opacity", "1");
  }
  else
  {
    $("#smallServices").css("opacity", "0");
  }

  

})


$(".langUl").mouseover(function(){

        $(".languagesPackage").css("display","inline");
    
});

$(".languagesPackage").mouseleave(function(){

    $(".languagesPackage").css("display","none");

});




document.addEventListener('click', function handleClickOutsideBox(event) {
    const box = document.getElementById('languagesPackagee');
  if($(".languagesPackage").css("display")=="inline")
  {
    if (!box.contains(event.target)) {
        box.style.display = 'none';
      }
  }
    
  });

  $(".Explore").hover(function(){
    $(".Explore a").css("color","white");
  });

  $(".Explore").mouseleave(function(){
    $(".Explore a").css("color","rgb(221, 221, 221)");
  });
  
  $("#res").click(function(){
    $("#rest").addClass("res");
    $("#cofe").removeClass("res");
    $("#host").removeClass("res");
    $("#scho").removeClass("res");
    $("#othe").removeClass("res");
    $("#inst").removeClass("res");
  });

  $("#cof").click(function(){
    $("#cofe").addClass("res");
    $("#rest").removeClass("res");
    $("#host").removeClass("res");
    $("#scho").removeClass("res");
    $("#othe").removeClass("res");
    $("#inst").removeClass("res");
  });

  $("#hos").click(function(){
    $("#host").addClass("res");
    $("#rest").removeClass("res");
    $("#cofe").removeClass("res");
    $("#scho").removeClass("res");
    $("#othe").removeClass("res");
    $("#inst").removeClass("res");
  });

  $("#sch").click(function(){
    $("#scho").addClass("res");
    $("#cofe").removeClass("res");
    $("#host").removeClass("res");
    $("#rest").removeClass("res");
    $("#othe").removeClass("res");
    $("#inst").removeClass("res");
  });

  $("#ins").click(function(){
    $("#inst").addClass("res");
    $("#cofe").removeClass("res");
    $("#host").removeClass("res");
    $("#scho").removeClass("res");
    $("#othe").removeClass("res");
    $("#rest").removeClass("res");
  });

  $("#oth").click(function(){
    $("#othe").addClass("res");
    $("#cofe").removeClass("res");
    $("#host").removeClass("res");
    $("#scho").removeClass("res");
    $("#rest").removeClass("res");
    $("#inst").removeClass("res");
  });