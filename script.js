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
""🟢 Venta realizada en Ermita"
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
"estado-central",
"estado-santarosa",
"estado-neza",
"estado-losreyes",
"estado-ixtapaluca",
"estado-chimalhuacan",
"estado-ermita"
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

// Detectar automáticamente el modo del sistema

const media = window.matchMedia("(prefers-color-scheme: dark)");

function actualizarTema(){
    if(media.matches){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }
}

actualizarTema();

media.addEventListener("change", actualizarTema);

// ================= SUCURSAL MÁS CERCANA =================

const ubicacionesUVAN = [
{
nombre:"Texcoco",
lat:19.5029683,lng:-98.8834303,
maps:"https://maps.app.goo.gl/9HAYZaAyCkRL5mMTA?g_st=ac"
},
{
nombre:"Chicoloapan",
lat:19.4115212,lng:-98.9212045,
maps:"https://maps.app.goo.gl/ggwnW9UNHGjDFVax8?g_st=ac"
},
{
nombre:"Central de Abastos",
lat:19.4181540,lng:-98.9164916,
maps:"https://maps.app.goo.gl/6KPNaBt4Tt4oi6n9A?g_st=ac"
},
{
nombre:"Santa Rosa",
lat:19.4087388,lng:-98.9003034,
maps:"https://maps.app.goo.gl/GcoLjX25NzuEHpDRA?g_st=ac"
},
{
nombre:"Los Reyes",
lat:19.3550337,lng:-98.9782987,
maps:"https://maps.app.goo.gl/L4ubcM3Jfp35oP3KA"
},
{
nombre:"Chimalhuacán",
lat:19.4289192,lng:-98.9622497,
maps:"https://maps.app.goo.gl/x2eJgJ65VEjt4BFj8"
},
{
nombre:"Nezahualcóyotl",
lat:19.3980,lng:-98.9954,
maps:"https://maps.app.goo.gl/RhqqZvsU55jCkFkJA"
},
{
nombre:"Ixtapaluca",
lat:19.3110377,lng:-98.9066676,
maps:"https://maps.app.goo.gl/rK3GeP3tyu62Vuha8?g_st=ac"
}
{
nombre:"Ermita",
lat:AQUI_LATITUD,
lng:AQUI_LONGITUD,
maps:"https://maps.app.goo.gl/8CguRJpHXBqvJM3b6?g_st=ac"
},
];

function distanciaKm(lat1,lon1,lat2,lon2){
const R=6371;
const dLat=(lat2-lat1)*Math.PI/180;
const dLon=(lon2-lon1)*Math.PI/180;
const a=Math.sin(dLat/2)**2+
Math.cos(lat1*Math.PI/180)*
Math.cos(lat2*Math.PI/180)*
Math.sin(dLon/2)**2;
return R*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)));
}

function buscarSucursalMasCercana(){
const texto=document.getElementById("texto-cercana");
const boton=document.getElementById("buscarSucursal");
if(!texto||!boton)return;

texto.innerHTML="📡 Buscando ubicación...";

if(!navigator.geolocation){
texto.innerHTML="❌ Tu navegador no soporta geolocalización.";
return;
}

navigator.geolocation.getCurrentPosition(pos=>{
const {latitude,longitude}=pos.coords;
let mejor=null;

ubicacionesUVAN.forEach(s=>{
const d=distanciaKm(latitude,longitude,s.lat,s.lng);
if(!mejor||d<mejor.d) mejor={...s,d};
});

texto.innerHTML=
`<strong>🏪 ${mejor.nombre}</strong><br>
📏 ${mejor.d.toFixed(1)} km de ti`;

boton.textContent="🧭 Cómo llegar";
boton.onclick=()=>window.open(mejor.maps,"_blank");

},()=>{
texto.innerHTML="⚠️ No fue posible obtener tu ubicación.";
},{
enableHighAccuracy:true,
timeout:10000
});
}

const btnBuscar=document.getElementById("buscarSucursal");
if(btnBuscar){
btnBuscar.addEventListener("click",buscarSucursalMasCercana);
}

// ================= MENÚ LATERAL =================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function abrirMenu(){
    sidebar.classList.add("open");
    overlay.classList.add("show");
}

function cerrarMenu(){
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

menuBtn.addEventListener("click", abrirMenu);
overlay.addEventListener("click", cerrarMenu);

// Cerrar al pulsar cualquier opción del menú
document.querySelectorAll("#sidebar a").forEach(link=>{
    link.addEventListener("click", cerrarMenu);
});