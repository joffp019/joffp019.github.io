for (var increment = 0; increment < 64; increment++) {
  $("body").append('<div class="square"> </div>');
}

// for (var increment = 0; increment < 4; increment++) {
//   $("body").append('<div class="plane"> </div>');
// }

$(".square").mousemove(function() {
    $(".square").each(function() {
        var number = Math.floor(Math.random()*24);
        console.log(number);

        $(this).html("<img class = 'tile' src='Brasilia/Brasilia-" + number + ".png'>");

    });

});

$(window).click(function() {
    $(".plane").each(function() {
        var topPosition = Math.floor(Math.random()*($(window).height()-75)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-75)) + "px";
        $(this).css("top",topPosition).css("left",leftPosition);
    });
});

