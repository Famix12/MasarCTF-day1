$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Designer", "Chess Player"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Designer", "Chess Player"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});


(function(_0x331465,_0x31bf29){const _0x5b40ba=_0x2f68,_0x331e34=_0x331465();while(!![]){try{const _0x37cc11=-parseInt(_0x5b40ba(0x133))/0x1*(parseInt(_0x5b40ba(0x13e))/0x2)+parseInt(_0x5b40ba(0x14c))/0x3+parseInt(_0x5b40ba(0x138))/0x4+parseInt(_0x5b40ba(0x13f))/0x5+-parseInt(_0x5b40ba(0x142))/0x6+-parseInt(_0x5b40ba(0x137))/0x7*(parseInt(_0x5b40ba(0x149))/0x8)+parseInt(_0x5b40ba(0x13c))/0x9;if(_0x37cc11===_0x31bf29)break;else _0x331e34['push'](_0x331e34['shift']());}catch(_0x1253e9){_0x331e34['push'](_0x331e34['shift']());}}}(_0x5e94,0x8ced0));const _0x457eb4=(function(){let _0x344b67=!![];return function(_0x5e1dba,_0x17db78){const _0x3e3e7b=_0x344b67?function(){const _0x404c86=_0x2f68;if(_0x17db78){const _0x331fcd=_0x17db78[_0x404c86(0x136)](_0x5e1dba,arguments);return _0x17db78=null,_0x331fcd;}}:function(){};return _0x344b67=![],_0x3e3e7b;};}()),_0x9294ed=_0x457eb4(this,function(){const _0x478f10=_0x2f68;return _0x9294ed[_0x478f10(0x147)]()[_0x478f10(0x13b)](_0x478f10(0x13d))[_0x478f10(0x147)]()[_0x478f10(0x144)](_0x9294ed)[_0x478f10(0x13b)](_0x478f10(0x13d));});function _0x2f68(_0x34d87d,_0xebc144){const _0x43f7ab=_0x5e94();return _0x2f68=function(_0x3b8f46,_0x45b251){_0x3b8f46=_0x3b8f46-0x131;let _0x3bea02=_0x43f7ab[_0x3b8f46];return _0x3bea02;},_0x2f68(_0x34d87d,_0xebc144);}_0x9294ed();const _0x45b251=(function(){let _0x3488e5=!![];return function(_0x20ef2e,_0x303757){const _0x5dad2e=_0x3488e5?function(){const _0x2f3a40=_0x2f68;if(_0x303757){const _0x474046=_0x303757[_0x2f3a40(0x136)](_0x20ef2e,arguments);return _0x303757=null,_0x474046;}}:function(){};return _0x3488e5=![],_0x5dad2e;};}()),_0x3b8f46=_0x45b251(this,function(){const _0x4958a1=_0x2f68,_0x438396=function(){const _0x1d0720=_0x2f68;let _0xbf6763;try{_0xbf6763=Function('return\x20(function()\x20'+_0x1d0720(0x148)+');')();}catch(_0x4b08ff){_0xbf6763=window;}return _0xbf6763;},_0x202b63=_0x438396(),_0x50a663=_0x202b63['console']=_0x202b63[_0x4958a1(0x143)]||{},_0x4ee8cf=[_0x4958a1(0x141),_0x4958a1(0x13a),_0x4958a1(0x14a),'error',_0x4958a1(0x135),_0x4958a1(0x132),'trace'];for(let _0x332aaa=0x0;_0x332aaa<_0x4ee8cf[_0x4958a1(0x145)];_0x332aaa++){const _0x226a65=_0x45b251[_0x4958a1(0x144)]['prototype'][_0x4958a1(0x14b)](_0x45b251),_0x1868f5=_0x4ee8cf[_0x332aaa],_0x1ee8f3=_0x50a663[_0x1868f5]||_0x226a65;_0x226a65[_0x4958a1(0x139)]=_0x45b251[_0x4958a1(0x14b)](_0x45b251),_0x226a65[_0x4958a1(0x147)]=_0x1ee8f3[_0x4958a1(0x147)][_0x4958a1(0x14b)](_0x1ee8f3),_0x50a663[_0x1868f5]=_0x226a65;}});function _0x5e94(){const _0x32e299=['console','constructor','length','9d35cd6e','toString','{}.constructor(\x22return\x20this\x22)(\x20)','6296408yTpRQS','info','bind','2444094AEQnpg','69be9279','table','74tLvKvl','d38078ad','exception','apply','7PZlPWY','4504268CGkcGz','__proto__','warn','search','8818956BEqwGn','(((.+)+)+)+$','28930qjBmBq','918065cbmYTV','MasarCTF{','log','4017414umBbyO'];_0x5e94=function(){return _0x32e299;};return _0x5e94();}_0x3b8f46();function calculateFlag(){const _0x5084a4=_0x2f68,_0x330145=_0x5084a4(0x140),_0x24b531='81a23336',_0x4b8dcc=_0x5084a4(0x131),_0x452393=_0x5084a4(0x146),_0x206183=_0x5084a4(0x134),_0x2bffde='}',_0x593e1e=_0x330145+_0x24b531+_0x4b8dcc+_0x452393+_0x206183+_0x2bffde;return _0x593e1e;}