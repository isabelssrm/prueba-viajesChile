$(document).ready(function(){

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let gato = this.hash;

            $('html, body').animate ({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;

            })

        }

    });

    $(".titulo-destacado").click(function(){
        $(".descripcion").toggle();
      });

    $('[data-toggle="popover"]').popover();
});