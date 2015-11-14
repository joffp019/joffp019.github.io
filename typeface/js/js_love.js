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





var hands = ["images/love/hands.jpg", "images/love/handsglitch.jpg", "images/love/handsglitch1.jpg"];
var party = ["images/love/party.jpg", "images/love/partyglitch.jpg", "images/love/partyglitch1.jpg"];
var thekiss = ["images/love/thekiss.jpg", "images/love/thekissglitch.jpg", "images/love/thekissglitch1.jpg"];
var prostitute = ["images/love/prostitute.jpg", "images/love/prostituteglitch.jpg","images/love/prostituteglitch1.jpg"];


$(window).resize(function() {
    $(".thekiss").each(function() {
        var randomthekiss = thekiss[Math.floor(Math.random()*3)];
        console.log(randomthekiss);

        $(this).attr("src",randomthekiss);

    });

});

$(window).resize(function() {
    $(".hands").each(function() {
        var randomhands = hands[Math.floor(Math.random()*3)];
        console.log(randomhands);

        $(this).attr("src",randomhands);

    });

});

$(window).resize(function() {
    $(".party").each(function() {
        var randomparty = party[Math.floor(Math.random()*3)];
        console.log(randomparty);

        $(this).attr("src",randomparty);

    });

});

$(window).resize(function() {
    $(".prostitute").each(function() {
        var randomprostitute = prostitute[Math.floor(Math.random()*3)];
        console.log(randomprostitute);

        $(this).attr("src",randomprostitute);

    });

});



var colormedium = ["white", "white", "#FFE6E6"];
var colorlittle = ["white", "#FFE6E6", "#FF9999"];

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
    $(".rectangle").remove();
});

//Footer hover states//

$(".money").mouseenter(function() {
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_money.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
});