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
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_money.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/yellow.jpg'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});