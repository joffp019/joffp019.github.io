var link = ["phrases/color/about.png", 
            "phrases/color/time.png",
            "phrases/color/space.png", 
            "phrases/color/love.png", 
            "phrases/color/money.png"];
            
var links = ["<a href='type_time.html'> <img  src='phrases/color/time.png'/> </a>",
            "<a href='type_space.html'> <img  src='phrases/color/space.png'/> </a>",
            "<a href='type_love.html'> <img  src='phrases/color/love.png'/> </a>",
            "<a href='type_money.html'> <img  src='phrases/color/money.png'/> </a>",
            "<a href='homepage.html'> <img  src='phrases/color/about.png'/> </a>"] ;

$(window).resize(function() {
    $(".image").each(function() {
        var randomLink = link[Math.floor(Math.random()*5)];
        console.log(randomLink);

        $(this).attr("src", randomLink);

    });

});

$(".icon").click(function() {
    $(".rectangle").remove();
});
