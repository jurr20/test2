
// custom file
function viewport(){var e=window,n="inner";return"innerWidth"in window||(n="client",e=document.documentElement||document.body),{width:e[n+"Width"],height:e[n+"Height"]}}$(window).load(function(){function e(e){return function(n){return e.test(n)}}function n(e,n){if(!e||!n)return!1;var a=n.name,o=n.value,r=!e[a].some(function(e){return!1===e(o)}),i=t[a];return r?($(n).addClass("valid"),$(n).removeClass("invalid"),$(n)[0].placeholder=i.placeholder):($(n).addClass("invalid"),$(n).removeClass("valid"),$(n)[0].placeholder=i.error),r}/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?$("body").addClass("ios"):$("body").addClass("web"),$("body").removeClass("loaded"),$(".js-slider").length&&$(".js-slider").slick({speed:800,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,fade:!0,autoplay:!0,autoplaySpeed:4e3});var a=$(".js-catalog-menu-name");a.length&&a.on("click",function(){event.preventDefault();var e=this;a.filter(function(n,a){return a!==e}).removeClass("active").next(".catalog-submenu").slideUp(),$(this).next(".catalog-submenu").slideToggle(),$(this).toggleClass("active")}),$(".js-menu-button").click(function(){$("body").addClass("pushy-open-left")}),$(".js-site-overlay, .js-menu-button2").click(function(){$("body").removeClass("pushy-open-left")});var o={name:[e(/^([а-я]|[А-Я]|[a-z]|[A-z]){2,40}$/)],phone:[e(/^\d{3,12}$/)],email:[e(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]},t={name:{placeholder:"",error:"Name is mandatory field"},phone:{placeholder:"",error:"Phone is mandatory field"},email:{placeholder:"",error:"E-mail is mandatory field"}};$(".form-validation").blur(function(e){n(o,e.target)}),$("#send-support").click(function(e){e.preventDefault(),function(e,a){var o,t=!0;for(o in e)n(e,$("[name="+o+"].form-validation")[0])||(t=!1);return t}(o)&&$(".form__message").addClass("show")}),$(".js-fancybox").length&&(window.innerWidth>1199?$(".js-fancybox").fancybox({margin:10,padding:0,openMethod:"dropIn",openSpeed:500,closeMethod:"dropOut",closeSpeed:500,wrapCSS:"popus-main",helpers:{overlay:{locked:!0}}}):$(".js-fancybox").fancybox({margin:0,padding:0,wrapCSS:"popup-main",scrolling:"no",width:"100%",height:"100%",afterLoad:function(){$(".fancybox-overlay").addClass("overlay-mob")},helpers:{overlay:{locked:!0}}})),$(".js-catalog-menu-tuggler").click(function(){$(this).toggleClass("active");var e=$(this),n=e.attr("data-more"),a=e.attr("data-less"),o=e.find(".js-more-text");return e.parents(".js-catalog-menu").find(".js-catalog-menu-cont").slideToggle(),o.text(o.text()==n?a:n),!1})});var handler=function(){viewport().width};$(window).bind("load",handler),$(window).bind("resize",handler);