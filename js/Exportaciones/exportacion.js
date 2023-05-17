export function exportar() {

    //Menú de hamburguesa.
    $('#burger').click(function() {

        $('.content_menu').toggleClass('menu_movil');

    });
    //Menú scroll.
    $(window).scroll(function() {

            if ($(this).scrollTop() > 100) {
                $('.barra_menu').addClass('fondo_content');
            } else {
                $('.barra_menu').removeClass('fondo_content');
            }
        })
        // Para que se quede marcado en el menú el indicador de la página en la que nos encontramos.
    window.onload = function() {
        document.getElementById("op1").style.color = '#f00'
    }
};