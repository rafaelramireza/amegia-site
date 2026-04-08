document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio AMEGIA cargado correctamente");

    /* =========================
       DESPLAZAMIENTO SUAVE
    ========================== */
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

    /* =========================
       BOTONES EN CONSTRUCCIÓN
    ========================== */
    const botonesAcceso = document.querySelectorAll('.btn[href="#"]');

    botonesAcceso.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Esta sección se encuentra en construcción.");
        });
    });

    /* =========================
       CARRUSEL DE BANNER
    ========================== */
    const slides = document.querySelectorAll(".slide-link");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (slides.length > 1) {
        let currentSlide = 0;

        function mostrarSlide(index) {
            slides.forEach(slide => {
                slide.classList.remove("active");
            });

            slides[index].classList.add("active");
        }

        function siguienteSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            mostrarSlide(currentSlide);
        }

        function anteriorSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            mostrarSlide(currentSlide);
        }

        // Cambio automático cada 4 segundos
        setInterval(siguienteSlide, 4000);

        // Botón siguiente
        if (nextBtn) {
            nextBtn.addEventListener("click", siguienteSlide);
        }

        // Botón anterior
        if (prevBtn) {
            prevBtn.addEventListener("click", anteriorSlide);
        }
    }
});