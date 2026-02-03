# 📸 EJEMPLO LISTO PARA COPIAR Y PEGAR

## Opción 1: Solo con Imágenes (Recomendado para inicio)

Copia este código y reemplaza la sección del proyecto en `proyectos.html`:

```html
<!-- PROYECTO 1: Hotel Manila -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/hotel-manila-1.jpg" alt="Hotel Manila vista general" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="1">
                <img src="imagenes/hotel-manila-2.jpg" alt="Hotel Manila terraza" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="2">
                <img src="imagenes/hotel-manila-3.jpg" alt="Hotel Manila suits" class="carousel-media">
            </div>
        </div>

        <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
        <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>

        <div class="carousel-dots"></div>
    </div>

    <div class="proyecto-info">
        <h3>Hotel Manila</h3>
        <p class="proyecto-descripcion">Remodelación y adecuación de terraza a suits</p>
        
        <div class="proyecto-detalles">
            <div class="detalle">
                <span class="icono">📍</span>
                <span>Medellín, Antioquia</span>
            </div>
            <div class="detalle">
                <span class="icono">📅</span>
                <span>2025</span>
            </div>
        </div>
    </div>
</div>
```

---

## Opción 2: Con Imágenes y Videos Combinados

Aquí hay un ejemplo con 2 imágenes y 1 video:

```html
<!-- PROYECTO 2: Autopista Río Magdalena -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <!-- Imagen 1 -->
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/autopista-1.jpg" alt="Autopista vista general" class="carousel-media">
            </div>
            <!-- Video -->
            <div class="carousel-item" data-index="1">
                <video class="carousel-media" controls>
                    <source src="imagenes/autopista-video.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5
                </video>
            </div>
            <!-- Imagen 2 -->
            <div class="carousel-item" data-index="2">
                <img src="imagenes/autopista-2.jpg" alt="Autopista detalle construcción" class="carousel-media">
            </div>
        </div>

        <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
        <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>

        <div class="carousel-dots"></div>
    </div>

    <div class="proyecto-info">
        <h3>Autopista Río Magdalena</h3>
        <p class="proyecto-descripcion">Supervisión técnica de infraestructura vial</p>
        
        <div class="proyecto-detalles">
            <div class="detalle">
                <span class="icono">📍</span>
                <span>Vegachi, Antioquia</span>
            </div>
            <div class="detalle">
                <span class="icono">📅</span>
                <span>2022</span>
            </div>
        </div>
    </div>
</div>
```

---

## Opción 3: Más de 5 Imágenes/Videos

Puedes agregar todos los que quieras. Solo repite la estructura:

```html
<!-- PROYECTO 3: Remodelación Parque Centenario -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/parque-1.jpg" alt="Parque antes" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="1">
                <img src="imagenes/parque-2.jpg" alt="Parque durante" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="2">
                <video class="carousel-media" controls>
                    <source src="imagenes/parque-timelapse.mp4" type="video/mp4">
                </video>
            </div>
            <div class="carousel-item" data-index="3">
                <img src="imagenes/parque-3.jpg" alt="Parque después" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="4">
                <img src="imagenes/parque-4.jpg" alt="Parque detalle" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="5">
                <img src="imagenes/parque-5.jpg" alt="Parque noche" class="carousel-media">
            </div>
        </div>

        <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
        <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>

        <div class="carousel-dots"></div>
    </div>

    <div class="proyecto-info">
        <h3>Remodelación Parque Centenario</h3>
        <p class="proyecto-descripcion">Renovación integral del espacio público</p>
        
        <div class="proyecto-detalles">
            <div class="detalle">
                <span class="icono">📍</span>
                <span>Ibagué, Tolima</span>
            </div>
            <div class="detalle">
                <span class="icono">📅</span>
                <span>2025 / Actualidad</span>
            </div>
        </div>
    </div>
</div>
```

---

## Pasos Rápidos Para Implementar

