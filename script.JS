var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    breakpoints: {
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});

function enviarWhatsApp(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const proyecto = document.getElementById("proyecto").value;
    const correo = document.getElementById("correo").value;

    const mensaje = `Hola, soy ${nombre}.
Teléfono: ${telefono}
Correo: ${correo}
Tipo de proyecto: ${proyecto}`;

    const numeroWhatsApp = "573042271498";

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
