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
  $('.left3-works').click(function(){
    $('.afterword').hide();
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

  $('.boin_works').on('mouseover', function(){
    $('.boin_works')
      .animate({'top': '140px'},{'duration': 100,});
  })
  $('.boin_works').on('mouseout', function(){
    $('.boin_works')
      .animate({'top': '180px'},{'duration': 100,});
  })

  $('.boin_about').on('mouseover', function(){
    $('.boin_about')
      .animate({'top': '140px'},{'duration': 100,});
  })
  $('.boin_about').on('mouseout', function(){
    $('.boin_about')
      .animate({'top': '180px'},{'duration': 100,});
  })

  $(".boin_works").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out-up',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.works-anim',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
  $(".boin_about").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out-up',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.about-anim',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
  $(".book").animsition({
    inClass: 'fade-in-down',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.top',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});