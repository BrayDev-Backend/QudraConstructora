// Detectar sección activa y actualizar menú basado en scroll
function inicializarMenuActivo() {
    const enlaces = document.querySelectorAll('.menu-1 ul li a');
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    
    // Si no estamos en index.html, solo marcar la página activa
    if (paginaActual !== 'index.html' && paginaActual !== '') {
        enlaces.forEach(enlace => {
            enlace.classList.remove('active');
            const href = enlace.getAttribute('href');
            const nombreArchivo = href.split('/').pop().split('#')[0] || 'index.html';
            
            if (paginaActual === nombreArchivo) {
                enlace.classList.add('active');
            }
        });
        return; // No agregar event listeners de scroll en páginas internas
    }
    
    // Para index.html: detectar sección activa con scroll
    function actualizarMenuActivo() {
        const scrollPosition = window.scrollY + 200; // Ajuste para el header fijo
        let seccionActiva = null;
        
        // Obtener todas las secciones
        const secciones = document.querySelectorAll('[id="inicio"], [id="nosotros"], [id="proposito"], [id="ubicacion"], [id="contacto"], [id="asesoria"]');
        
        // Encontrar cuál sección está más cerca del viewport
        let distanciaMinima = Infinity;
        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop;
            const distancia = Math.abs(scrollPosition - seccionTop);
            
            if (distancia < distanciaMinima) {
                distanciaMinima = distancia;
                seccionActiva = seccion.id;
            }
        });
        
        // Remover active de todos
        enlaces.forEach(enlace => {
            enlace.classList.remove('active');
        });
        
        // Agregar active al enlace de la sección activa
        if (seccionActiva) {
            enlaces.forEach(enlace => {
                const href = enlace.getAttribute('href');
                const seccionEnlace = href.split('#')[1];
                
                if (seccionEnlace === seccionActiva) {
                    enlace.classList.add('active');
                }
            });
        }
    }
    
    // Ejecutar al hacer scroll (solo en index.html)
    window.addEventListener('scroll', actualizarMenuActivo);
    
    // Ejecutar al cargar la página
    actualizarMenuActivo();
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializarMenuActivo);

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
