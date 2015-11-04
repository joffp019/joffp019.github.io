var cats = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];

var randomCat = cats[Math.floor(Math.random()*4)];

$("body").append("<img src ='img/" + randomCat + "'>");

var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";

$(".button").css("top", topPosition).css("left", leftPosition);

$(window).resize(function () {
       $(".button").each(function() {
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
    
        $(this).css("top", topPosition).css("left", leftPosition);
        
    });
});

for (var increment = 0; increment < 100; increment++) {
    $("body").append('<div class="button"></div>');
}


