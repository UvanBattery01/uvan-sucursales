let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("listaCarrito");
const total = document.getElementById("total");
const botonFinalizar = document.getElementById("finalizarCompra");

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {

    lista.innerHTML = "";

    if (carrito.length === 0) {

        lista.innerHTML = `
            <p style="text-align:center;font-size:20px;padding:20px;">
                🛒 Tu carrito está vacío
            </p>
        `;

        total.textContent = "$0";
        return;
    }

    let totalCompra = 0;

    carrito.forEach((producto, index) => {

        const subtotal = producto.precio * producto.cantidad;
        totalCompra += subtotal;

        lista.innerHTML += `

        <div class="producto-carrito">

            <img src="${producto.imagen}" alt="${producto.modelo}" class="img-carrito">

            <div class="info-carrito">

                <h2>${producto.marca} ${producto.modelo}</h2>

                <p class="precio">
                    $${producto.precio.toLocaleString("es-MX")}
                </p>

                <div class="controles">

                    <button onclick="cambiarCantidad(${index},-1)">−</button>

                    <span>${producto.cantidad}</span>

                    <button onclick="cambiarCantidad(${index},1)">+</button>

                </div>

                <p>
                    <strong>Subtotal:</strong>
                    $${subtotal.toLocaleString("es-MX")}
                </p>

                <button class="eliminar"
                    onclick="eliminarProducto(${index})">
                    🗑 Eliminar
                </button>

            </div>

        </div>

        `;

    });

    total.textContent = "$" + totalCompra.toLocaleString("es-MX");

}

function cambiarCantidad(index, cambio) {

    carrito[index].cantidad += cambio;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    guardarCarrito();
    mostrarCarrito();

}

function eliminarProducto(index) {

    if(confirm("¿Eliminar este producto del carrito?")){

        carrito.splice(index,1);

        guardarCarrito();

        mostrarCarrito();

    }

}

if(botonFinalizar){

    botonFinalizar.addEventListener("click",()=>{

        if(carrito.length===0){
            alert("Tu carrito está vacío.");
            return;
        }

        const nombre=document.getElementById("nombreCliente").value.trim();
        const telefono=document.getElementById("telefonoCliente").value.trim();
        const municipio=document.getElementById("municipioCliente").value.trim();

        const instalacion=document.getElementById("instalacion").checked
        ? "Sí"
        : "No";

        if(nombre==="" || telefono===""){
            alert("Ingresa tu nombre y teléfono.");
            return;
        }

        let mensaje="🔋 *Nuevo pedido - UVAN BATTERY*%0A%0A";

        mensaje+=`👤 Nombre: ${nombre}%0A`;
        mensaje+=`📞 Teléfono: ${telefono}%0A`;
        mensaje+=`📍 Municipio: ${municipio}%0A`;
        mensaje+=`🛠 Instalación: ${instalacion}%0A%0A`;

        mensaje+="🛒 *Productos*%0A%0A";

        let totalCompra=0;

        carrito.forEach(producto=>{

            const subtotal=producto.precio*producto.cantidad;

            totalCompra+=subtotal;

            mensaje+=`• ${producto.marca} ${producto.modelo}%0A`;
            mensaje+=`Cantidad: ${producto.cantidad}%0A`;
            mensaje+=`Subtotal: $${subtotal.toLocaleString("es-MX")}%0A%0A`;

        });

        mensaje+=`💰 *TOTAL:* $${totalCompra.toLocaleString("es-MX")}`;

        window.open(
            `https://wa.me/525615855066?text=${mensaje}`,
            "_blank"
        );

    });

}

mostrarCarrito();