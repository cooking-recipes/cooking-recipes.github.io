!function(a){a.fn.wmuSlider=function(b){var c={animation:"fade",animationDuration:600,slideshow:!0,slideshowSpeed:7e3,slideToStart:0,navigationControl:!0,paginationControl:!0,previousText:"Previous",nextText:"Next",touch:!1,slide:"article",items:1},b=a.extend(c,b);return this.each(function(){var h,i,j,c=a(this),d=b.slideToStart,e=c.find(".wmuSliderWrapper"),f=c.find(b.slide),g=f.length,k=function(h,k,l){if(j)return!1;j=!0,d=h;var m=a(f[h]);c.animate({height:m.innerHeight()}),"fade"==b.animation?(f.css({position:"absolute",opacity:0}),m.css("position","relative"),m.animate({opacity:1},b.animationDuration,function(){j=!1})):"slide"==b.animation&&(k?0==h?e.animate({marginLeft:-c.width()/b.items*g},b.animationDuration,function(){e.css("marginLeft",0),j=!1}):(l||e.css("marginLeft",-c.width()/b.items*g),e.animate({marginLeft:-c.width()/b.items*h},b.animationDuration,function(){j=!1})):e.animate({marginLeft:-c.width()/b.items*h},b.animationDuration,function(){j=!1})),i&&i.find("a").each(function(b){b==h?a(this).addClass("wmuActive"):a(this).removeClass("wmuActive")}),c.trigger("slideLoaded",h)};if(b.navigationControl){var l=a('<a class="wmuSliderPrev">'+b.previousText+"</a>");l.click(function(a){a.preventDefault(),clearTimeout(h),0==d?k(g-1,!0):k(d-1)}),c.append(l);var m=a('<a class="wmuSliderNext">'+b.nextText+"</a>");m.click(function(a){a.preventDefault(),clearTimeout(h),d+1==g?k(0,!0):k(d+1)}),c.append(m)}if(b.slideshow){var n=function(){d+1<g?k(d+1):k(0,!0),h=setTimeout(n,b.slideshowSpeed)};h=setTimeout(n,b.slideshowSpeed)}var o=function(){var g=a(f[d]);c.animate({height:g.innerHeight()}),"slide"==b.animation&&(f.css({width:c.width()/b.items}),e.css({marginLeft:-c.width()/b.items*d,width:c.width()*f.length}))},p=function(a,f,i,j){clearTimeout(h),"move"!=f||"left"!=i&&"right"!=i?"cancel"==f?"right"==i&&0==d?e.animate({marginLeft:-g*c.width()/b.items},b.animationDuration):e.animate({marginLeft:-d*c.width()/b.items},b.animationDuration):"end"==f&&("right"==i?0==d?k(g-1,!0,!0):k(d-1):"left"==i?d+1==g?k(0,!0):k(d+1):e.animate({marginLeft:-d*c.width()/b.items},b.animationDuration)):"right"==i?0==d?e.css("marginLeft",-g*c.width()/b.items+j):e.css("marginLeft",-d*c.width()/b.items+j):"left"==i&&e.css("marginLeft",-d*c.width()/b.items-j)};b.touch&&"slide"==b.animation&&(a.isFunction(a.fn.swipe)||a.ajax({url:"jquery.touchSwipe.min.js",async:!1}),a.isFunction(a.fn.swipe)&&c.swipe({triggerOnTouchEnd:!1,swipeStatus:p,allowPageScroll:"vertical"}));var q=function(){var h=a(f[d]),i=h.find("img");if(i.load(function(){e.show(),c.animate({height:h.innerHeight()})}),"fade"==b.animation)f.css({position:"absolute",width:"100%",opacity:0}),a(f[d]).css("position","relative");else if("slide"==b.animation){b.items>g&&(b.items=g),f.css("float","left"),f.each(function(b){var c=a(this);c.attr("data-index",b)});for(var j=0;j<b.items;j++)e.append(a(f[j]).clone());f=c.find(b.slide)}o(),c.trigger("hasLoaded"),k(d)};q(),a(window).resize(o),c.bind("loadSlide",function(a,b){clearTimeout(h),k(b)})})}}(jQuery);