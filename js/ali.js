$(".playBtn").on('click', function () {
    var fa = $(this).find(".fa")

    if ($(fa).hasClass("fa-play")) {
        $(fa).fadeOut(150, function () {
            $(this).removeClass("fa-play").addClass("fa-pause").fadeIn(150)
        });
    } else if ($(fa).hasClass("fa-pause")) {
        $(fa).fadeOut(150, function () {
            $(this).removeClass("fa-pause").addClass("fa-play").fadeIn(150)
        });
    }

});

$(".heart").on('click', function () {
    $(this).toggleClass("hearted")
});

$(".hamburger").on('click', function () {
    $(".right").removeClass("closed").addClass("closed")
    $(".left").removeClass("open").addClass("open")
});

$(".closeLeft").on('click', function () {
    $(".right").removeClass("closed")
    $(".left").removeClass("open")
});

$(".dropDownOpener").on('click', function () {
    var dropSelect = $(this).data("dropdown");

    $(this).toggleClass("active");
    $(dropSelect).toggleClass("open");

});

$("a").on('click', function (e) {
    var href = $(this).attr("href");

    if (href = "#") {
        e.preventDefault();
    }

});