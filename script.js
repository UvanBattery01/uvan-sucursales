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

function actualizarEstados() {

    const ahora = new Date();
    const dia = ahora.getDay(); // 0=Domingo, 1=Lunes...
    const hora = ahora.getHours();
    const minuto = ahora.getMinutes();
    const horaActual = hora + (minuto / 60);

    const sucursales = [
        { id: "estado-texcoco", domingo: true },
        { id: "estado-chicoloapan", domingo: true },
        { id: "estado-central", domingo: false },
        { id: "estado-santarosa", domingo: true },
        { id: "estado-neza", domingo: true },
        { id: "estado-losreyes", domingo: true },
        { id: "estado-ixtapaluca", domingo: true },
        { id: "estado-chimalhuacan", domingo: true }
    ];

    sucursales.forEach(sucursal => {

        const estado = document.getElementById(sucursal.id);
        if (!estado) return;

        let abierto = false;
        let mensaje = "";

        if (dia >= 1 && dia <= 5) {
            abierto = horaActual >= 8 && horaActual < 19;

            if (abierto) {
                mensaje = "🟢 Abierto ahora<br><small>Cierra hoy a las 7:00 p.m.</small>";
            } else if (horaActual < 8) {
                mensaje = "🔴 Cerrado<br><small>Abre hoy a las 8:00 a.m.</small>";
            } else {
                mensaje = "🔴 Cerrado<br><small>Abre mañana a las 8:00 a.m.</small>";
            }

        } else if (dia === 6) {

            abierto = horaActual >= 9 && horaActual < 18;

            if (abierto) {
                mensaje = "🟢 Abierto ahora<br><small>Cierra hoy a las 6:00 p.m.</small>";
            } else if (horaActual < 9) {
                mensaje = "🔴 Cerrado<br><small>Abre hoy a las 9:00 a.m.</small>";
            } else {
                if (sucursal.domingo) {
                    mensaje = "🔴 Cerrado<br><small>Abre mañana a las 9:00 a.m.</small>";
                } else {
                    mensaje = "🔴 Cerrado<br><small>Abre el lunes a las 8:00 a.m.</small>";
                }
            }

        } else {

            if (!sucursal.domingo) {

                mensaje = "🔴 Cerrado hoy<br><small>Abrimos el lunes a las 8:00 a.m.</small>";
                abierto = false;

            } else {

                abierto = horaActual >= 9 && horaActual < 15;

                if (abierto) {
                    mensaje = "🟢 Abierto ahora<br><small>Cierra hoy a las 3:00 p.m.</small>";
                } else if (horaActual < 9) {
                    mensaje = "🔴 Cerrado<br><small>Abre hoy a las 9:00 a.m.</small>";
                } else {
                    mensaje = "🔴 Cerrado<br><small>Abre mañana a las 8:00 a.m.</small>";
                }

            }

        }

        estado.innerHTML = mensaje;
        estado.className = abierto ? "estado abierto" : "estado cerrado";

    });

}

actualizarEstados();

// Actualiza cada minuto
setInterval(actualizarEstados, 60000);