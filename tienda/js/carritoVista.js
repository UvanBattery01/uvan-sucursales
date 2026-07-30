const lista=document.getElementById("listaCarrito");

const total=document.getElementById("total");

let carrito=JSON.parse(localStorage.getItem("carrito"))||[];

function guardar(){

localStorage.setItem("carrito",JSON.stringify(carrito));

}

function mostrarCarrito(){

lista.innerHTML="";

let suma=0;

if(carrito.length===0){

lista.innerHTML=`
<div class="carrito-vacio">

<h2>🛒 Tu carrito está vacío</h2>

<p>Agrega una batería para comenzar.</p>

<a href="catalogo.html" class="btn-producto">
Ir al catálogo
</a>

</div>
`;

total.textContent="$0";

return;

}

carrito.forEach((producto,index)=>{

suma+=producto.precio*producto.cantidad;

lista.innerHTML+=`

<div class="item-carrito">

<img src="${producto.imagen}">

<div>

<h2>${producto.marca}</h2>

<h3>${producto.modelo}</h3>

<p>$${producto.precio.toLocaleString("es-MX")}</p>

</div>

<div class="acciones">

<button onclick="menos(${index})">-</button>

<span>${producto.cantidad}</span>

<button onclick="mas(${index})">+</button>

<button onclick="eliminar(${index})">

🗑

</button>

</div>

</div>

`;

});

total.textContent="$"+suma.toLocaleString("es-MX");

}

function mas(i){

carrito[i].cantidad++;

guardar();

mostrarCarrito();

}

function menos(i){

if(carrito[i].cantidad>1){

carrito[i].cantidad--;

guardar();

mostrarCarrito();

}

}

function eliminar(i){

carrito.splice(i,1);

guardar();

mostrarCarrito();

}

mostrarCarrito();