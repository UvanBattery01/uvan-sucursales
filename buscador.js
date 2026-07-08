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
      const op = document.createElement("option");
      op.value = m;
      op.textContent = m;
      marca.appendChild(op);
    });

  });

marca.addEventListener("change", () => {

  modelo.innerHTML =
    '<option value="">Selecciona un modelo</option>';

  anio.innerHTML =
    '<option value="">Selecciona un año</option>';

  modelo.disabled = false;
  anio.disabled = true;

  const modelos = [...new Set(

    vehiculos
      .filter(v => v.Marca === marca.value)
      .map(v => v.Modelo)

  )].sort();

  modelos.forEach(m => {

    const op = document.createElement("option");

    op.value = m;

    op.textContent = m;

    modelo.appendChild(op);

  });

});

modelo.addEventListener("change", () => {

  anio.innerHTML =
    '<option value="">Selecciona un año</option>';

  anio.disabled = false;

  const registros = vehiculos.filter(v =>
    v.Marca === marca.value &&
    v.Modelo === modelo.value
  );

  const años = [];

  registros.forEach(r => {

    const texto = r["Año"];

    if (texto.includes("-")) {

      const partes = texto.split("-");

      let inicio = parseInt(partes[0]);

      let fin = parseInt(partes[1]);

      if (fin < 100)
        fin += 2000;

      for (let i = inicio; i >= fin; i--) {

        años.push(i);

      }

    } else {

      años.push(parseInt(texto));

    }

  });

  [...new Set(años)]
    .sort((a,b)=>b-a)
    .forEach(a => {

      const op = document.createElement("option");

      op.value = a;

      op.textContent = a;

      anio.appendChild(op);

    });

});

buscar.addEventListener("click", () => {

  if(
    !marca.value ||
    !modelo.value ||
    !anio.value
  ){

    resultado.innerHTML =
    "<p>Selecciona Marca, Modelo y Año.</p>";

    return;

  }

  const añoSeleccionado =
    parseInt(anio.value);

  const encontrado = vehiculos.find(v=>{

    if(
      v.Marca!==marca.value ||
      v.Modelo!==modelo.value
    ) return false;

    const texto=v["Año"];

    if(texto.includes("-")){

      const p=texto.split("-");

      let inicio=parseInt(p[0]);

      let fin=parseInt(p[1]);

      if(fin<100)
      fin+=2000;

      return añoSeleccionado<=inicio &&
             añoSeleccionado>=fin;

    }

    return parseInt(texto)===añoSeleccionado;

  });

  if(!encontrado){

    resultado.innerHTML=
    "<h3>No se encontró información.</h3>";

    return;

  }

  resultado.innerHTML=`

<h2>🔋 BCI Compatible</h2>

<h1>${encontrado.BCI}</h1>

<a class="btn"

target="_blank"

href="https://wa.me/525615855066?text=Hola,%20quiero%20cotizar%20una%20batería%20BCI%20${encodeURIComponent(encontrado.BCI)}%20para%20un%20${encodeURIComponent(marca.value)}%20${encodeURIComponent(modelo.value)}%20${encodeURIComponent(anio.value)}">

💬 Cotizar por WhatsApp

</a>

`;

});