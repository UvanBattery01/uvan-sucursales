// UVAN BATTERY v3
console.log('UVAN BATTERY v3');

// ================= POPUPS =================

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
"🎉 ¡Otra venta completada!",
"🚧 Próximamente: Nueva sucursal UVAN BATTERY en Ermita"
];

const popup=document.getElementById("popup");
const mensaje=document.getElementById("mensaje");
let ultimoIndice=-1;

function mostrarPopup(){
 let i;
 do{ i=Math.floor(Math.random()*mensajes.length); }while(i===ultimoIndice);
 ultimoIndice=i;
 mensaje.textContent=mensajes[i];
 popup.classList.add("show");
 setTimeout(()=>popup.classList.remove("show"),4000);
}

setTimeout(mostrarPopup,3000);
setInterval(mostrarPopup,10000);

// ============== HORARIOS ==============

const horarios={
semana:{abre:{h:8,m:0},cierra:{h:19,m:0}},
sabado:{abre:{h:9,m:0},cierra:{h:18,m:0}},
domingo:{abre:{h:9,m:0},cierra:{h:15,m:0}}
};

const sucursales=[
"estado-texcoco",
"estado-chicoloapan",
"estado-santarosa",
"estado-neza",
"estado-losreyes",
"estado-ixtapaluca",
"estado-chimalhuacan"
];

function minutosHasta(a,b){
 return Math.round((b-a)/60000);
}

function hm(min){
 const h=Math.floor(min/60);
 const m=min%60;
 if(h>0 && m>0) return `${h} h ${m} min`;
 if(h>0) return `${h} h`;
 return `${m} min`;
}

function formato(h,m){
 const d=new Date();
 d.setHours(h,m,0,0);
 return d.toLocaleTimeString("es-MX",{hour:"numeric",minute:"2-digit"});
}

function estadoHTML(tipo,titulo,detalle){
 return `
 <div class="estado-box ${tipo}">
   <span class="estado-dot"></span>
   <div>
     <strong>${titulo}</strong><br>
     <small>${detalle}</small>
   </div>
 </div>`;
}

function aplicar(id,html){
 const e=document.getElementById(id);
 if(e)e.innerHTML=html;
}

function actualizarEstados(){

 const ahora=new Date();
 const dia=ahora.getDay();

 let h;

 if(dia>=1 && dia<=5) h=horarios.semana;
 else if(dia===6) h=horarios.sabado;
 else h=horarios.domingo;

 const abre=new Date(ahora);
 abre.setHours(h.abre.h,h.abre.m,0,0);

 const cierra=new Date(ahora);
 cierra.setHours(h.cierra.h,h.cierra.m,0,0);

 let html;

 if(ahora>=abre && ahora<cierra){

   const faltan=minutosHasta(ahora,cierra);

   if(faltan<=60){
      html=estadoHTML("closing-soon","🟠 Cierra pronto",`Cierran en ${hm(faltan)}`);
   }else{
      html=estadoHTML("open","🟢 Abierto ahora",`Cierran a las ${formato(h.cierra.h,h.cierra.m)}`);
   }

 }else{

   let proxima=new Date(abre);

   if(ahora>=cierra){
      proxima.setDate(proxima.getDate()+1);

      const nd=proxima.getDay();

      if(nd>=1&&nd<=5){
        proxima.setHours(horarios.semana.abre.h,0,0,0);
      }else if(nd===6){
        proxima.setHours(horarios.sabado.abre.h,0,0,0);
      }else{
        proxima.setHours(horarios.domingo.abre.h,0,0,0);
      }
   }

   const faltan=minutosHasta(ahora,proxima);

   if(faltan<=60){
      html=estadoHTML("opening-soon","🟠 Abre pronto",`Abren en ${hm(faltan)}`);
   }else{
      html=estadoHTML("closed","🔴 Cerrado",`Abren ${proxima.toLocaleTimeString("es-MX",{hour:"numeric",minute:"2-digit"})}`);
   }
 }

 sucursales.forEach(id=>aplicar(id,html));

 if(dia===0){
   aplicar("estado-central",estadoHTML("closed","🔴 Cerrado","Los domingos no abre"));
 }else{
   aplicar("estado-central",html);
 }

}

actualizarEstados();
setInterval(actualizarEstados,60000);
