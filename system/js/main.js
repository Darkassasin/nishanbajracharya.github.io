$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > ($("#main").position().top-40)) {
            $("header").addClass("show");
            $("header ul li").addClass("show");
        } else {
            $("header").removeClass("show");
            $("header ul li").removeClass("show");
        }
        if ($(window).scrollTop() > ($("#works").position().top-40)) {
            $("header").addClass("show2");
            $("header ul li").addClass("show2");
        } else {
            $("header").removeClass("show2");
            $("header ul li").removeClass("show2");
        }
        if ($(window).scrollTop() > ($("#contact").position().top-40)) {
            $("header").addClass("show3");
            $("header ul li").addClass("show3");
        } else {
            $("header").removeClass("show3");
            $("header ul li").removeClass("show3");
        }
        if ($(window).scrollTop() > $(window).height() / 4) {
            $("#pre-main p").addClass("show");
        }
        $("#bg").css("top",(-$(window).scrollTop()/8)+"px");
    })
    $(".principle").appear(function() {
        $(this).addClass("show");
    },{accY: -300})

    $("#skills .more").click(function() {
        $(".more-skills").fadeIn();
    })
    $("#skills .more-skills").click(function() {
        $(".more-skills").fadeOut();
    })

    $('a[href*=#]').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 20
        }, 500);
        return false;
    });
})