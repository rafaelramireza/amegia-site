document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio AMEGIA cargado correctamente");

    // Desplazamiento suave para enlaces internos
    const enlacesInternos = document.querySelectorAll('a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Mensaje temporal para botones sin destino
    const botonesAcceso = document.querySelectorAll('.btn[href="#"]');

    botonesAcceso.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Esta sección se encuentra en construcción.");
        });
    });

    // Carrusel
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        let currentSlide = 0;

        function cambiarSlide() {
            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");
        }

        setInterval(cambiarSlide, 4000);
    }
});