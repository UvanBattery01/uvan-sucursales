const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function abrirMenu() {
    sidebar.classList.add("open");
    overlay.classList.add("show");
}

function cerrarMenu() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

menuBtn.addEventListener("click", abrirMenu);

overlay.addEventListener("click", cerrarMenu);

document.querySelectorAll("#sidebar a").forEach(link=>{
    link.addEventListener("click", cerrarMenu);
});