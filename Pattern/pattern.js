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

var clicked = false;

$(window).keypress(function(event){
    console.log(event);
    if(event.keyCode == 32) {
        if (clicked == true) {
            clicked = false;
        } else {
        clicked = true;
        }
    }
});


$(".first").mousemove(function() {
    $(this).each(function() {
        if(clicked == false) {
            var firstPattern = Math.floor(Math.random() * 12) + 1;  
            console.log(firstPattern);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + firstPattern + ".png'>");
        } else {
            var firstPattern2 = Math.floor(Math.random() * 5) + 29;  
            console.log(firstPattern2);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + firstPattern2 + ".png'>");
        }
    });

});

$(".second").mousemove(function() {
    $(this).each(function() {
        if(clicked == false) {
            var secondPattern = Math.floor(Math.random() * 4) + 13;  
            console.log(secondPattern);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + secondPattern + ".png'>");
        } else {
            var secondPattern2 = Math.floor(Math.random() * 5) + 34;  
            console.log(secondPattern2);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + secondPattern2 + ".png'>");
        }
        

    });

});

$(".third").mousemove(function() {
    $(this).each(function() {
        if(clicked == false) {
            var thirdPattern = Math.floor(Math.random() * 4) + 17;
            console.log(thirdPattern);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + thirdPattern + ".png'>");
        } else {
            var thirdPattern2 = Math.floor(Math.random() * 4) + 39;
            console.log(thirdPattern2);
            $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + thirdPattern2 + ".png'>");
        }

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

