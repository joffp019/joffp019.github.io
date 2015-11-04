var link = ["phrases/color/about.png", 
            "phrases/color/time.png",
            "phrases/color/space.png", 
            "phrases/color/love.png", 
            "phrases/color/money.png"];

$(window).resize(function() {
    $(".image").each(function() {
        var randomLink = link[Math.floor(Math.random()*5)];
        console.log(randomLink);

        $(this).attr("src",randomLink);

    });

});