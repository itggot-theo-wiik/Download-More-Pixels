$(document).ready(function() {
    $('.parallax').parallax();
});

$(document).ready(function() {
    $(window).bind('scroll', function() {
        var headerHeight = $(window).height() - 29;
        var headerHeight = 200;
        var headerHeight = $('.parallax-container').height();
        console.log(headerHeight)
        if ($(window).scrollTop() > headerHeight) {
            $('header').addClass('fixed');
            $('main').addClass('main_padding');
        } else {
            $('header').removeClass('fixed');
            $('main').removeClass('main_padding');
        }
    });
});

function deleter(clicked_id) {
    console.log(clicked_id)
    var current = document.querySelector("#" + "payment_plan_text_" + clicked_id.toString());
    console.log(current)
    current.classList.toggle("delete");
    var current2 = document.querySelector("#" + "payment_plan_" + clicked_id.toString());
    current2.classList.toggle("rip_height");
}

function displayer(clicked_id) {
    console.log(clicked_id)
    var current = document.querySelector("#" + "readmore_" + clicked_id.toString());
    console.log(current)
    current.classList.add("display");
}

function hide(clicked_id) {
    console.log(clicked_id)
    var current = document.querySelector("#" + "readmore_" + clicked_id.toString());
    console.log(current)
    current.classList.remove("display");
}
