// Obtener el ID desde la URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Buscar el producto
const producto = productos.find(p => p.id === id);

if (producto) {

    // Título de la página
    document.title = producto.marca + " " + producto.modelo + " | UVAN BATTERY";

    // Marca
    document.getElementById("marcaProducto").textContent = producto.marca;

    // Modelo
    document.getElementById("modeloProducto").textContent = producto.modelo;

    // Precio
    document.getElementById("precioProducto").textContent =
        "$" + producto.precio.toLocaleString("es-MX");

    // Imagen principal
    document.getElementById("imagenProducto").src = producto.imagen;

    // Miniaturas
    document.getElementById("mini1").src = producto.imagen;
    document.getElementById("mini2").src = producto.imagen;
    document.getElementById("mini3").src = producto.imagen;

    // Descripción
    document.getElementById("descripcionProducto").textContent =
        producto.descripcion;

    // Garantía
    document.getElementById("garantiaProducto").textContent =
        "🛡 Garantía " + producto.garantia;
// Especificaciones
const lista = document.getElementById("listaEspecificaciones");

if (lista && producto.especificaciones) {

    lista.innerHTML = "";

    producto.especificaciones.forEach(especificacion => {

        lista.innerHTML += `<li>${especificacion}</li>`;

    });

}

} else {

    document.body.innerHTML = `
        <h1 style="text-align:center;margin-top:100px;">
            Producto no encontrado
        </h1>
    `;

}

// Botón Agregar al carrito
const botonCarrito = document.querySelector(".carrito");

if (botonCarrito && producto) {

    botonCarrito.addEventListener("click", () => {

        agregarAlCarrito(producto.id);

    });

}

// Productos relacionados
const relacionados = document.getElementById("productosRelacionados");

if (relacionados) {

    relacionados.innerHTML = "";

    productos
        .filter(p => p.id !== producto.id)
        .slice(0, 4)
        .forEach(p => {

            relacionados.innerHTML += `
                <div class="producto">

                    <img src="${p.imagen}" alt="${p.modelo}">

                    <div class="info">

                        <span class="marca">${p.marca}</span>

                        <h3>${p.modelo}</h3>

                        <p class="precio">
                            $${p.precio.toLocaleString("es-MX")}
                        </p>

                        <a href="producto.html?id=${p.id}" class="btn-producto">
                            Ver producto
                        </a>

                    </div>

                </div>
            `;

        });

}