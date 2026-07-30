const lista = document.getElementById("listaCarrito");
const total = document.getElementById("total");

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

console.log("Carrito leído:", carrito);

if (carrito.length === 0) {

    lista.innerHTML = "<p>🛒 Tu carrito está vacío</p>";

    total.textContent = "$0";

} else {

    let totalCompra = 0;

    carrito.forEach(producto => {

        const subtotal = producto.precio * producto.cantidad;
        totalCompra += subtotal;

        lista.innerHTML += `
            <div class="producto-carrito">
                <h3>${producto.marca} ${producto.modelo}</h3>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>$${subtotal.toLocaleString("es-MX")}</p>
            </div>
        `;

    });

    total.textContent = "$" + totalCompra.toLocaleString("es-MX");

}