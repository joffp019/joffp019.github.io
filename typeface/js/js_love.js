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





var hands = ["images/love/hands.jpg", "images/love/handsglitch3.jpg", "images/love/handsglitch4.jpg"];
var party = ["images/love/party.jpg", "images/love/partyglitch3.jpg", "images/love/partyglitch4.jpg"];
var thekiss = ["images/love/thekiss.jpg", "images/love/thekissglitch3.jpg", "images/love/thekissglitch4.jpg"];
var prostitute = ["images/love/prostitute.jpg", "images/love/prostituteglitch3.jpg","images/love/prostituteglitch4.jpg"];


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
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_money.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/selected/selectedlove.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='phrases/space.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/selected/selectedlove.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/selected/selectedlove.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/love/symbols/ring.png'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<img class = 'image' src='phrases/about.png'/>");
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
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/selected/selectedlove.png'/> </a>");
});