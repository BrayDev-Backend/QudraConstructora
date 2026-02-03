# 🔧 REFERENCIA TÉCNICA DEL CARRUSEL - PARA DESARROLLADORES

## Funciones de JavaScript

El carrusel está controlado por las siguientes funciones en `script.JS`:

### 1. `initializeCarousels()`
Se ejecuta cuando el DOM está listo. Inicializa todos los carruseles de la página.

**Qué hace:**
- Busca todos los contenedores de carrusel
- Crea los puntos indicadores automáticamente
- Inicia el autoplay (cambio automático cada 5 segundos)

### 2. `nextSlide(button)`
Avanza al siguiente slide.

**Parámetro:**
- `button`: Referencia al botón "siguiente" (se pasa automáticamente)

**Uso:**
```html
<button class="carousel-btn next" onclick="nextSlide(this)">❯</button>
```

### 3. `prevSlide(button)`
Retrocede al slide anterior.

**Parámetro:**
- `button`: Referencia al botón "anterior" (se pasa automáticamente)

**Uso:**
```html
<button class="carousel-btn prev" onclick="prevSlide(this)">❮</button>
```

### 4. `goToSlide(carouselContainer, index)`
Va directamente a un slide específico.

**Parámetros:**
- `carouselContainer`: El contenedor del carrusel
- `index`: Número del slide (0, 1, 2, etc.)

**Ejemplo de uso interno:**
```javascript
goToSlide(carouselContainer, 2); // Ir al tercer slide
```

---

## Variables CSS Personalizables

En `proyectos.css` puedes modificar estos valores:

### Colores
```css
/* Color principal del tema */
#C9A227  /* Dorado/Amarillo */
#0f172a  /* Azul oscuro - Títulos */
#475569  /* Gris - Texto */
```

### Tiempos de Transición
```css
/* En .carousel-item */
transition: opacity 0.5s ease-in-out;  /* Duración del fade */

/* En .carousel-btn */
transition: all 0.3s ease;  /* Duración del hover */
```

### Autoplay Interval
En `script.JS`, línea ~41:
```javascript
setInterval(() => {
    // ... código de cambio
}, 5000);  /* 5000ms = 5 segundos. Cambiar este valor para más/menos tiempo */
```

---

## Estructura de Clases CSS

```
.carousel-container
├── .carousel
│   └── .carousel-item (con clase .active en el activo)
│       └── .carousel-media (img o video)
├── .carousel-btn.prev
├── .carousel-btn.next
└── .carousel-dots
    └── .carousel-dot (con clase .active en el activo)
```

---

## Flujo de Funcionamiento

### Cuando se hace clic en "Siguiente":
1. `nextSlide(button)` es ejecutada
2. Encuentra el contenedor del carrusel padre
3. Obtiene todos los slides e índices
4. Calcula el siguiente índice (con wrap-around)
5. Llama `goToSlide()` con el nuevo índice
6. `goToSlide()` remueve .active de todos
7. Agrega .active al slide y punto correspondiente
8. CSS aplica el fade-in automáticamente

```
nextSlide() → calculaProximoIndice() → goToSlide() → actualizaDOM()
```

---

## Estilos Responsivos

El carrusel se adapta según el tamaño de pantalla:

### Desktop (> 768px)
- Altura del carrusel: 350px
- Botones: 45px de diámetro
- Proyectos en grid de 3 columnas

### Tablet (768px - 480px)
- Altura del carrusel: 280px
- Botones: 40px de diámetro
- Proyectos en grid de 1 columna

### Mobile (< 480px)
- Altura del carrusel: 220px
- Botones: 36px de diámetro
- Espaciado reducido

---

## Cómo Cambiar el Intervalo de Autoplay

**Archivo:** `script.JS` (línea ~41)

**Actual:**
```javascript
setInterval(() => {
    // cambio de slide
}, 5000);  // 5 segundos
```

**Para 10 segundos:**
```javascript
}, 10000);  // 10 segundos (10000ms)
```

**Para 3 segundos:**
```javascript
}, 3000);  // 3 segundos (3000ms)
```

---

## Personalizar Velocidad de Transición

**Archivo:** `proyectos.css` (línea ~52)

**Actual:**
```css
.carousel-item {
    transition: opacity 0.5s ease-in-out;
}
```

**Más rápido (0.3s):**
```css
.carousel-item {
    transition: opacity 0.3s ease-in-out;
}
```

**Más lento (1s):**
```css
.carousel-item {
    transition: opacity 1s ease-in-out;
}
```

---

## Cambiar Colores del Carrusel

### Color de botones y puntos activos

**Archivo:** `proyectos.css`

**Busca:**
```css
background: rgba(201, 162, 39, 0.8);  /* Línea ~83 */
background: #C9A227;                   /* Línea ~127 */
```

**Cambia `#C9A227` a tu color:**
- `#FF6B6B` para rojo
- `#4ECDC4` para turquesa
- `#45B7D1` para azul
- `#96CEB4` para verde

---

## Desactivar Autoplay

Si quieres que el carrusel NO cambie automáticamente:

**Archivo:** `script.JS`

**Busca la sección "Auto-play del carrusel" (~línea 41)**

**Actual:**
```javascript
if (items.length > 1) {
    setInterval(() => {
        const currentActive = carousel.querySelector('.carousel-item.active');
        const currentIndex = Array.from(items).indexOf(currentActive);
        const nextIndex = (currentIndex + 1) % items.length;
        goToSlide(carouselContainer, nextIndex);
    }, 5000);
}
```

**Desactivado (comentado):**
```javascript
/*
if (items.length > 1) {
    setInterval(() => {
        const currentActive = carousel.querySelector('.carousel-item.active');
        const currentIndex = Array.from(items).indexOf(currentActive);
        const nextIndex = (currentIndex + 1) % items.length;
        goToSlide(carouselContainer, nextIndex);
    }, 5000);
}
*/
```

---

## Troubleshooting

### Los slides no cambian
- Verifica que el archivo `script.JS` esté cargado correctamente
- Abre la consola del navegador (F12) y busca errores

### Los puntos no aparecen
- Verifica que exista el elemento `.carousel-dots` dentro del contenedor
- Puede ser un problema de CSS, recarga la página

### Los videos no se reproducen
- Verifica que la ruta del archivo sea correcta
- Intenta copiando el archivo de video a la carpeta `/imagenes/`
- Algunos navegadores requieren HTTPS para ciertos videos

### Autoplay no funciona
- Algunos navegadores desactivan autoplay de video por defecto
- El carrusel de imágenes debería funcionar normalmente

---

## Optimización de Performance

### Para cargar rápido:

1. **Comprime imágenes** (máx 500KB por imagen)
2. **Usa WebP** cuando sea posible (mejor compresión)
3. **Redimensiona** antes de subir (ancho máximo 1200px)
4. **Comprime videos** (máximo 10MB, 10 segundos)

### Herramientas recomendadas:
- TinyPNG.com - Comprimir imágenes
- Cloudconvert.com - Convertir a WebP
- Handbrake - Comprimir videos
- ImageOptim - Optimizar imágenes (Mac)

---

## Notas de Compatibilidad

✅ **Chrome 90+**
✅ **Firefox 88+**
✅ **Safari 14+**
✅ **Edge 90+**
✅ **Mobile Chrome**
✅ **Mobile Safari**

---

## Licencia y Términos

Este código es parte del proyecto Qudra Constructora y está diseñado para uso interno. 
Siéntete libre de modificarlo según tus necesidades.