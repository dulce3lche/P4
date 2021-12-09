$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 500, wrap: false});

    // Enable Carousel Indicators
    $(".item0").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item1").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});