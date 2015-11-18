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





var night = ["images/space/nightglitch3.jpg", "images/space/night.jpg", "images/space/nightglitch4.jpg"];
var dubai = ["images/space/dubaiglitch3.jpg", "images/space/dubaiglitch.jpg", "images/space/dubaiglitch4.jpg"];
var hurricane = ["images/space/hurricaneglitch3.jpg", "images/space/hurricaneglitch.jpg", "images/space/hurricaneglitch4.jpg"];
var katrina = ["images/space/katrina.jpg", "images/space/katrinaglitch3.jpg","images/space/katrinaglitch4.jpg"];


$(window).resize(function() {
    $(".hurricane").each(function() {
        var randomhurricane = hurricane[Math.floor(Math.random()*3)];
        console.log(randomhurricane);

        $(this).attr("src",randomhurricane);

    });

});

$(window).resize(function() {
    $(".night").each(function() {
        var randomnight = night[Math.floor(Math.random()*3)];
        console.log(randomnight);

        $(this).attr("src",randomnight);

    });

});

$(window).resize(function() {
    $(".dubai").each(function() {
        var randomdubai = dubai[Math.floor(Math.random()*3)];
        console.log(randomdubai);

        $(this).attr("src",randomdubai);

    });

});

$(window).resize(function() {
    $(".katrina").each(function() {
        var randomkatrina = katrina[Math.floor(Math.random()*3)];
        console.log(randomkatrina);

        $(this).attr("src",randomkatrina);

    });

});



var colormedium = ["white", "white", "#DEFDFF"];
var colorlittle = ["white", "#DEFDFF", "#8FFCFF"];

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
    
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    
});

$(".money").mouseleave(function() {

    $(".time").html("<a href='type_money.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".time").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    
});

$(".time").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".space").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".time").html("<a href='type_space.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    
});

$(".space").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
});

$(".love").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    
});

$(".love").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".about").html("<a href='type_about.html'> <img class = 'image' src='phrases/about.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
});

$(".about").mouseenter(function() {
    
    $(".money").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    $(".space").html("<a href='type_space.html'> <img class = 'image' src='images/space/countries/russia.png'/> </a>");
    
});

$(".about").mouseleave(function() {

    $(".money").html("<a href='type_money.html'> <img class = 'image' src='phrases/money.png'/> </a>");
    $(".love").html("<a href='type_love.html'> <img class = 'image' src='phrases/love.png'/> </a>");
    $(".time").html("<a href='type_time.html'> <img class = 'image' src='phrases/time.png'/> </a>");
});