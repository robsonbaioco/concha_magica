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

// Puxando a corda da concha
dragElement(document.getElementById("pino"));

var soltouCorda = false;

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    //set the element's new position:
    console.log(elmnt.offsetTop);
    if (elmnt.offsetTop >= -8) {
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    } else {
        elmnt.style.top  = -7;
        elmnt.style.left = 219;
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup   = null;
    document.onmousemove = null;
    elmnt.style.top  = 54 + "px";
    elmnt.style.left = 200 + "px";

    soltouCorda = true;

    // Se soltar a corda fazer o script de resposta aqui
    if (soltouCorda) {
       soltouCorda = false; 
    }
  }
}