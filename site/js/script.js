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
            $('.header_container').addClass('fixed');
            $('.header_container').removeClass('absolute');
            $('main').addClass('main_padding');
        } else {
            $('.header_container').removeClass('fixed');
            $('.header_container').addClass('absolute');
            $('main').removeClass('main_padding');
        }
    });
});

window.onload = absolute;

function absolute() {
    element = document.querySelector(".header_container");
    element.classList.add("absolute");
}

function nav() {
    element = document.querySelector(".start_menu_container");
    element.classList.toggle("display");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function shutdown_or_restart() {
    await sleep(750);
    element = document.querySelector(".shutdown_container");
    element.classList.add("display");
    element = document.querySelector(".start_menu_container");
    element.classList.remove("display");
    await sleep(2500);
    location.reload();
}

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
