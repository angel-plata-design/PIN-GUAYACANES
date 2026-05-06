# Guía para Cambiar las Imágenes de la Landing Page

## 📍 Ubicación del Archivo

Las imágenes están centralizadas en un solo lugar para facilitar su actualización:

**Archivo:** `/app/frontend/src/pages/LandingPage.jsx`

## 🖼️ Cómo Cambiar las Imágenes

En la línea 8-14 del archivo `LandingPage.jsx`, encontrarás el objeto `IMAGES`:

```javascript
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
  luxury1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
  luxury2: 'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff',
  evening: 'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5',
  pool: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25'
};
```

### Pasos para Actualizar:

1. **Abre el archivo** `/app/frontend/src/pages/LandingPage.jsx`

2. **Reemplaza las URLs** con tus propias imágenes:
   - `hero`: Imagen principal de la sección hero (casa moderna)
   - `luxury1`: No se usa actualmente (reservado para futuros usos)
   - `luxury2`: No se usa actualmente (reservado para futuros usos)
   - `evening`: No se usa actualmente (reservado para futuros usos)
   - `pool`: Imagen de amenidades (alberca/piscina)

3. **Guarda el archivo** y la página se actualizará automáticamente

## 📦 Opciones para Subir tus Propias Imágenes

### Opción 1: Usar URLs Externas
- Sube tus imágenes a cualquier servicio de hosting (Cloudinary, Imgur, etc.)
- Copia la URL directa de la imagen
- Reemplaza en el objeto `IMAGES`

### Opción 2: Usar Imágenes Locales
1. Crea una carpeta: `/app/frontend/public/images/`
2. Coloca tus imágenes allí (ej: `hero.jpg`, `pool.jpg`)
3. Actualiza las URLs así:
```javascript
const IMAGES = {
  hero: '/images/hero.jpg',
  pool: '/images/pool.jpg',
  // ... resto de imágenes
};
```

## 🎨 Recomendaciones para las Imágenes

### Imagen Hero (Principal)
- **Tamaño recomendado:** 1920x1080px mínimo
- **Formato:** JPG o WebP
- **Contenido:** Casa/desarrollo residencial moderno con buena iluminación

### Imagen Pool (Amenidades)
- **Tamaño recomendado:** 800x600px mínimo
- **Formato:** JPG o WebP
- **Contenido:** Alberca, áreas comunes, amenidades del desarrollo

## 🔄 Actualizar Después de Cambiar

Después de modificar las imágenes:
1. Guarda el archivo
2. El navegador recargará automáticamente (hot reload)
3. Si no se actualizan, recarga la página manualmente

## 📞 Soporte

Si necesitas ayuda adicional para cambiar las imágenes o personalizar otros aspectos de la landing page, contacta al equipo de desarrollo.

---

**Nota:** Todas las imágenes actuales son de stock (Unsplash) y pueden ser reemplazadas libremente con imágenes reales del proyecto Guayacanes II.
