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





var money = ["images/money/money.jpg", "images/money/moneyglitch.jpg"];
var australia = ["images/money/australia.jpg", "images/money/australiaglitch.jpg"];
var brazil = ["images/money/brazil.jpg", "images/money/brazilglitch.jpg"];
var euro = ["images/money/euro.jpg", "images/money/euroglitch.jpg"];
var china = ["images/money/china.jpg", "images/money/chinaglitch.jpg"];
var russia = ["images/money/russia.jpg", "images/money/russiaglitch.jpg","images/money/2008glitch.png"];
var africa = ["images/money/africa.jpg", "images/money/africaglitch.jpg", "images/money/homeless.jpg","images/money/homelessglitch.jpg","images/money/green.jpg" ];


$(window).resize(function() {
    $(".money").each(function() {
        var randommoney = money[Math.floor(Math.random()*2)];
        console.log(randommoney);

        $(this).attr("src",randommoney);

    });

});

$(window).resize(function() {
    $(".australia").each(function() {
        var randomaustralia = australia[Math.floor(Math.random()*2)];
        console.log(randomaustralia);

        $(this).attr("src",randomaustralia);

    });

});

$(window).resize(function() {
    $(".brazil").each(function() {
        var randombrazil = brazil[Math.floor(Math.random()*2)];
        console.log(randombrazil);

        $(this).attr("src",randombrazil);

    });

});

$(window).resize(function() {
    $(".euro").each(function() {
        var randomeuro = euro[Math.floor(Math.random()*2)];
        console.log(randomeuro);

        $(this).attr("src",randomeuro);

    });

});

$(window).resize(function() {
    $(".china").each(function() {
        var randomchina = china[Math.floor(Math.random()*2)];
        console.log(randomchina);

        $(this).attr("src",randomchina);

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

$(window).resize(function() {
    $(".russia").each(function() {
        var randomrussia = russia[Math.floor(Math.random()*3)];
        console.log(randomrussia);

        $(this).attr("src",randomrussia);

    });

});

$(window).resize(function() {
    $(".africa").each(function() {
        var randomafrica = africa[Math.floor(Math.random()*5)];
        console.log(randomafrica);

        $(this).attr("src",randomafrica);

    });

});



$(".icon").click(function() {
    $(".rectangle").remove();
});

//Footer hover states//

$(".money").mouseenter(function() {
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_money.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_money.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_money.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_money.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/money/green.jpg'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});