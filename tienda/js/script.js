const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let actual = 0;

function cambiarSlide(){

    slides[actual].classList.remove("activo");
    dots[actual].classList.remove("activo");

    actual++;

    if(actual >= slides.length){
        actual = 0;
    }

    slides[actual].classList.add("activo");
    dots[actual].classList.add("activo");

}

setInterval(cambiarSlide,5000);