$( document ).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });
    let audio;
    function open() {
        envelope.addClass("open").removeClass("close");
        if (audio) {
            audio.currentTime = 0;
        } else {
            audio = new Audio("./music.mp3");
        }
        audio.play().catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }
    function close() {
        envelope.addClass("close").removeClass("open");
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
});