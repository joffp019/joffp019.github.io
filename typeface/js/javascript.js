console.log("hello");

// $("images/time/work.jpg").click(function() {
//     $("images/time/work.jpg").html("images/time/workglitch.jpg");
// });

// $(".square").html("<img src ='images/time/work" + glitch + ".jpg'>");





// $(".image").mouseenter(function() {
//     $(this).attr("src",$(this).data("glitch"));
// });

// $(".image").mouseleave(function() {
//     $(this).attr("src",$(this).data("glitch"));
// });





var clock = ["images/time/clock.png", "images/time/clockglitch.png"];
var hourglass = ["images/time/hourglass.jpg", "images/time/hourglassglitch.jpg"];
var door = ["images/time/door.jpg", "images/time/doorglitch.jpg"];
var work = ["images/time/work.jpg", "images/time/workglitch.jpg"];
var insomnia = ["images/time/insomnia.jpg", "images/time/insomniaglitch.jpg"];

$(window).resize(function() {
    $(".clock").each(function() {
        var randomClock = clock[Math.floor(Math.random()*2)];
        console.log(randomClock);

        $(this).attr("src",randomClock);

    });

});

$(window).resize(function() {
    $(".hourglass").each(function() {
        var randomHourglass = hourglass[Math.floor(Math.random()*2)];
        console.log(randomHourglass);

        $(this).attr("src",randomHourglass);

    });

});

$(window).resize(function() {
    $(".door").each(function() {
        var randomDoor = door[Math.floor(Math.random()*2)];
        console.log(randomDoor);

        $(this).attr("src",randomDoor);

    });

});

var color = ["white", "grey"];

$(window).resize(function() {
    $(".little").each(function() {
        var randomColor = color[Math.floor(Math.random()*2)];
        console.log(randomColor);

        $(this).css("background-color", randomColor);

    });

});

$(window).resize(function() {
    $(".work").each(function() {
        var randomWork = work[Math.floor(Math.random()*2)];
        console.log(randomWork);

        $(this).attr("src",randomWork);

    });

});

$(window).resize(function() {
    $(".insomnia").each(function() {
        var randomInsomnia = insomnia[Math.floor(Math.random()*2)];
        console.log(randomInsomnia);

        $(this).attr("src",randomInsomnia);

    });

});

$(".icon").click(function() {
    $(".rectangle").remove();
});