1. **Descarga tus imágenes y videos**
2. **Colócalos en la carpeta `/imagenes/`**
3. **Abre `proyectos.html`**
4. **Reemplaza el contenedor `<div class="carousel">` de cada proyecto**
5. **Actualiza los nombres de archivos** según tus imágenes
6. **Guarda el archivo**
7. **Recarga la página en el navegador**

---

## Nombres de Archivos Recomendados

```
Para Hotel Manila:
- hotel-manila-1.jpg
- hotel-manila-2.jpg
- hotel-manila-video.mp4

Para Autopista:
- autopista-rio-magdalena-1.jpg
- autopista-rio-magdalena-2.jpg
- autopista-video.mp4

Para Parque:
- parque-centenario-1.jpg
- parque-centenario-2.jpg
- parque-centenario-video.mp4

Para Unidad de Salud:
- usi-san-francisco-1.jpg
- usi-san-francisco-2.jpg
- usi-san-francisco-video.mp4
```

---

## Atajo: Plantilla Lista Para Llenar

Aquí está la estructura completa de proyectos.html con placeholders:

```html
<!-- Copia todo esto en la sección <section class="proyectos-container"> -->

<!-- PROYECTO 1: Hotel Manila -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/REEMPLAZA_CON_TU_IMAGEN_1.jpg" alt="Imagen 1" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="1">
                <img src="imagenes/REEMPLAZA_CON_TU_IMAGEN_2.jpg" alt="Imagen 2" class="carousel-media">
            </div>
        </div>
        <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
        <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
        <div class="carousel-dots"></div>
    </div>
    <div class="proyecto-info">
        <h3>Hotel Manila</h3>
        <p class="proyecto-descripcion">Remodelación y adecuación de terraza a suits</p>
        <div class="proyecto-detalles">
            <div class="detalle">
                <span class="icono">📍</span>
                <span>Medellín, Antioquia</span>
            </div>
            <div class="detalle">
                <span class="icono">📅</span>
                <span>2025</span>
            </div>
        </div>
    </div>
</div>

<!-- PROYECTO 2: Autopista -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/REEMPLAZA_CON_TU_IMAGEN_1.jpg" alt="Imagen 1" class="carousel-media">
            </div>
            <div class="carousel-item" data-index="1">
                <img src="imagenes/REEMPLAZA_CON_TU_IMAGEN_2.jpg" alt="Imagen 2" class="carousel-media">
            </div>
        </div>
        <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
        <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
        <div class="carousel-dots"></div>
    </div>
    <div class="proyecto-info">
        <h3>Autopista Río Magdalena</h3>
        <p class="proyecto-descripcion">Supervisión técnica</p>
        <div class="proyecto-detalles">
            <div class="detalle">
                <span class="icono">📍</span>
                <span>Vegachi, Antioquia</span>
            </div>
            <div class="detalle">
                <span class="icono">📅</span>
                <span>2022</span>
            </div>
        </div>
    </div>
</div>

<!-- ... y repite para los otros 2 proyectos principales ... -->
```

---

## Atajos de Teclado (Opcional)

Si quieres agregar navegación con teclado, puedes añadir esto al final de `script.JS`:

```javascript
// Navegación con teclado (Flecha izquierda/derecha)
document.addEventListener('keydown', (e) => {
    const activeCarousel = document.querySelector('.carousel-container');
    if (e.key === 'ArrowLeft') {
        const prevBtn = activeCarousel.querySelector('.carousel-btn.prev');
        prevSlide(prevBtn);
    } else if (e.key === 'ArrowRight') {
        const nextBtn = activeCarousel.querySelector('.carousel-btn.next');
        nextSlide(nextBtn);
    }
});
```

---

## ¿Necesitas cambiar algo?

Cualquier ajuste que necesites hacer, avísame y lo hacemos juntos. Algunos ejemplos:

- Cambiar colores del carrusel
- Modificar velocidad de cambio
- Ajustar tamaños
- Agregar más efectos
- Cambiar distribución de la página

¡Dime qué necesitas!