import { exportar } from "./Exportaciones/exportacion.js";

$(document).ready(exportar);

//****************************************************************************************** */

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
//Ejecutamos la condición si en el dispositivo está activado el geolocalizador.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess, error, options);

} else {
    alert('Los servicios de geolocalización no están disponibles');
}


function sucess(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('mimapa', {
        center: [latitude, longitude],
        zoom: 10
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //añadimos el primer marcador:

    //podemos personalizar el tipo de marcador.
    let final = L.icon({
        iconUrl: '../assets/images/meta_mapa1.png',
        iconSize: [60, 55],
        iconAnchor: [20, 45]
    });
    //insertamos en let marker {icon: marcador}

    //let marker = L.marker([39.8659848445602, -4.02622594524905], { icon: final }).bindTooltip("<img src='../assets/images/Local.png' alt='Imagen ArtLine.com'width='60px' height='60px'><br><b>ArtLine.com</b><br><a href='../assets/images/Local.PNG' target='_black'>Solicita más información</a>").openTooltip().addTo(map);
    let inicio = L.icon({
        iconUrl: '../assets/images/inicio_mapa1.png',
        iconSize: [60, 55],
        iconAnchor: [30, 25]
    });
    let track = L.icon({
        iconUrl: '../assets/images/paso_mapa.png',
        iconSize: [60, 50],
        iconAnchor: [0, 50]
    })
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude, longitude),
            L.latLng(39.8659848445602, -4.02622594524905)
        ],
        language: 'es',

        show: true,
        createMarker: function(i, wp, nWps) {
            switch (i) {
                case 0:
                    return L.marker(wp.latLng, {
                        icon: inicio,
                        draggable: true
                    }).bindPopup("<b>" + "Inicio" + "</b>");
                case nWps - 1:
                    return L.marker(wp.latLng, {
                        icon: final,
                        draggable: false
                    }).bindPopup("<img src='../assets/images/Local.png' alt='Imagen ArtLine.com'width='60px' height='60px'><br><b>ArtLine.com</b><br><a href='../assets/images/Local.PNG' target='_black'>Solicita más información</a>");
                default:
                    return L.marker(wp.latLng, {
                        icon: track,
                        draggable: true
                    }).bindPopup("<b>" + "Waypoint" + "</b>");
            }
        }
    }).addTo(map);

}

function error() {
    let map = L.map('mimapa', {
        center: [39.8659848445602, -4.02622594524905],
        zoom: 18
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    let marker = L.marker([39.8659848445602, -4.02622594524905]).bindPopup("<img src='../assets/images/Local.png' alt='Imagen ArtLine.com'width='60px' height='60px'><br><b>ArtLine.com</b><br><a href='../assets/images/Local.PNG' target='_black'>Solicita más información</a>").openPopup().addTo(map);

}