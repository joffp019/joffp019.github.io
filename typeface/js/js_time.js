console.log("hello");

// $("images/time/work.jpg").click(function() {
//     $("images/time/work.jpg").html("images/time/work.jpg");
// });

// $(".square").html("<img src ='images/time/work" +  + ".jpg'>");





// $(".image").mouseenter(function() {
//     $(this).attr("src",$(this).data(""));
// });

// $(".image").mouseleave(function() {
//     $(this).attr("src",$(this).data(""));
// });





var bigben = ["images/time/bigben.jpg", "images/time/bigbenglitch.jpg", "images/time/bigbenglitch1.jpg"];
var modern = ["images/time/modern.jpg", "images/time/modernglitch.jpg", "images/time/modernglitch1.jpg"];
var copy = ["images/time/copy.jpg", "images/time/copyglitch.jpg", "images/time/copyglitch1.jpg"];
var stonehenge = ["images/time/stonehenge.jpg", "images/time/stonehengeglitch.jpg","images/time/stonehengeglitch1.jpg"];


$(window).resize(function() {
    $(".copy").each(function() {
        var randomcopy = copy[Math.floor(Math.random()*3)];
        console.log(randomcopy);

        $(this).attr("src",randomcopy);

    });

});

$(window).resize(function() {
    $(".bigben").each(function() {
        var randombigben = bigben[Math.floor(Math.random()*3)];
        console.log(randombigben);

        $(this).attr("src",randombigben);

    });

});

$(window).resize(function() {
    $(".modern").each(function() {
        var randommodern = modern[Math.floor(Math.random()*3)];
        console.log(randommodern);

        $(this).attr("src",randommodern);

    });

});

$(window).resize(function() {
    $(".stonehenge").each(function() {
        var randomstonehenge = stonehenge[Math.floor(Math.random()*3)];
        console.log(randomstonehenge);

        $(this).attr("src",randomstonehenge);

    });

});

var colormedium = ["white", "white", "#FFF3D9"];
var colorlittle = ["white", "#FFE2A9", "#FFF3D9"];

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
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/time/gramophone.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/time/gramophone.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/time/gramophone.png'/>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".about").html("<img class = 'image' src='images/time/gramophone.png'/>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/time/gramophone.png'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

