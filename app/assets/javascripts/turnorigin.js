$(document).on('turbolinks:load', function(){
  $('.right1').click(function(){
    $('.table-content').hide();
    $('.content-1').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  });
  $('.right2').click(function(){
    $('.content-1').hide();
    $('.content-2').fadeIn("slow");
  });
  $('.right3').click(function(){
    $('.content-2').hide();
    $('.content-3').fadeIn("slow");
  });
  $('.right3-work').click(function(){
    $('.content-2').hide();
    $('.afterword').fadeIn("slow");
  });
  $('.right4').click(function(){
    $('.content-3').hide();
    $('.content-4').fadeIn("slow");
  });
  $('.right5').click(function(){
    $('.content-4').hide();
    $('.content-5').fadeIn("slow");
  });
  $('.right6').click(function(){
    $('.content-4').hide();
    $('.afterword').fadeIn("slow");
  });
  $('.left1').click(function(){
    $('.content-1').hide();
    $('.table-content').fadeIn("slow");
    $('.mokuji-nal').fadeOut("slow");
  });
  $('.left2').click(function(){
    $('.content-2').hide();
    $('.content-1').fadeIn("slow");
  });
  $('.left3').click(function(){
    $('.content-3').hide();
    $('.content-2').fadeIn("slow");
  });
  $('.left4').click(function(){
    $('.content-4').hide();
    $('.content-3').fadeIn("slow");
  });
  $('.left5').click(function(){
    $('.content-5').hide();
    $('.content-4').fadeIn("slow");
  });
  $('.left6').click(function(){
    $('.afterword').hide();
    $('.content-4').fadeIn("slow");
  });
  $('.merucari').on('mouseover', function(){
    $('.merucari').css({'color':'blue',"font-size":"110%"})
  });
  $('.merucari').on('mouseout', function(){
    $('.merucari').css({'color':'#000',"font-size":"100%"})
  });
  $('.tennokoe').on('mouseover', function(){
    $('.tennokoe').css({'color':'blue',"font-size":"110%"})
  });
  $('.tennokoe').on('mouseout', function(){
    $('.tennokoe').css({'color':'#000',"font-size":"100%"})
  });
  $('.atogaki-mokuji').on('mouseover', function(){
    $('.atogaki-mokuji').css({'color':'blue',"font-size":"110%"})
  });
  $('.atogaki-mokuji').on('mouseout', function(){
    $('.atogaki-mokuji').css({'color':'#000',"font-size":"100%"})
  });
  $('.intaladuction').on('mouseover', function(){
    $('.intaladuction').css({'color':'blue',"font-size":"110%"})
  });
  $('.intaladuction').on('mouseout', function(){
    $('.intaladuction').css({'color':'#000',"font-size":"100%"})
  });
  $('.kanren').on('mouseover', function(){
    $('.kanren').css({'color':'blue',"font-size":"110%"})
  });
  $('.kanren').on('mouseout', function(){
    $('.kanren').css({'color':'#000',"font-size":"100%"})
  });
  $('.skil').on('mouseover', function(){
    $('.skil').css({'color':'blue',"font-size":"110%"})
  });
  $('.skil').on('mouseout', function(){
    $('.skil').css({'color':'#000',"font-size":"100%"})
  });
  $('.merucari').click(function(){
    $('.table-content').hide();
    $('.content-1').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.tennokoe').click(function(){
    $('.table-content').hide();
    $('.content-2').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.atogaki-mokuji').click(function(){
    $('.table-content').hide();
    $('.afterword').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.intaladuction').click(function(){
    $('.table-content').hide();
    $('.content-1').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.kanren').click(function(){
    $('.table-content').hide();
    $('.content-4').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.skil').click(function(){
    $('.table-content').hide();
    $('.content-4').fadeIn("slow");
    $('.mokuji-nal').fadeIn("slow");
  })
  $('.mokuji-nal').click(function(){
    $('.mokujihe').hide();
    $('.table-content').fadeIn("slow");
    $('.mokuji-nal').fadeOut("slow");
  })
});