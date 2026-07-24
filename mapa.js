document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementById("map");

  if (!mapa) {
    alert("No existe el div #map");
    return;
  }

  mapa.style.background = "red";

  const map = L.map("map").setView([19.4115, -98.92], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(map);
});