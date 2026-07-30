const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const lista = document.getElementById("listaCarrito");
const total = document.getElementById("total");

function mostrarCarrito(){

    lista.innerHTML = "";

    let totalCompra = 0;

    if(carrito.length === 0){

        lista.innerHTML = "<p>Tu carrito está vacío.</p>";
        total.textContent = "$0";
        return;

    }

    carrito.forEach((producto, index)=>{

        const subtotal = producto.precio * producto.cantidad;

        totalCompra += subtotal;

        lista.innerHTML += `
            <div class="producto-carrito">

                <img src="${producto.imagen}" alt="${producto.modelo}">

                <div class="info">

                    <h3>${producto.marca} ${producto.modelo}</h3>

                    <p>$${producto.precio.toLocaleString("es-MX")}</p>

                    <p>Cantidad: ${producto.cantidad}</p>

                    <p><strong>Subtotal:</strong> $${subtotal.toLocaleString("es-MX")}</p>

                    <button onclick="eliminarProducto(${index})">
                        🗑 Eliminar
                    </button>

                </div>

            </div>
        `;

    });

    total.textContent = "$" + totalCompra.toLocaleString("es-MX");

}

function eliminarProducto(index){

    carrito.splice(index,1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();

}

mostrarCarrito();