// Obtener ID del producto desde la URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Buscar producto
const producto = productos.find(p => p.id === id);

if (!producto) {

    document.body.innerHTML = `
        <h1 style="text-align:center;margin-top:100px;">
            Producto no encontrado
        </h1>
    `;

    throw new Error("Producto no encontrado");

}

// Cambiar título
document.title = `${producto.marca} ${producto.modelo} | UVAN BATTERY`;

// Información principal
document.getElementById("marcaProducto").textContent = producto.marca;
document.getElementById("modeloProducto").textContent = producto.modelo;
document.getElementById("precioProducto").textContent =
    "$" + producto.precio.toLocaleString("es-MX");

document.getElementById("imagenProducto").src = producto.imagen;

document.getElementById("mini1").src = producto.imagen;
document.getElementById("mini2").src = producto.imagen;
document.getElementById("mini3").src = producto.imagen;

document.getElementById("descripcionProducto").textContent =
    producto.descripcion;

document.getElementById("garantiaProducto").textContent =
    "🛡 Garantía " + producto.garantia;

// Especificaciones
const lista = document.getElementById("listaEspecificaciones");

if (lista) {

    lista.innerHTML = "";

    if (producto.especificaciones) {

        producto.especificaciones.forEach(item => {

            lista.innerHTML += `<li>${item}</li>`;

        });

    }

}

// Botón Agregar al carrito
const botonCarrito = document.querySelector(".carrito");

if (botonCarrito) {

    botonCarrito.addEventListener("click", () => {

        agregarAlCarrito(producto.id);

        // Ir directamente al carrito
        window.location.href = "carrito.html";

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