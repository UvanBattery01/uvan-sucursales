const contenedor = document.querySelector(".productos");

if(contenedor){

    productos.forEach(producto=>{

        contenedor.innerHTML += `
        <div class="producto">

            <img src="${producto.imagen}" alt="${producto.modelo}">

            <h3>${producto.marca}</h3>

            <h4>${producto.modelo}</h4>

            <p>$${producto.precio}</p>

            <button>Agregar al carrito</button>

        </div>
        `;

    });

}