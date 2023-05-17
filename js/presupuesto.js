import { exportar } from "./Exportaciones/exportacion.js";

$(document).ready(exportar);

//********************************************************************************************** */


formulario.addEventListener('submit', function validar(e) {


    e.preventDefault();

    let name = /^[a-zA-ZÀ-ÿ\s]{1,15}$/; // Letras y espacios, pueden llevar acentos.

    let apelli = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.

    let correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let tel = /^(6|7|8|9)[0-9]{8}$/; // Otra opción /^\d{7,14}$/; // 9 numeros.

    let ok = 'si';

    let msg = '';

    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    console.log(name.test(nombre.value));

    if (!name.test(nombre)) {
        ok = 'no';
        msg = msg + 'El campo Nombre no está relleno o no es un formato válido. \n';
    }
    if (!apelli.test(apellidos)) {
        ok = 'no';
        msg = msg + 'El campo Apellidos no está relleno o no es un formato válido. \n';
    }
    if (!correo.test(email)) {
        ok = 'no';
        msg = msg + 'El campo Email no está relleno o no es un formato válido. \n';
    }
    if (!tel.test(telefono)) {
        ok = 'no';
        msg = msg + 'El campo Teléfono no está relleno o no es un formato válido. \n';
    }
    if (ok == 'si') {
        document.formulario.sumit();
    } else {
        alert(msg);
    }


});
//Creamos un objeto con todas las option.
let presupuesto = {
    producto: 0,
    reserva: 0,
    duracion: 0,
    opcion1: 0,
    opcion2: 0,
    opcion3: 0,
    opcion4: 0,
}
let calculaPresupuesto = () => {
    //Metemos en cada variable el valor de cada option.
    let prod = parseInt(presupuesto.producto);
    let reser = parseInt(presupuesto.producto) * (parseFloat(presupuesto.reserva) / 100);
    let dura = parseInt(presupuesto.duracion);
    let opc1 = parseInt(presupuesto.opcion1);
    let opc2 = parseInt(presupuesto.opcion2);
    let opc3 = parseInt(presupuesto.opcion3);
    let opc4 = parseInt(presupuesto.opcion4);

    let total = ((prod - reser) * dura + opc1 + opc2 + opc3 + opc4) + '€';

    document.querySelector('#total').value = total;
}

document.querySelector('#producto').addEventListener('change', e => {

    presupuesto.producto = e.target.value;

    calculaPresupuesto();
});
document.querySelector('#reserva').addEventListener('change', e => {

    presupuesto.reserva = e.target.value;

    calculaPresupuesto();
});
document.querySelector('#duracion').addEventListener('change', e => {

    presupuesto.duracion = e.target.value;

    calculaPresupuesto();
});
document.querySelector('#opcion1').addEventListener('change', e => {
    if (e.target.checked) {
        presupuesto.opcion1 = e.target.value;
    } else {
        presupuesto.opcion1 = 0;
    }


    calculaPresupuesto();
});
document.querySelector('#opcion2').addEventListener('change', e => {
    if (e.target.checked) {
        presupuesto.opcion2 = e.target.value;
    } else {
        presupuesto.opcion2 = 0;
    }


    calculaPresupuesto();
});
document.querySelector('#opcion3').addEventListener('change', e => {
    if (e.target.checked) {
        presupuesto.opcion3 = e.target.value;
    } else {
        presupuesto.opcion3 = 0;
    }


    calculaPresupuesto();
});
document.querySelector('#opcion4').addEventListener('change', e => {
    if (e.target.checked) {
        presupuesto.opcion4 = e.target.value;
    } else {
        presupuesto.opcion4 = 0;
    }


    calculaPresupuesto();
});