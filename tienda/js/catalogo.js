
const contenedor = document.querySelector(".productos");

if (contenedor) {

    productos.forEach(producto => {

        contenedor.innerHTML += `
            <div class="producto">

                <img src="${producto.imagen}" alt="${producto.modelo}">

                <div class="info">

                    <span class="marca">${producto.marca}</span>

                    <h3>${producto.modelo}</h3>

                    <p class="precio">$${producto.precio.toLocaleString("es-MX")}</p>

                    <p class="garantia">Garantía: ${producto.garantia}</p>

                    <p class="stock">
                        ${producto.stock > 0 ? "✅ Disponible" : "❌ Agotado"}
                    </p>

                    <button>Agregar al carrito</button>

                </div>

            </div>
        `;
    });

}