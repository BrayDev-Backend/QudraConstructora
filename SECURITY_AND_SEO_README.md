Resumen rápido de cambios y siguientes pasos para seguridad y SEO

Cambios aplicados (archivos modificados/añadidos):
- `index.HTML`: meta tags SEO, Open Graph, Twitter card, JSON-LD, CSP meta; eliminado `onsubmit` y `onclick` inline del formulario y del botón de cierre.
- `script.js`: enlazado el `submit` del formulario y el botón de cierre mediante `addEventListener` (sin handlers inline).
- `robots.txt`: añadido (apunta a `sitemap.xml`).
- `sitemap.xml`: añadido (contiene páginas principales; reemplazar dominio).

Pasos recomendados (necesarios para asegurar correctamente en producción):
1) Reemplazar `https://TU_DOMINIO/` en `sitemap.xml` y cualquier `@id`/`url` vacío del JSON-LD por el dominio real.
2) Mover la política CSP del meta tag a headers del servidor (más seguro). Ejemplos abajo.
3) Añadir estos headers en el servidor de producción (ejemplos para Apache, IIS, Firebase):

  - Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: no-referrer-when-downgrade
  - Permissions-Policy: geolocation=(), microphone=()
  - Content-Security-Policy: (ajustar según recursos externos; evitar 'unsafe-inline')

Ejemplo (`.htaccess` para Apache):

  <IfModule mod_headers.c>
    Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    Header set X-Frame-Options "DENY"
    Header set X-Content-Type-Options "nosniff"
    Header set Referrer-Policy "no-referrer-when-downgrade"
    Header set Permissions-Policy "geolocation=()"
    Header set Content-Security-Policy "default-src 'self' https:; script-src 'self' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; img-src 'self' data: https:;"
  </IfModule>

Ejemplo (`firebase.json` headers):

  {
    "hosting": {
      "headers": [
        {
          "source": "**/*.html",
          "headers": [
            {"key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload"},
            {"key": "X-Frame-Options", "value": "DENY"},
            {"key": "X-Content-Type-Options", "value": "nosniff"},
            {"key": "Referrer-Policy", "value": "no-referrer-when-downgrade"}
          ]
        }
      ]
    }
  }

Notas SEO y mejoras adicionales:
- Actualizar `index.HTML` JSON-LD `url` y `@id` con la URL real del negocio.
- Añadir meta `description` únicos en las páginas internas (servicios, proyectos, blog, artículos).
- Generar un `sitemap.xml` dinámico si el sitio cambia frecuentemente y subirlo al Search Console de Google.
- Crear y verificar la propiedad en Google Search Console y enlazar con Analytics/Indexing.

Si quieres, aplico los siguientes pasos ahora:
- Reemplazo de dominios en `sitemap.xml` y JSON-LD si me das el dominio.
- Mover CSP a un archivo `firebase.json` o `.htaccess` según tu hosting (dime qué hosting usas).
- Añadir meta `description` específicos en otras páginas (`servicios.html`, `proyectos.html`, `blog.html`).
