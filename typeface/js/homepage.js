var images = ["phrases/color/time.png",
            "phrases/color/space.png", 
            "phrases/color/love.png", 
            "phrases/color/money.png"];
            
var links = ["type_time.html",
            "type_space.html",
            "type_love.html",
            "type_money.html"];

$(window).resize(function() {
    $(".image").each(function() {
        var random_number = Math.floor(Math.random() * images.length);
        
        console.log(random_number);

        $(this).attr("src", images[random_number]);    
        $(this).parent('.link').attr('href', links[random_number]);
        
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
