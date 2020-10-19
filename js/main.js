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

    $( "form" ).submit(function( event ) {
        event.preventDefault();
        var answer = answers[Math.floor(answers.length * Math.random())];
        console.log(answer);
        $('.answer').text(answer);
      });
});
