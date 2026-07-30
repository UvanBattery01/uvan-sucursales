// Obtener el ID desde la URL
const parametros = new URLSearchParams(window.location.search);
const id = Number(parametros.get("id"));

// Buscar el producto
const producto = productos.find(p => p.id === id);

if(producto){

    // Título de la página
    document.title = producto.marca + " " + producto.modelo + " | UVAN BATTERY";

    // Marca
    document.querySelector(".marca").textContent = producto.marca;

    // Modelo
    document.querySelector("h1").textContent = producto.modelo;

    // Precio
    document.querySelector(".precio").textContent =
    "$" + producto.precio.toLocaleString("es-MX");

    // Imagen
    document.getElementById("imagenProducto").src = producto.imagen;

    // Descripción
    document.querySelector(".descripcion").textContent =
    producto.descripcion;

    // Garantía
    document.querySelector(".badges").innerHTML = `
        <span>🛡 Garantía ${producto.garantia}</span>
        <span>🚚 Envío disponible</span>
        <span>📦 Stock ${producto.stock}</span>
    `;

}
else{

document.body.innerHTML=`
<h1 style="text-align:center;margin-top:100px;">
Producto no encontrado
</h1>
`;

}