document.addEventListener("DOMContentLoaded", () => {

    const catalogo = document.getElementById("catalogo");
    const buscador = document.querySelector(".search input");

    if (!catalogo) return;

    function mostrarProductos(lista) {

        catalogo.innerHTML = "";

        if (lista.length === 0) {
            catalogo.innerHTML = `
                <p style="text-align:center;font-size:18px;">
                    No se encontraron baterías.
                </p>`;
            return;
        }

        lista.forEach(producto => {

            const tarjeta = document.createElement("div");
            tarjeta.className = "card";

            tarjeta.innerHTML = `
                <div class="image">
                    <img src="${producto.imagenes[0]}" alt="${producto.modelo}">
                </div>

                <div class="info">

                    <div class="marca">
                        ${producto.marca}
                    </div>

                    <div class="modelo">
                        ${producto.modelo}
                    </div>

                    <div class="especificaciones">
                        <strong>BCI:</strong> ${producto.bci}<br>
                        <strong>Voltaje:</strong> ${producto.voltaje}<br>
                        <strong>CCA:</strong> ${producto.cca}<br>
                        <strong>Garantía:</strong> ${producto.garantia}
                    </div>

                    <button onclick="verProducto(${producto.id})">
                        Ver especificaciones
                    </button>

                </div>
            `;

            catalogo.appendChild(tarjeta);

        });

    }

    mostrarProductos(productos);

    if (buscador) {

        buscador.addEventListener("input", function () {

            const texto = this.value.toLowerCase();

            const filtrados = productos.filter(producto =>
                producto.marca.toLowerCase().includes(texto) ||
                producto.modelo.toLowerCase().includes(texto) ||
                producto.bci.toLowerCase().includes(texto)
            );

            mostrarProductos(filtrados);

        });

    }

});

function verProducto(id){

    const producto = productos.find(p => p.id === id);

    if(!producto) return;

    document.getElementById("modalImagen").src = producto.imagenes[0];
    document.getElementById("modalMarca").textContent = producto.marca;
    document.getElementById("modalModelo").textContent = producto.modelo;

    document.getElementById("modalInfo").innerHTML = `
        <strong>BCI:</strong> ${producto.bci}<br>
        <strong>Voltaje:</strong> ${producto.voltaje}<br>
        <strong>CCA:</strong> ${producto.cca}<br>
        <strong>CA:</strong> ${producto.ca}<br>
        <strong>Capacidad:</strong> ${producto.ah}<br>
        <strong>RC:</strong> ${producto.rc}<br>
        <strong>Garantía:</strong> ${producto.garantia}<br>
        <strong>Reemplazo:</strong> ${producto.reemplazo}<br>
        <strong>Polaridad:</strong> ${producto.polaridad}
    `;

    document.getElementById("btnWhatsapp").onclick = () => {
        const mensaje = encodeURIComponent(
            `Hola, me interesa la batería ${producto.marca} ${producto.modelo}. ¿Podrían darme información?`
        );

        window.open(`https://wa.me/525615855066?text=${mensaje}`, "_blank");
    };

    document.getElementById("modalProducto").style.display = "flex";
}

function cerrarProducto(){
    document.getElementById("modalProducto").style.display = "none";
}