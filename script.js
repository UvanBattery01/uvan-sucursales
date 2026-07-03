console.log('UVAN BATTERY v2');

const mensajes = [
  "🔋 Venta realizada en Texcoco",
  "🚚 Instalación a domicilio completada",
  "⭐ Cliente satisfecho con el servicio",
  "💳 Cliente aprovechó 3 MSI",
  "📍 Servicio realizado en Los Reyes",
  "🔧 Cambio de batería en Ixtapaluca",
  "⚡ Atención rápida en Chicoloapan"
];

const popup = document.getElementById("popup");
const mensaje = document.getElementById("mensaje");

function mostrarPopup() {
  const texto = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensaje.textContent = texto;

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000);
}

setTimeout(mostrarPopup, 3000);
setInterval(mostrarPopup, 10000);