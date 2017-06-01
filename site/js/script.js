$(document).ready(function () {
    $('.parallax').parallax();
});

$(document).ready(function () {
    $(window).bind('scroll', function () {
        var headerHeight = $(window).height() - 29;
        var headerHeight = 200;
        var headerHeight = $('.parallax-container').height();
        // console.log(headerHeight)
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

window.onload = random_wallpaper();

function random_wallpaper() {
    var random_number = Math.random();
    console.log(random_number)
    if (random_number < 0.33) {
        console.log("Litet");
    } else if (0.33 < random_number && random_number < 0.66) {
        console.log("mellan");
    } else {
        console.log("största!!");
    }

}

// Skapa egen payment plan
function select(clicked_id) {
    var current = document.querySelector("#" + clicked_id.toString());
    i_payment = 1;

    if (clicked_id.includes("width")) {
        while (i_payment <= 3) {
            console.log(i_payment.toString());
            table_highlighter("width_", i_payment);
            i_payment += 1;
        }
    } else if (clicked_id.includes("height")) {
        while (i_payment <= 3) {
            console.log(i_payment.toString());
            table_highlighter("height_", i_payment);
            i_payment += 1;
        }
    } else if (clicked_id.includes("hz")) {
        while (i_payment <= 3) {
            table_highlighter("hz_", i_payment);
            i_payment += 1;
        }
    } else if (clicked_id.includes("oled")) {
        while (i_payment <= 3) {
            table_highlighter("oled_", i_payment);
            i_payment += 1;
        }
    } else if (clicked_id.includes("response")) {
        while (i_payment <= 3) {
            table_highlighter("response_", i_payment);
            i_payment += 1;
        }
    }
    current.classList.add("green_background");
}

function table_highlighter(unit, i_payment) {
    var current_remove = document.querySelector("#" + unit + i_payment.toString());
    current_remove.classList.remove("green_background");
}

// window.onload = name();

// Minska start skärmen på huvud sidan
$(document).ready(function () {
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 2 && $(window).width() >= 1020) {
            element = document.querySelector(".hero_text_container");
            element.classList.add("smaller_height");
        }
        if ($(window).scrollTop() == 0) {
            element = document.querySelector(".hero_text_container");
            element.classList.remove("smaller_height");
        }
    });
});

download_i = 0

async function downloader() {
    while (download_i < 1000) {
        await sleep(1);
        var div = document.createElement('div');
        div.setAttribute('class', 'pixel');
        document.getElementById("pixel_container").appendChild(div);
        download_i += 1;

        // var para = document.createElement("P");
        // var t = document.createTextNode("This is a paragraph.");
        // para.appendChild(t);
        // document.getElementById("myDIV").appendChild(para);
    }

    await sleep(1000)
    blue_screen()

}

function download_page() {
    element = document.querySelector(".download_container");
    element.classList.toggle("display_center_flex");
}

async function blue_screen() {
    element = document.querySelector(".blue_screen_of_death");
    element.classList.add("display_center_flex");
    await sleep(7666);
    location.reload();
}

// 
function hide_me(clicked_id) {
    var element = document.querySelector("#" + clicked_id.toString());
    element.classList.add("delete");
}

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