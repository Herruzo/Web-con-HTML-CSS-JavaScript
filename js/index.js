import { exportar } from "./Exportaciones/exportacion.js";

$(document).ready(exportar);

//********************************************************************
//***************************** Cargar noticias***********************
//********************************************************************
if (document.querySelector('#noticias')) {
    cargar()
}; //Se ejecuta solo si encuentra la etiqueta noticias.

function cargar() {
    $.ajax({
        type: "GET",
        url: "./assets/json/json.json",

        dataType: "json",
        success: function(response) {
            let i = 0;
            let datos_json = response;
            let cadena = '';
            for (i = 0; i < datos_json.noticia.length; i++) {
                cadena += '<b>Fecha: </b>' + datos_json.noticia[i].date + '<br>';
                cadena += '<b>Título: </b>' + datos_json.noticia[i].title + '<br>';
                cadena += '<b>Descripción: </b>' + datos_json.noticia[i].description + '<br><br>';
            }
            $('#noticias').html(cadena);

        },
        error: function(xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });
};


//**********************************************************
// *********************** Galerias  ***********************
//**********************************************************


//**********************************************************
// *********************** Contacto  ***********************
//**********************************************************



//**********************************************************
// ***********************Presupuesto***********************
//**********************************************************