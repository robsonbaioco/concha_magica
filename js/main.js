$(function() {
    $.ajax({
        url: '',
        type: 'post',
        dataType: 'json',
    })
    .done(function() {
        console.log("success");
    });

    // wow
    new WOW({
        offset: 300
    }).init();
});

var isDragging = false;
var top        = 54;
var right      = 60;
$(".pino")
.mousedown(function() {
    isDragging = false;
})
.mousemove(function() {
    isDragging = true;

    top        = top - 1;
    right      = right - 1;

    $('.pino').css('top', top + 'px');
    $('.pino').css('right', right + 'px');
 })
.mouseup(function() {
    var wasDragging = isDragging;
    isDragging      = false;
    if (!wasDragging) {
        $("#throbble").toggle();
    }
});

console.log(isDragging);