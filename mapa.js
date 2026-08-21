// ===============================
// UVAN BATTERY - MAPA PREMIUM
// ===============================

document.addEventListener("DOMContentLoaded", () => {

const map = L.map("map").setView([19.4115, -98.92], 11);

// ===============================
// MAPA OPENSTREETMAP
// ===============================

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

// ===============================
// ICONOS PERSONALIZADOS
// ===============================

const iconoVerde = L.icon({
    iconUrl: "pin-verde.png",
    iconSize: [42, 56],
    iconAnchor: [21, 56],
    popupAnchor: [0, -45]
});

const iconoNaranja = L.icon({
    iconUrl: "pin-naranja.png",
    iconSize: [42, 56],
    iconAnchor: [21, 56],
    popupAnchor: [0, -45]
});

const iconoRojo = L.icon({
    iconUrl: "pin-rojo.png",
    iconSize: [42, 56],
    iconAnchor: [21, 56],
    popupAnchor: [0, -45]
});

// ===============================
// SUCURSALES
// ===============================

const sucursales = [
{
nombre:"Texcoco",
lat:19.5029687,
lng:-98.8833891,
url:"https://maps.app.goo.gl/4W1RzfpkU6i9hMK9A?g_st=ac",

horario:{
    lunesViernes:{
        abre:"08:00",
        cierra:"19:00"
    },
    sabado:{
        abre:"09:00",
        cierra:"18:00"
    },
    domingo:{
        abre:"09:00",
        cierra:"15:00"
    }
}
},
{
nombre:"Chicoloapan",
lat:19.4115743,
lng:-98.9212438,
url:"https://maps.app.goo.gl/QEeo3t36j5KMwzyu8?g_st=ac"
},
{
nombre:"Central de Abastos",
lat:19.4181553,
lng:-98.9164745,
url:"https://maps.app.goo.gl/Et2z9b3M82bMTGMa6?g_st=ac"
},
{
nombre:"Santa Rosa Outlet",
lat:19.4087084,
lng:-98.9003021,
url:"https://maps.app.goo.gl/74hsA9DufqnR7Pat6?g_st=ac"
},
{
nombre:"Nezahualcóyotl",
lat:19.3771615,
lng:-98.9811315,
url:"https://maps.app.goo.gl/dQoh16cAvsxBdRTa6?g_st=ac"
},
{
nombre:"Los Reyes",
lat:19.3549919,
lng:-98.9783215,
url:"https://maps.app.goo.gl/qCxVFjx7jUmzxoyT9?g_st=ac"
},
{
nombre:"Ixtapaluca",
lat:19.3111313,
lng:-98.9066519,
url:"https://maps.app.goo.gl/yoqcMZ3RxHW75azX9?g_st=ac"
},
{
nombre:"Chimalhuacán",
lat:19.4289100,
lng:-98.9622494,
url:"https://maps.app.goo.gl/f3D7Zm8CJuu56M6t5?g_st=ac"
},
{
nombre:"Ermita",
lat:19.3506626,
lng:-99.0176752,
url:"https://maps.app.goo.gl/ZbhjniLhFK2E5akT6"
}
{
nombre:"Zaragoza",
lat:19.3822630,
lng:-99.0299500,
url:"https://maps.app.goo.gl/9uiX5Advr6fyXXDV9"
},
];

// ===============================
// FUNCIÓN PARA OBTENER EL COLOR
// ===============================

function obtenerIcono() {

    const ahora = new Date();
    const dia = ahora.getDay();
    const minutos = ahora.getHours() * 60 + ahora.getMinutes();

    let abre;
    let cierra;

    if (dia >= 1 && dia <= 5) {
        // Lunes a viernes
        abre = 8 * 60;
        cierra = 19 * 60;
    } else if (dia === 6) {
        // Sábado
        abre = 9 * 60;
        cierra = 18 * 60;
    } else {
        // Domingo
        abre = 9 * 60;
        cierra = 15 * 60;
    }

    if (minutos < abre || minutos >= cierra) {
        return iconoRojo;
    }

    if ((cierra - minutos) <= 60) {
        return iconoNaranja;
    }

    return iconoVerde;
}

// ===============================
// MARCADORES
// ===============================

sucursales.forEach(s => {

    const marker = L.marker([s.lat, s.lng], {
        icon: obtenerIcono()
    }).addTo(map);

    marker.bindPopup(`
        <div style="text-align:center;min-width:180px;">
            <h3 style="margin:5px 0;color:#111;">🔋 UVAN BATTERY</h3>

            <strong>${s.nombre}</strong>

            <br><br>

            <a href="${s.url}" target="_blank"
            style="
                background:#0a7cff;
                color:white;
                padding:8px 14px;
                border-radius:8px;
                text-decoration:none;
                display:inline-block;
            ">
                🚗 Cómo llegar
            </a>
        </div>
    `);

});

});