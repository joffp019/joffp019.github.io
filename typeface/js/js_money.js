console.log("hello");

// $("images/money/russia.jpg").click(function() {
//     $("images/money/russia.jpg").html("images/money/russiaglitch.jpg");
// });

// $(".square").html("<img src ='images/money/russia" + glitch + ".jpg'>");





// $(".image").mouseenter(function() {
//     $(this).attr("src",$(this).data("glitch"));
// });

// $(".image").mouseleave(function() {
//     $(this).attr("src",$(this).data("glitch"));
// });



var crisis = ["images/money/1929.jpg", "images/money/1929glitch.jpg", "images/money/1929glitch1.jpg"];
var jobs = ["images/money/jobs.jpg", "images/money/jobsglitch.jpg", "images/money/jobsglitch1.jpg"];
var market = ["images/money/market.jpg", "images/money/marketglitch.jpg", "images/money/marketglitch1.jpg"];
var morumbi = ["images/money/morumbi.jpg", "images/money/morumbiglitch.jpg","images/money/morumbiglitch1.jpg"];

$(window).resize(function() {
    $(".1929").each(function() {
        var randomcrisis = crisis[Math.floor(Math.random()*3)];
        console.log(randomcrisis);

        $(this).attr("src",randomcrisis);

    });

});


$(window).resize(function() {
    $(".market").each(function() {
        var randommarket = market[Math.floor(Math.random()*3)];
        console.log(randommarket);

        $(this).attr("src",randommarket);

    });

});

$(window).resize(function() {
    $(".jobs").each(function() {
        var randomjobs = jobs[Math.floor(Math.random()*3)];
        console.log(randomjobs);

        $(this).attr("src",randomjobs);

    });

});

$(window).resize(function() {
    $(".morumbi").each(function() {
        var randommorumbi = morumbi[Math.floor(Math.random()*3)];
        console.log(randommorumbi);

        $(this).attr("src",randommorumbi);

    });

});


var colormedium = ["white", "white", "#E7FCDE"];
var colorlittle = ["white", "#C6F9AF", "#E7FCDE"];

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

$(".icon").click(function() {
    $(".rectangle").css("display", "none");
});

var clicked = false;

$(".about").click(function() {
    if (clicked == false) {
        $(".explanation").css("display", "block"); 
        clicked = true;
    } else {
        $(".explanation").css("display", "none");
        clicked = false;
    }
   
});

//Footer hover states//

$(".money").mouseenter(function() {
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/money/currency/pound.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/money/currency/pound.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/money/currency/pound.png'/>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/money/currency/pound.png'/>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/currency/pound.png'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});