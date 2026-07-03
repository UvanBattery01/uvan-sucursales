console.log('UVAN BATTERY v2');

const mensajes = [
"🟢 Venta realizada en Texcoco",
"🟢 Venta realizada en Chicoloapan",
"🟢 Venta realizada en Central de Abastos",
"🟢 Venta realizada en Santa Rosa",
"🟢 Venta realizada en Los Reyes",
"🟢 Venta realizada en Ixtapaluca",
"🟢 Venta realizada en Nezahualcóyotl",
"🟢 Venta realizada en Chimalhuacán",
"🚗 Instalación a domicilio completada",
"🚚 Servicio a domicilio en camino",
"🔋 Cambio de batería realizado",
"🔋 Batería instalada correctamente",
"⚡ Cliente volvió a arrancar su vehículo",
"🔧 Diagnóstico de batería realizado",
"🔌 Revisión del sistema de carga completada",
"💳 Cliente aprovechó 3 MSI",
"🎁 Promoción aplicada exitosamente",
"⭐ Cliente calificó el servicio con 5 estrellas",
"😊 Cliente satisfecho con la atención",
"📲 Pedido recibido por WhatsApp",
"📦 Batería entregada al cliente",
"🚘 Servicio express completado",
"🏠 Instalación realizada en domicilio",
"⏱️ Atención completada en menos de 20 minutos",
"🛡️ Garantía entregada al cliente",
"💯 Otro cliente eligió UVAN BATTERY",
"🔥 Cliente aprovechó la promoción del mes",
"📍 Servicio realizado en Texcoco",
"📍 Servicio realizado en Chicoloapan",
"📍 Servicio realizado en Central de Abastos",
"📍 Servicio realizado en Santa Rosa",
"📍 Servicio realizado en Los Reyes",
"📍 Servicio realizado en Ixtapaluca",
"📍 Servicio realizado en Nezahualcóyotl",
"📍 Servicio realizado en Chimalhuacán",
"🚗 Instalación completada en Los Reyes",
"🚗 Instalación completada en Ixtapaluca",
"🚗 Instalación completada en Texcoco",
"💳 Compra finalizada con 3 MSI",
"🎉 ¡Otra venta completada!",
"🚧 Próximamente: Nueva sucursal UVAN BATTERY en Ermita"
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