let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("listaCarrito");
const total = document.getElementById("total");

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {

    lista.innerHTML = "";

    let totalCompra = 0;

    if (carrito.length === 0) {

        lista.innerHTML = `
            <p style="text-align:center;">
                🛒 Tu carrito está vacío
            </p>
        `;

        total.textContent = "$0";
        return;
    }

    carrito.forEach((producto, index) => {

        const subtotal = producto.precio * producto.cantidad;
        totalCompra += subtotal;

        lista.innerHTML += `
            <div class="producto-carrito">

                <img src="${producto.imagen}" alt="${producto.modelo}">

                <div class="info">

                    <h3>${producto.marca} ${producto.modelo}</h3>

                    <p class="precio">
                        $${producto.precio.toLocaleString("es-MX")}
                    </p>

                    <div class="cantidad">

                        <button onclick="cambiarCantidad(${index}, -1)">−</button>

                        <span>${producto.cantidad}</span>

                        <button onclick="cambiarCantidad(${index}, 1)">+</button>

                    </div>

                    <p>
                        <strong>Subtotal:</strong>
                        $${subtotal.toLocaleString("es-MX")}
                    </p>

                    <button onclick="eliminarProducto(${index})">
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

    carrito.splice(index, 1);

    guardarCarrito();
    mostrarCarrito();

}

mostrarCarrito();
const botonFinalizar = document.getElementById("finalizarCompra");

if (botonFinalizar) {

    botonFinalizar.addEventListener("click", () => {

        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        let mensaje = "Hola 👋, quiero realizar el siguiente pedido:%0A%0A";

        let totalCompra = 0;

        carrito.forEach(producto => {

            const subtotal = producto.precio * producto.cantidad;
            totalCompra += subtotal;

            mensaje += `🔋 ${producto.marca} ${producto.modelo}%0A`;
            mensaje += `Cantidad: ${producto.cantidad}%0A`;
            mensaje += `Subtotal: $${subtotal.toLocaleString("es-MX")}%0A%0A`;

        });

        mensaje += `💰 Total: $${totalCompra.toLocaleString("es-MX")}`;

        window.open(
            `https://wa.me/525615855066?text=${mensaje}`,
            "_blank"
        );

    });

}