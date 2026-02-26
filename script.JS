// ===== MENÚ HAMBURGUESA =====
// Cerrar menú cuando se hace clic en un enlace
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.menu-1 ul li a, .menu-2 a');
    
    // Cerrar menú al hacer clic en cualquier enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.checked = false;
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        const menu = document.querySelector('.menu');
        if (menu && !menu.contains(event.target) && menuToggle && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});

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

// ===== DATOS DE PROYECTOS =====
var todosLosProyectos = [
    {
        nombre: 'Remodelación Parque Centenario',
        descripcion: 'Renovación y mejoramiento del espacio público',
        ubicacion: 'Ibagué, Tolima',
        año: '2025 / Actualidad',
        imagen: 'templates/3.1.jpeg'
    },
    {
        nombre: 'Cambio de Cubierta Unidad de Salud',
        descripcion: 'USI San Francisco - Remodelación de cobertura',
        ubicacion: 'Ibagué, Tolima',
        año: '2025 / Actualidad',
        imagen: 'templates/4.1.jpeg'
    },
    {
        nombre: 'Hotel Manila',
        descripcion: 'Remodelación y adecuación de terraza a suits',
        ubicacion: 'Medellín, Antioquia',
        año: '2025',
        imagen: 'templates/1.1.jpeg'
    },
    {
        nombre: 'Autopista Río Magdalena',
        descripcion: 'Supervisión técnica',
        ubicacion: 'Vegachi, Antioquia',
        año: '2022',
        imagen: 'templates/2.1.jpeg'
    },
    {
        nombre: 'Construcción de Filtro Tipo Frances',
        descripcion: 'Filtros tipo francés perimetrales en edificio residencial',
        ubicacion: 'Envigado, Antioquia',
        año: '2024',
        imagen: 'imagenes/servicios1.jpeg'
    },
    {
        nombre: 'Casa Tipo Campestre',
        descripcion: 'Construcción de vivienda unifamiliar con diseño campestre',
        ubicacion: 'Envigado, Antioquia',
        año: '2023',
        imagen: 'imagenes/servicios2.2.jpeg'
    },
    {
        nombre: 'Instalación de Cubierta',
        descripcion: 'Colocación de teja traslúcida para proyecto residencial',
        ubicacion: 'Rionegro, Antioquia',
        año: '2025',
        imagen: 'imagenes/servicios3.jpeg'
    }
];

