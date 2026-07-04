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

let ultimoIndice = -1;

function mostrarPopup() {
    let indice;

    do {
        indice = Math.floor(Math.random() * mensajes.length);
    } while (indice === ultimoIndice);

    ultimoIndice = indice;
    mensaje.textContent = mensajes[indice];

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 4000);
}

setTimeout(mostrarPopup, 3000);
setInterval(mostrarPopup, 10000);


// ===== ESTADO DE SUCURSALES =====

function ponerEstado(id, abierto, texto) {
    const e = document.getElementById(id);
    if (!e) return;

    e.innerHTML = texto;
    e.className = abierto ? "estado abierto" : "estado cerrado";
}

function actualizarEstados() {

    const ahora = new Date();
    const dia = ahora.getDay();
    const hora = ahora.getHours();

    let abierto = false;
    let mensaje = "";

    if (dia >= 1 && dia <= 5) {

        abierto = hora >= 8 && hora < 19;
        mensaje = abierto
            ? "🟢 Abierto, cierra a las 7:00 PM"
            : "🔴 Cerrado · Abre a las 8:00 AM";

    } else if (dia === 6) {

        abierto = hora >= 9 && hora < 18;
        mensaje = abierto
            ? "🟢 Abierto, cierra a las 6:00 PM"
            : "🔴 Cerrado · Abre a las 9:00 AM";

    } else {

        abierto = hora >= 9 && hora < 15;
        mensaje = abierto
            ? "🟢 Abierto, cierra a las 3:00 PM"
            : "🔴 Cerrado";

    }

    ponerEstado("estado-texcoco", abierto, mensaje);
    ponerEstado("estado-chicoloapan", abierto, mensaje);
    ponerEstado("estado-santarosa", abierto, mensaje);
    ponerEstado("estado-neza", abierto, mensaje);
    ponerEstado("estado-losreyes", abierto, mensaje);
    ponerEstado("estado-ixtapaluca", abierto, mensaje);
    ponerEstado("estado-chimalhuacan", abierto, mensaje);

    // Central de Abastos
    if (dia === 0) {
        ponerEstado("estado-central", false, "🔴 Cerrado hoy");
    } else {
        ponerEstado("estado-central", abierto, mensaje);
    }

}

actualizarEstados();
setInterval(actualizarEstados, 60000);