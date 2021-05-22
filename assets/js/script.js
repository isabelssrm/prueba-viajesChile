$(document).ready(function(){
    //smooth scroll
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
    //click para ocultar descripción seccion estacados
    $(".titulo-destacado").click(function(){
        $(".descripcion").toggle();
      });

    //data toggle para tooltip de seccion destacados
    $('[data-toggle="popover"]').popover();
});