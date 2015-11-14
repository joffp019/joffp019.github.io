for (var increment = 0; increment < 64; increment++) {
  $("body").append('<div class="square first"> </div>');
}

for (var increment = 0; increment < 64; increment++) {
  $("body").append('<div class="square second"> </div>');
}

for (var increment = 0; increment < 64; increment++) {
  $("body").append('<div class="square third"> </div>');
}

for (var increment = 0; increment < 64; increment++) {
  $("body").append('<div class="square first"> </div>');
}

// $(".square").mousemove(function() {
//     $(".square").each(function() {
//         var number = Math.floor(Math.random()*24);
//         console.log(number);

//         $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + number + ".png'>");

//     });

// });

$(".first").mousemove(function() {
// $(this).mousemove(function() {
    $(this).each(function() {
        var firstPattern = Math.floor(Math.random() * 12) + 1;  

        console.log(firstPattern);

        $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + firstPattern + ".png'>");

    });

});

$(".second").mousemove(function() {
    $(this).each(function() {
        var secondPattern = Math.floor(Math.random() * 4) + 13;  
        console.log(secondPattern);

        $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + secondPattern + ".png'>");

    });

});

$(".third").mousemove(function() {
    $(this).each(function() {
        var thirdPattern = Math.floor(Math.random() * 4) + 17;
        console.log(thirdPattern);

        $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + thirdPattern + ".png'>");

    });

});

$(window).click(function() {
    $(".plane").each(function() {
        var topPosition = Math.floor(Math.random()*($(window).height()-200)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-200)) + "px";
        $(this).css("top",topPosition).css("left",leftPosition);
    });
});

$(window).click(function() {
    $(".plane").each(function() {
        var newsize = (Math.random()*20) + 3 + "%";
        $(this).css("height", newsize).css("width", newsize);
    });
});

$(".square").mouseleave(function() {
    $(".rect").each(function() {
        var ipe = Math.floor((Math.random()*3 + 1));  

        console.log(ipe);

        $(this).html("<img class = 'ipe' src='Brasilia/ipe" + ipe + ".jpg'>");

    });

});

