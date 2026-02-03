# 📸 INSTRUCCIONES PARA AGREGAR IMÁGENES Y VIDEOS AL CARRUSEL DE PROYECTOS

## Estructura HTML del Carrusel

Cada proyecto tiene un carrusel que funciona así:

```html
<div class="carousel-container">
    <div class="carousel">
        <div class="carousel-item active" data-index="0">
            <img src="imagenes/hotel-1.jpg" alt="Hotel Manila" class="carousel-media">
        </div>
        <div class="carousel-item" data-index="1">
            <video class="carousel-media" controls>
                <source src="imagenes/hotel-video.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    
    <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
    <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
    
    <div class="carousel-dots"></div>
</div>
```

---

## ¿CÓMO AGREGAR IMÁGENES?

### 1. **Pasos para agregar una imagen:**

1. Coloca tu imagen en la carpeta `/imagenes/`
2. Abre `proyectos.html` y encuentra el proyecto donde quieras agregar la imagen
3. Duplica este código dentro del `<div class="carousel">`:

```html
<div class="carousel-item" data-index="1">
    <img src="imagenes/nombre-imagen.jpg" alt="Descripción" class="carousel-media">
</div>
```

**Ejemplo - Agregando 2 imágenes al Hotel Manila:**

```html
<div class="carousel-container">
    <div class="carousel">
        <!-- Imagen 1 (se muestra por defecto) -->
        <div class="carousel-item active" data-index="0">
            <img src="imagenes/hotel-manila-1.jpg" alt="Hotel Manila - Vista general" class="carousel-media">
        </div>
        <!-- Imagen 2 -->
        <div class="carousel-item" data-index="1">
            <img src="imagenes/hotel-manila-2.jpg" alt="Hotel Manila - Detalle terraza" class="carousel-media">
        </div>
        <!-- Imagen 3 -->
        <div class="carousel-item" data-index="2">
            <img src="imagenes/hotel-manila-3.jpg" alt="Hotel Manila - Vista aérea" class="carousel-media">
        </div>
    </div>
    
    <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
    <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
    
    <div class="carousel-dots"></div>
</div>
```

---

## ¿CÓMO AGREGAR VIDEOS?

### 1. **Pasos para agregar un video:**

1. Prepara tu video (máximo 10 segundos recomendado)
2. Coloca el archivo en la carpeta `/imagenes/`
3. Abre `proyectos.html` y encuentra el proyecto donde quieras agregar el video
4. Agrega este código dentro del `<div class="carousel">`:

```html
<div class="carousel-item" data-index="1">
    <video class="carousel-media" controls>
        <source src="imagenes/nombre-video.mp4" type="video/mp4">
        Tu navegador no soporta videos HTML5
    </video>
</div>
```

**Ejemplo - Mezclando imágenes y videos:**

```html
<div class="carousel-container">
    <div class="carousel">
        <!-- Imagen 1 (se muestra por defecto) -->
        <div class="carousel-item active" data-index="0">
            <img src="imagenes/proyecto-foto-1.jpg" alt="Foto del proyecto" class="carousel-media">
        </div>
        <!-- Video -->
        <div class="carousel-item" data-index="1">
            <video class="carousel-media" controls>
                <source src="imagenes/proyecto-video.mp4" type="video/mp4">
                Tu navegador no soporta videos HTML5
            </video>
        </div>
        <!-- Imagen 2 -->
        <div class="carousel-item" data-index="2">
            <img src="imagenes/proyecto-foto-2.jpg" alt="Foto del proyecto 2" class="carousel-media">
        </div>
    </div>
    
    <button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
    <button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
    
    <div class="carousel-dots"></div>
</div>
```

---

## 📋 FORMATOS SOPORTADOS

### Imágenes:
- ✅ JPG / JPEG
- ✅ PNG
- ✅ WebP
- ✅ GIF

### Videos:
- ✅ MP4
- ✅ WebM
- ✅ OGG

---

## ⚙️ CARACTERÍSTICAS DEL CARRUSEL

✅ **Cambio automático cada 5 segundos** - Se cambia la diapositiva automáticamente  
✅ **Botones de navegación** - Haz clic en ❮ y ❯ para cambiar manualmente  
✅ **Puntos indicadores** - Los puntos inferiores muestran cuál slide estás viendo  
✅ **Click en puntos** - Haz clic en un punto para ir directamente a ese slide  
✅ **Controles de video** - Los videos incluyen play/pause/volumen  
✅ **Responsive** - Se adapta a cualquier tamaño de pantalla  

---

## 🎯 GUÍA DE ESTRUCTURA DE CARPETAS

Tu estructura debe verse así:

```
qudra_constructora - copia/
├── imagenes/
│   ├── hotel-manila-1.jpg
│   ├── hotel-manila-2.jpg
│   ├── hotel-video.mp4
│   ├── autopista-1.jpg
│   ├── parque-1.jpg
│   ├── parque-video.mp4
│   └── ... (más imágenes y videos)
├── css/
│   ├── style.css
│   └── proyectos.css
├── proyectos.html
├── index.html
├── script.js
└── ... (otros archivos)
```

---

## 💡 CONSEJOS

1. **Optimiza las imágenes** - Comprime tus imágenes antes de subirlas para que carguen más rápido
2. **Nombres descriptivos** - Usa nombres como `hotel-manila-terraza.jpg` en lugar de `IMG_001.jpg`
3. **Videos cortos** - Mantén los videos entre 5-10 segundos para mejor performance
4. **Formatos modernos** - Usa JPG para fotos y PNG para imágenes con transparencia
5. **Alt text** - Siempre completa el atributo `alt=""` con una descripción

---

## 📝 EJEMPLO COMPLETO - HOTEL MANILA

Aquí te muestro cómo debería verse completo:

```html
<!-- PROYECTO 1: Hotel Manila -->
<div class="proyecto-card">
    <div class="carousel-container">
        <div class="carousel">
            <!-- Imagen 1 -->
            <div class="carousel-item active" data-index="0">
                <img src="imagenes/hotel-manila-entrada.jpg" alt="Hotel Manila - Entrada principal" class="carousel-media">
            </div>
            <!-- Imagen 2 -->
            <div class="carousel-item" data-index="1">
                <img src="imagenes/hotel-manila-terraza.jpg" alt="Hotel Manila - Terraza remodelada" class="carousel-media">
            </div>
            <!-- Video -->
            <div class="carousel-item" data-index="2">
                <video class="carousel-media" controls>
                    <source src="imagenes/hotel-manila-timelapse.mp4" type="video/mp4">
                    Tu navegador no soporta videos HTML5
                </video>
            </div>
            <!-- Imagen 3 -->
            <div class="carousel-item" data-index="3">
                <img src="imagenes/hotel-manila-suits.jpg" alt="Hotel Manila - Suits completadas" class="carousel-media">
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

## ¿NECESITAS AYUDA?

Si tienes dudas sobre cómo editar el HTML, puedo ayudarte a:
- Agregar las imágenes y videos directamente en el código
- Ajustar estilos o dimensiones
- Cambiar colores o efectos del carrusel

¡Solo cuéntame qué necesitas!