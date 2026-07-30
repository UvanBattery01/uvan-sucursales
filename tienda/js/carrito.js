let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id) {

    id = Number(id);

    const producto = productos.find(p => Number(p.id) === id);

    if (!producto) {
        alert("No se encontró el producto.");
        return;
    }

    const indice = carrito.findIndex(p => Number(p.id) === id);

    if (indice >= 0) {
        carrito[indice].cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarrito();

    alert("✅ Producto agregado al carrito");
}