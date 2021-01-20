$(document).ready(function () {
    $(".shop_list li a").on("click", function (e) {
        e.preventDefault();
    })

    $(".area_list li a").on("click", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");

        $(".area_list li a").removeClass("on");
        $(this).addClass("on");

        $(".shop_list li").hide();
        $("."+target).show();
    })

});