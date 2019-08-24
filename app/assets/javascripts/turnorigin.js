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
    $('.afterword').hide();
    $('.content-2').fadeIn("slow");
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
  $('.merucari').click(function(){
    $('.table-content').hide();
    $('.content-1').fadeIn("slow");
  })
  $('.tennokoe').click(function(){
    $('.table-content').hide();
    $('.content-2').fadeIn("slow");
  })
  $('.atogaki-mokuji').click(function(){
    $('.table-content').hide();
    $('.afterword').fadeIn("slow");
  })
  $('.mokuji-nal').click(function(){
    $('.mokujihe').hide();
    $('.table-content').fadeIn("slow");
    $('.mokuji-nal').fadeOut("slow");
  })
});