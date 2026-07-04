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

function ponerEstado(id, abierto, texto){

    const e = document.getElementById(id);

    if(!e) return;

    e.innerHTML = texto;

    if(abierto){
        e.className = "estado abierto";
    }else{
        e.className = "estado cerrado";
    }

}

function actualizarEstados(){

    const ahora = new Date();

    const dia = ahora.getDay();

    const hora = ahora.getHours();

    // Lunes a Viernes
    if(dia >=1 && dia <=5){

        if(hora >=8 && hora <19){

            ponerEstado("estado-texcoco",true,"🟢 Abierto ahora");
            ponerEstado("estado-chicoloapan",true,"🟢 Abierto ahora");
            ponerEstado("estado-central",true,"🟢 Abierto ahora");
            ponerEstado("estado-santarosa",true,"🟢 Abierto ahora");
            ponerEstado("estado-neza",true,"🟢 Abierto ahora");
            ponerEstado("estado-losreyes",true,"🟢 Abierto ahora");
            ponerEstado("estado-ixtapaluca",true,"🟢 Abierto ahora");
            ponerEstado("estado-chimalhuacan",true,"🟢 Abierto ahora");

        }else{

            ponerEstado("estado-texcoco",false,"🔴 Cerrado");
            ponerEstado("estado-chicoloapan",false,"🔴 Cerrado");
            ponerEstado("estado-central",false,"🔴 Cerrado");
            ponerEstado("estado-santarosa",false,"🔴 Cerrado");
            ponerEstado("estado-neza",false,"🔴 Cerrado");
            ponerEstado("estado-losreyes",false,"🔴 Cerrado");
            ponerEstado("estado-ixtapaluca",false,"🔴 Cerrado");
            ponerEstado("estado-chimalhuacan",false,"🔴 Cerrado");

        }

    }

    // Sábado
    else if(dia==6){

        if(hora>=9 && hora<18){

            ponerEstado("estado-texcoco",true,"🟢 Abierto ahora");
            ponerEstado("estado-chicoloapan",true,"🟢 Abierto ahora");
            ponerEstado("estado-central",true,"🟢 Abierto ahora");
            ponerEstado("estado-santarosa",true,"🟢 Abierto ahora");
            ponerEstado("estado-neza",true,"🟢 Abierto ahora");
            ponerEstado("estado-losreyes",true,"🟢 Abierto ahora");
            ponerEstado("estado-ixtapaluca",true,"🟢 Abierto ahora");
            ponerEstado("estado-chimalhuacan",true,"🟢 Abierto ahora");

        }else{

            ponerEstado("estado-texcoco",false,"🔴 Cerrado");
            ponerEstado("estado-chicoloapan",false,"🔴 Cerrado");
            ponerEstado("estado-central",false,"🔴 Cerrado");
            ponerEstado("estado-santarosa",false,"🔴 Cerrado");
            ponerEstado("estado-neza",false,"🔴 Cerrado");
            ponerEstado("estado-losreyes",false,"🔴 Cerrado");
            ponerEstado("estado-ixtapaluca",false,"🔴 Cerrado");
            ponerEstado("estado-chimalhuacan",false,"🔴 Cerrado");

        }

    }

    // Domingo
    else{

        if(hora>=9 && hora<15){

            ponerEstado("estado-texcoco",true,"🟢 Abierto ahora");
            ponerEstado("estado-chicoloapan",true,"🟢 Abierto ahora");
            ponerEstado("estado-central",false,"🔴 Cerrado hoy");
            ponerEstado("estado-santarosa",true,"🟢 Abierto ahora");
            ponerEstado("estado-neza",true,"🟢 Abierto ahora");
            ponerEstado("estado-losreyes",true,"🟢 Abierto ahora");
            ponerEstado("estado-ixtapaluca",true,"🟢 Abierto ahora");
            ponerEstado("estado-chimalhuacan",true,"🟢 Abierto ahora");

        }else{

            ponerEstado("estado-texcoco",false,"🔴 Cerrado");
            ponerEstado("estado-chicoloapan",false,"🔴 Cerrado");
            ponerEstado("estado-central",false,"🔴 Cerrado hoy");
            ponerEstado("estado-santarosa",false,"🔴 Cerrado");
            ponerEstado("estado-neza",false,"🔴 Cerrado");
            ponerEstado("estado-losreyes",false,"🔴 Cerrado");
            ponerEstado("estado-ixtapaluca",false,"🔴 Cerrado");
            ponerEstado("estado-chimalhuacan",false,"🔴 Cerrado");

        }

    }

}

actualizarEstados();

setInterval(actualizarEstados,60000);

console.log("Estados cargados");
alert("Estados cargados");