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
