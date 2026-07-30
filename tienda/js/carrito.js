let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id){

    const producto = productos.find(p => p.id === id);

    if(!producto) return;

    const existe = carrito.find(p => p.id === id);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push({
            ...producto,
            cantidad:1
        });

    }

    guardarCarrito();

    alert("Producto agregado al carrito ✅");

}