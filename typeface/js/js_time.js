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
var calendar = ["images/time/calendar.jpg", "images/time/calendarglitch.jpg"];
var work = ["images/time/work.jpg", "images/time/workglitch.jpg","images/time/eye.jpg"];
var insomnia = ["images/time/insomnia.jpg", "images/time/insomniaglitch.jpg", "images/time/insomniaglitch2.jpg","images/time/eye.jpg","images/time/yellow.jpg" ];


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

$(window).resize(function() {
    $(".calendar").each(function() {
        var randomCalendar = calendar[Math.floor(Math.random()*2)];
        console.log(randomCalendar);

        $(this).attr("src",randomCalendar);

    });

});


var colormedium = ["white", "white", "#FFF3D9"];
var colorlittle = ["white", "#FFF3D9", "#FFE2A9"];

$(window).resize(function() {
    $(".medium").each(function() {
        var randomColormedium = colormedium[Math.floor(Math.random()*3)];
        console.log(randomColormedium);

        $(this).css("background-color", randomColormedium);

    });

});

$(window).resize(function() {
    $(".little").each(function() {
        var randomColorlittle = colorlittle[Math.floor(Math.random()*3)];
        console.log(randomColorlittle);

        $(this).css("background-color", randomColorlittle);

    });

});

$(window).resize(function() {
    $(".work").each(function() {
        var randomWork = work[Math.floor(Math.random()*3)];
        console.log(randomWork);

        $(this).attr("src",randomWork);

    });

});

$(window).resize(function() {
    $(".insomnia").each(function() {
        var randomInsomnia = insomnia[Math.floor(Math.random()*5)];
        console.log(randomInsomnia);

        $(this).attr("src",randomInsomnia);

    });

});



$(".icon").click(function() {
    $(".rectangle").remove();
});

//Footer hover states//

$(".money").mouseenter(function() {
    
    // $(".time").html("src","phrases/glitches/timeglitch.png");
    // $(".about").html("src","phrases/glitches/aboutglitch.png");
    // $(".space").html("src","phrases/glitches/spaceglitch.png");
    // $(".love").html("src","phrases/glitches/loveglitch.png");
    
});

$(".money").mouseleave(function() {

    $(".money").html("<img class='image' src='phrases/money.png'>");
});

$(".time").mouseenter(function() {

    $(".time").html("<img class='image' src='phrases/glitches/timeglitch.png'>");
});

$(".time").mouseleave(function() {

    $(".time").html("<img class='image' src='phrases/time.png'>");
});

$(".about").mouseenter(function() {

    $(".about").attr("src",$(this).data("glitch"));
});

$(".about").mouseleave(function() {

    $(this).attr("src",$(this).data("glitch"));
});

$(".space").mouseenter(function() {

    $(".space").html("<img class='image' src='phrases/glitches/spaceglitch.png'>");
});

$(".space").mouseleave(function() {

    $(".space").html("<img class='image' src='phrases/space.png'>");
});

$(".love").mouseenter(function() {

    $(".love").html("<img class='image' src='phrases/glitches/loveglitch.png'>");
});

$(".love").mouseleave(function() {

    $(".love").html("<img class='image' src='phrases/love.png'>");
});