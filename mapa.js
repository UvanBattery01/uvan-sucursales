const map = L.map('map').setView([19.4326, -99.1332], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

L.marker([19.4326, -99.1332]).addTo(map)
    .bindPopup('¡Hola UVAN BATTERY!')
    .openPopup();