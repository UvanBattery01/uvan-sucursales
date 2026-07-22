// ===============================
// UVAN BATTERY - MAPA v1
// ===============================

let map;

const sucursales = [
{
    nombre: "Texcoco",
    lat: 19.5115,
    lng: -98.8823,
    maps: "https://maps.app.goo.gl/4W1RzfpkU6i9hMK9A?g_st=ac"
},
{
    nombre: "Chicoloapan",
    lat: 19.4166,
    lng: -98.9028,
    maps: "https://maps.app.goo.gl/QEeo3t36j5KMwzyu8?g_st=ac"
},
{
    nombre: "Central de Abastos",
    lat: 19.4110,
    lng: -98.8990,
    maps: "https://maps.app.goo.gl/Et2z9b3M82bMTGMa6?g_st=ac"
},
{
    nombre: "Santa Rosa Outlet",
    lat: 19.4300,
    lng: -98.9300,
    maps: "https://maps.app.goo.gl/74hsA9DufqnR7Pat6?g_st=ac"
},
{
    nombre: "Nezahualcóyotl",
    lat: 19.4007,
    lng: -99.0148,
    maps: "https://maps.app.goo.gl/dQoh16cAvsxBdRTa6?g_st=ac"
},
{
    nombre: "Los Reyes",
    lat: 19.3635,
    lng: -98.9786,
    maps: "https://maps.app.goo.gl/qCxVFjx7jUmzxoyT9?g_st=ac"
},
{
    nombre: "Ixtapaluca",
    lat: 19.3181,
    lng: -98.8827,
    maps: "https://maps.app.goo.gl/yoqcMZ3RxHW75azX9?g_st=ac"
},
{
    nombre: "Chimalhuacán",
    lat: 19.4218,
    lng: -98.9506,
    maps: "https://maps.app.goo.gl/f3D7Zm8CJuu56M6t5?g_st=ac"
},
{
    nombre: "Ermita",
    lat: 19.3560,
    lng: -99.0900,
    maps: "https://maps.app.goo.gl/ZbhjniLhFK2E5akT6"
}
];

function initMap(){

    map = new google.maps.Map(document.getElementById("map"),{

        zoom:10,

        center:{
            lat:19.41,
            lng:-98.94
        },

        mapTypeControl:false,
        streetViewControl:false,
        fullscreenControl:true

    });

    sucursales.forEach(s=>{

        const marker = new google.maps.Marker({

            position:{
                lat:s.lat,
                lng:s.lng
            },

            map,

            title:s.nombre,

            animation:google.maps.Animation.DROP

        });

        const info = new google.maps.InfoWindow({

            content:`

            <div style="padding:10px">

            <h3 style="margin:0">
            🔋 UVAN BATTERY
            </h3>

            <strong>${s.nombre}</strong>

            <br><br>

            <a href="${s.maps}"
            target="_blank">

            🚗 Cómo llegar

            </a>

            </div>

            `

        });

        marker.addListener("click",()=>{

            info.open(map,marker);

        });

    });

}