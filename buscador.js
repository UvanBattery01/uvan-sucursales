let vehiculos = [];

const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const anio = document.getElementById("anio");
const resultado = document.getElementById("resultado");
const buscar = document.getElementById("buscarBateria");

fetch("vehiculos.json")
.then(res => res.json())
.then(data => {

    vehiculos = data;

    const marcas = [...new Set(
        vehiculos.map(v => v.Marca)
    )].sort();

    marcas.forEach(m => {
        marca.innerHTML += `<option value="${m}">${m}</option>`;
    });

});

marca.addEventListener("change", () => {

    modelo.innerHTML = '<option value="">Selecciona un modelo</option>';
    anio.innerHTML = '<option value="">Selecciona un año</option>';

    modelo.disabled = false;
    anio.disabled = true;

    const modelos = [...new Set(

        vehiculos
        .filter(v => {

            if (v.Marca !== marca.value) return false;

            const m = v.Modelo.trim();

            if (/^(G|GP|GS)[-\s]/i.test(m)) return false;
            if (/Gp-|Gs-|G-|Ref/i.test(m)) return false;
            if (/Acumulador/i.test(m)) return false;

            return true;

        })
        .map(v => v.Modelo.trim())

    )].sort();

    modelos.forEach(m => {
        modelo.innerHTML += `<option value="${m}">${m}</option>`;
    });

});

modelo.addEventListener("change", () => {

    anio.innerHTML = '<option value="">Selecciona un año</option>';
    anio.disabled = false;

    const años = [...new Set(

        vehiculos
        .filter(v =>
            v.Marca === marca.value &&
            v.Modelo === modelo.value
        )
        .map(v => Number(v["Año"]))

    )].sort((a,b)=>b-a);

    años.forEach(a=>{
        anio.innerHTML += `<option value="${a}">${a}</option>`;
    });

});

buscar.addEventListener("click", () => {

    if(!marca.value || !modelo.value || !anio.value){

        resultado.innerHTML =
        "<p>Selecciona Marca, Modelo y Año.</p>";

        return;

    }

    const compatibles = vehiculos.filter(v=>

        v.Marca===marca.value &&
        v.Modelo===modelo.value &&
        Number(v["Año"])===Number(anio.value)

    );

    if(!compatibles.length){

        resultado.innerHTML =
        "<h3>No se encontró información.</h3>";

        return;

    }

    const bcis = [...new Set(
        compatibles.map(v=>v.BCI)
    )];

    resultado.innerHTML = `

<h2>🔋 BCI Compatible</h2>

<h1>${bcis.join(" / ")}</h1>

<a class="btn"
target="_blank"
href="https://wa.me/525615855066?text=Hola,%20quiero%20cotizar%20una%20batería%20BCI%20${encodeURIComponent(bcis.join(" / "))}%20para%20un%20${encodeURIComponent(marca.value)}%20${encodeURIComponent(modelo.value)}%20${encodeURIComponent(anio.value)}">

💬 Cotizar por WhatsApp

</a>

`;

});