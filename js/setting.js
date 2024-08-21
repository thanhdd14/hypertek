//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});



$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("#header").addClass("js-fixed");
    }
    else {
        $("#header").removeClass("js-fixed");
    }
});

$(function () {
    var headerHeight = $('#header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-anchor').click(function(e) {
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 700);
        return false;
        e.preventDefault();
    });
    jQuery('.js-header-anchor').click(function(e) {
        $(".js-mobile").removeClass("js-mobile--close");
        $("html").removeClass("js-locked");
        $(".header-nav").fadeOut();
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 700);
        return false;
        e.preventDefault();
    });
});



//fade
$(window).on('scroll load assessFeatureHeaders', function(){
    var scrollTop = $(window).scrollTop();
    var appearenceBuffer = 60;
    var windowBottom = scrollTop + $(window).height() - appearenceBuffer;
    $('body').toggleClass('scrolled-down', scrollTop > 0);
    $('.js-scrollin:not(.active)').filter(function(){
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
        return offset + height >= scrollTop && offset <= windowBottom;
    }).addClass('active');
});


//backtop
jQuery(document).ready(function ($) {
    $('#backtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

setTimeout(function () {
    jQuery(document).ready(function(){setInterval(function(){
        if (jQuery('.working-show .working-show__item.active').next().length)jQuery('.working-show .working-show__item.active').addClass('active').next().addClass('active');
        if($('.working-show .working-show__item.active').length === 8){
            setTimeout(function () {
                $(".working-show .working-show__item").removeClass("active");
                $(".working-show").removeClass("line");
            },2000);
        }
        else {
            jQuery('.working-show .working-show__item:first-child').addClass('active');
            $(".working-show").addClass("line");
        }},
        1000)});
},3000);

function load() {
    document.body.classList.add('is-hello');
    setTimeout(function () {
        $(".is-hello").addClass("active");
    },300);
}
window.onload = load;


jQuery(function ($) {
    $('.delivery-list .delivery-list__item ').matchHeight();
    $('.delivery-list .delivery-list__item .delivery-list__box .delivery-list__ct ul').matchHeight();
});