# 🚀 GUÍA RÁPIDA DE INICIO (5 MINUTOS)

## ¿Qué he hecho? 

He creado una **sección de proyectos profesional** con carruseles de imágenes y videos que cambian automáticamente. Todo está listo, solo necesitas agregar tus fotos y videos.

---

## ⚡ TRES PASOS RÁPIDOS

### PASO 1: Prepara tus archivos (2 min)
- [ ] Selecciona fotos de tus proyectos
- [ ] Graba videos (máximo 10 segundos)
- [ ] Comprime todo en TinyPNG.com
- [ ] Copia archivos a la carpeta `/imagenes/`

**Ejemplo de nombres:**
```
imagenes/
├── hotel-manila-1.jpg
├── hotel-manila-2.jpg
├── hotel-manila-video.mp4
├── autopista-1.jpg
└── parque-centenario-1.jpg
```

### PASO 2: Edita proyectos.html (2 min)
1. Abre `proyectos.html` en tu editor
2. Busca: `src="imagenes/placeholder.jpg"`
3. Reemplaza con tu archivo: `src="imagenes/hotel-manila-1.jpg"`
4. ¡Repite para cada proyecto!

### PASO 3: Prueba (1 min)
1. Abre `proyectos.html` en tu navegador
2. Haz clic en los botones ❮ ❯
3. Espera a que cambie automáticamente
4. ¡Listo!

---

## 🎨 LO QUE VAS A VER

```
┌─────────────────────────────────┐
│   NUESTROS PROYECTOS            │
├─────────────────────────────────┤
│ ┌──────┐  ┌──────┐  ┌──────┐   │
│ │Foto 1│  │Foto 2│  │Foto 3│   │
│ │  ❮❯  │  │  ❮❯  │  │  ❮❯  │   │
│ │ ● ○ ○ │  │ ● ○ ○ │  │ ● ○ ○ │   │
│ │       │  │       │  │       │   │
│ │Hotel  │  │Autopista│Parque  │   │
│ │Manila │  │Río Mag │Centenario│  │
│ └──────┘  └──────┘  └──────┘   │
└─────────────────────────────────┘
```

---

## 📸 CÓDIGO PARA AGREGAR IMÁGENES

### Opción 1: Una imagen por proyecto
```html
<div class="carousel-item active" data-index="0">
    <img src="imagenes/mi-imagen.jpg" alt="Descripción" class="carousel-media">
</div>
```

### Opción 2: Múltiples imágenes
```html
<div class="carousel-item active" data-index="0">
    <img src="imagenes/foto-1.jpg" alt="Foto 1" class="carousel-media">
</div>
<div class="carousel-item" data-index="1">
    <img src="imagenes/foto-2.jpg" alt="Foto 2" class="carousel-media">
</div>
<div class="carousel-item" data-index="2">
    <img src="imagenes/foto-3.jpg" alt="Foto 3" class="carousel-media">
</div>
```

### Opción 3: Agregar un video
```html
<div class="carousel-item" data-index="1">
    <video class="carousel-media" controls>
        <source src="imagenes/video.mp4" type="video/mp4">
    </video>
</div>
```

---

## 🎯 ARCHIVOS PRINCIPALES

| Archivo | Qué es | Dónde está |
|---------|--------|-----------|
| `proyectos.html` | Página de proyectos | Raíz |
| `css/proyectos.css` | Estilos de proyectos | Carpeta css/ |
| `script.JS` | Lógica del carrusel | Raíz |
| `/imagenes/` | Tus fotos y videos | Carpeta imagenes/ |

---

## ✅ CHECKLIST

```
Tengo que:
□ Preparar mis imágenes (JPG/PNG, máx 500KB)
□ Preparar mis videos (MP4, máx 10 segundos)
□ Copiar archivos a /imagenes/
□ Abrir proyectos.html en mi editor
□ Reemplazar las rutas de archivo
□ Guardar el archivo
□ Abrir en navegador y probar
□ ¡Celebrar! 🎉
```

---

## 🎬 INFORMACIÓN DE PROYECTOS

**Proyecto 1: Hotel Manila**
- Remodelación y adecuación de terraza a suits
- Medellín, Antioquia | 2025

**Proyecto 2: Autopista Río Magdalena**
- Supervisión técnica
- Vegachi, Antioquia | 2022

**Proyecto 3: Remodelación Parque Centenario**
- Renovación del espacio público
- Ibagué, Tolima | 2025 / Actualidad

**Proyecto 4: Cambio de Cubierta USI San Francisco**
- Remodelación de cobertura
- Ibagué, Tolima | 2025 / Actualidad

---

## 💡 TIPS

✅ Usa nombres descriptivos
```
✅ hotel-manila-entrada.jpg
❌ foto.jpg
```

✅ Sin espacios en los nombres
```
✅ parque-centenario-1.jpg
❌ parque centenario 1.jpg
```

✅ Comprime antes de subir
```
Usa: TinyPNG.com (gratis)
Máximo: 500KB por imagen
```

✅ Videos cortos
```
Máximo: 10 segundos
Formato: MP4 (H.264)
Máximo: 10MB de peso
```

---

## 🔧 PERSONALIZACIÓN

### Cambiar velocidad automática
En `script.JS`, busca `5000` y cambia:
- `3000` = 3 segundos
- `5000` = 5 segundos (actual)
- `10000` = 10 segundos

### Cambiar color del botón
En `proyectos.css`, busca `#C9A227` y cambia a:
- `#FF6B6B` = Rojo
- `#4ECDC4` = Turquesa
- `#45B7D1` = Azul

---

## 📚 DOCUMENTACIÓN COMPLETA

Si necesitas más detalles, tengo:

- **INSTRUCCIONES_CARRUSEL.md** - Guía paso a paso
- **EJEMPLOS_CARRUSEL.md** - Código listo para copiar
- **REFERENCIA_TECNICA.md** - Detalles técnicos
- **CODIGO_EJEMPLO.html** - Ejemplos con errores comunes
- **CHECKLIST_VALIDACION.md** - Validación completa
- **RESUMEN_COMPLETO.md** - Resumen general

---

## 🚀 ¡COMIENZA AHORA!

1. Prepara tus imágenes/videos
2. Cópialos a `/imagenes/`
3. Abre `proyectos.html`
4. Busca `src="imagenes/placeholder.jpg"`
5. Reemplaza con tu archivo
6. ¡Guarda y prueba!

---

## ❓ PROBLEMAS COMUNES

**Las imágenes no aparecen:**
- Verifica que el archivo esté en `/imagenes/`
- Verifica que el nombre sea exacto
- Recarga la página (Ctrl+F5)

**El carrusel no cambia:**
- Recarga la página (Ctrl+F5)
- Verifica que `script.JS` esté cargado
- Abre consola (F12) para ver errores

**Se ve extraño en móvil:**
- Es normal, está optimizado para móvil
- Prueba en un teléfono real

---

## 🎉 ¡LISTO!

Tienes todo lo que necesitas. Solo agrega tus imágenes y videos.

**Próximos pasos:**
1. Prepara archivos
2. Edita `proyectos.html`
3. Prueba en navegador
4. Publica en tu sitio

¿Necesitas ayuda? Lee la documentación o revisa los ejemplos.

**¡Éxito! 🚀**