// Inicializar Swiper solo si existe en la página
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
       var swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,

            speed: 700, 
            autoplay: {
                delay: 1800, 
                disableOnInteraction: false,
            },

            breakpoints: {

                
                991: {
                    slidesPerView: 3,
                    speed: 700,
                    autoplay: {
                        delay: 2000
                    }
                },

                
                768: {
                    slidesPerView: 2,
                    speed: 700,
                    autoplay: {
                        delay: 2500
                    }
                },

               
                0: {
                    slidesPerView: 1,
                    speed: 700,
                    autoplay: {
                        delay: 2500
                    }
                }
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {

    function enviarWhatsApp(event) {
        event.preventDefault(); // evitar que el form recargue la página

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const proyecto = document.getElementById("proyecto").value;
        const correo = document.getElementById("correo").value;

        const mensaje = `Hola, soy ${nombre}.\nTeléfono: ${telefono}\nCorreo: ${correo}\nTipo de proyecto: ${proyecto}`;
        const numeroWhatsApp = "573042271498";

        // Abrir ventana inmediatamente (requerido por Safari)
        const ventana = window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`, '_blank');

        // Mostrar mensaje de éxito en la web
        mostrarMensajeExito();

        // Limpiar formulario
        document.getElementById('contactForm').reset();

        // Opcional: si quieres cerrar automáticamente la ventana de WhatsApp luego de un tiempo
        // setTimeout(() => { ventana.close(); }, 5000);
    }

    // Bind del formulario
    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', enviarWhatsApp);

});
// ===== CARRUSEL PARA PROYECTOS =====
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const dotsContainer = carouselContainer.querySelector('.carousel-dots');
        
        // Agregar botón de pantalla completa a los videos
        items.forEach((item) => {
            const video = item.querySelector('.carousel-video');
            if (video) {
                const btn = document.createElement('button');
                btn.classList.add('carousel-video-fullscreen-btn');
                btn.innerHTML = '⛶';
                btn.onclick = (e) => {
                    e.stopPropagation();
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if (video.mozRequestFullScreen) {
                        video.mozRequestFullScreen();
                    } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen();
                    } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen();
                    }
                };
                video.style.position = 'relative';
                video.appendChild(btn);
            }
        });
        
        // Crear puntos indicadores
        items.forEach((item, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.onclick = () => goToSlide(carouselContainer, index);
            dotsContainer.appendChild(dot);
        });
        
        // Auto-play del carrusel (cambio automático cada 2 segundos para imágenes)
        if (items.length > 1) {
            let autoplayInterval;
            let isVideoPlaying = false;
            
            const startAutoplay = () => {
                autoplayInterval = setInterval(() => {
                    const currentActive = carousel.querySelector('.carousel-item.active');
                    const video = currentActive.querySelector('video');
                    
                    // Si hay un video y está reproduciéndose, no cambiar de slide
                    if (video && !video.paused) {
                        return;
                    }
                    
                    const currentIndex = Array.from(items).indexOf(currentActive);
                    const nextIndex = (currentIndex + 1) % items.length;
                    goToSlide(carouselContainer, nextIndex);
                }, 2000); // Cambiar a 2 segundos
            };
            
            startAutoplay();
            
            // Pausar autoplay al interactuar con los botones
            carouselContainer.querySelectorAll('.carousel-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    clearInterval(autoplayInterval);
                    startAutoplay();
                });
            });
            
            // Pausar al pasar el mouse encima
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(autoplayInterval);
            });
            
            // Reanudar al sacar el mouse
            carouselContainer.addEventListener('mouseleave', () => {
                startAutoplay();
            });
        }
    });
}

function nextSlide(button) {
    const carouselContainer = button.closest('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const currentActive = carousel.querySelector('.carousel-item.active');
    const currentIndex = Array.from(items).indexOf(currentActive);
    const nextIndex = (currentIndex + 1) % items.length;
    
    goToSlide(carouselContainer, nextIndex);
}

function prevSlide(button) {
    const carouselContainer = button.closest('.carousel-container');
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const currentActive = carousel.querySelector('.carousel-item.active');
    const currentIndex = Array.from(items).indexOf(currentActive);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    
    goToSlide(carouselContainer, prevIndex);
}

function goToSlide(carouselContainer, index) {
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = carouselContainer.querySelectorAll('.carousel-dot');
    
    // Remover clase active de todos
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Agregar clase active al índice especificado
    if (items[index]) {
        items[index].classList.add('active');
        
        // Pausar otros videos y reproducir el actual si es video
        items.forEach((item, i) => {
            const video = item.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0; // Reiniciar el video desde el principio
                if (i === index) {
                    // Reproducir el video actual
                    video.play().catch(err => console.log('Error playing video:', err));
                }
            }
        });
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Inicializar carruseles cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
});

// ===== MODAL PARA VER TODOS LOS PROYECTOS =====

function abrirModalProyectos() {
    console.log('Abriendo modal...');
    const modal = document.getElementById('modalTodosProyectos');
    const grid = document.getElementById('todosProyectosGrid');
    
    console.log('Modal encontrado:', modal);
    console.log('Grid encontrado:', grid);
    console.log('Proyectos disponibles:', todosLosProyectos.length);
    
    if (!modal || !grid) {
        console.error('No se encontró el modal o el grid');
        return;
    }
    
    // Limpiar grid
    grid.innerHTML = '';
    
    // Agregar proyectos al grid
    todosLosProyectos.forEach((proyecto, index) => {
        console.log('Agregando proyecto:', index + 1, proyecto.nombre);
        const proyectoDiv = document.createElement('div');
        proyectoDiv.classList.add('proyecto-completo');
        proyectoDiv.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}" class="proyecto-completo-img">
            <div class="proyecto-completo-info">
                <h4>${proyecto.nombre}</h4>
                <p>${proyecto.descripcion}</p>
                <div class="proyecto-completo-detalles">
                    <span>${proyecto.ubicacion}</span>
                    <span>${proyecto.año}</span>
                </div>
            </div>
        `;
        grid.appendChild(proyectoDiv);
    });
    
    // Mostrar modal
    console.log('Agregando clase show al modal...');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    console.log('Modal mostrado');
}

function cerrarModalProyectos() {
    const modal = document.getElementById('modalTodosProyectos');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalTodosProyectos');
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                cerrarModalProyectos();
            }
        });
    }
});

// Bind form submit and close button without inline handlers
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) form.addEventListener('submit', enviarWhatsApp);
    const cerrarBtn = document.querySelector('.boton-cerrar-mensaje');
    if (cerrarBtn) cerrarBtn.addEventListener('click', cerrarMensajeExito);
});
