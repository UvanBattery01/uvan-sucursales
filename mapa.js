// ===============================
// UVAN BATTERY - MAPA v2 (Leaflet)
// ===============================

const map = L.map("map").setView([19.41, -98.94], 10);

// Mapa gratuito OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

// Icono personalizado
const icono = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35]
});

// Sucursales
const sucursales = [

{
nombre:"Texcoco",
lat:19.5115,
lng:-98.8823,
url:"https://maps.app.goo.gl/4W1RzfpkU6i9hMK9A?g_st=ac"
},

{
nombre:"Chicoloapan",
lat:19.4166,
lng:-98.9028,
url:"https://maps.app.goo.gl/QEeo3t36j5KMwzyu8?g_st=ac"
},

{
nombre:"Central de Abastos",
lat:19.4110,
lng:-98.8990,
url:"https://maps.app.goo.gl/Et2z9b3M82bMTGMa6?g_st=ac"
},

{
nombre:"Santa Rosa Outlet",
lat:19.4300,
lng:-98.9300,
url:"https://maps.app.goo.gl/74hsA9DufqnR7Pat6?g_st=ac"
},

{
nombre:"Nezahualcóyotl",
lat:19.4007,
lng:-99.0148,
url:"https://maps.app.goo.gl/dQoh16cAvsxBdRTa6?g_st=ac"
},

{
nombre:"Los Reyes",
lat:19.3635,
lng:-98.9786,
url:"https://maps.app.goo.gl/qCxVFjx7jUmzxoyT9?g_st=ac"
},

{
nombre:"Ixtapaluca",
lat:19.3181,
lng:-98.8827,
url:"https://maps.app.goo.gl/yoqcMZ3RxHW75azX9?g_st=ac"
},

{
nombre:"Chimalhuacán",
lat:19.4218,
lng:-98.9506,
url:"https://maps.app.goo.gl/f3D7Zm8CJuu56M6t5?g_st=ac"
},

{
nombre:"Ermita",
lat:19.3560,
lng:-99.0900,
url:"https://maps.app.goo.gl/ZbhjniLhFK2E5akT6"
}

];

// Crear marcadores
sucursales.forEach(s => {

    L.marker([s.lat, s.lng], {
        icon: icono
    })
    .addTo(map)
    .bindPopup(`
        <div style="text-align:center;">
            <h3 style="margin:0;">🔋 UVAN BATTERY</h3>
            <b>${s.nombre}</b><br><br>
            <a href="${s.url}" target="_blank">
                🚗 Cómo llegar
            </a>
        </div>
    `);

});