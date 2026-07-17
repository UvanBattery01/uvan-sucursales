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

    alert(
`${producto.marca}

${producto.linea}

Modelo: ${producto.modelo}

BCI: ${producto.bci}
Voltaje: ${producto.voltaje}
CCA: ${producto.cca}
CA: ${producto.ca}
Capacidad: ${producto.ah}
RC: ${producto.rc}

Garantía: ${producto.garantia}
Reemplazo sin costo: ${producto.reemplazo}

Polaridad: ${producto.polaridad}`
    );

}