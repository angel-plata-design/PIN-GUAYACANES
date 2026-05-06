# Guía para Cambiar las Imágenes de la Landing Page

## 📍 Ubicación del Archivo

Las imágenes están centralizadas en un solo lugar para facilitar su actualización:

**Archivo:** `/app/frontend/src/pages/LandingPage.jsx`

## 🖼️ Cómo Cambiar las Imágenes

En la línea 8-14 del archivo `LandingPage.jsx`, encontrarás el objeto `IMAGES`:

```javascript
const IMAGES = {
  hero: '/images/entrada-1.jpg',
  entrada2: '/images/entrada-2.jpg',
  vistaAerea: '/images/vista-aerea.jpg',
  entradaNoche: '/images/entrada-noche.jpg',
  amenidadesAerea: '/images/amenidades-aerea.jpg'
};
```

### 📁 Imágenes Actuales (Reales del Proyecto)

Todas las imágenes están en la carpeta: `/app/frontend/public/images/`

- `entrada-1.jpg` - Entrada principal del desarrollo (usado en Hero)
- `entrada-2.jpg` - Vista alternativa de la entrada
- `vista-aerea.jpg` - Vista aérea de casa con amenidades
- `entrada-noche.jpg` - Entrada iluminada de noche
- `amenidades-aerea.jpg` - Vista aérea de amenidades (alberca, canchas, etc.) - usado en sección amenidades

### Pasos para Actualizar:

#### Opción 1: Reemplazar Archivos Existentes
1. Ve a la carpeta `/app/frontend/public/images/`
2. Reemplaza los archivos JPG con tus nuevas imágenes
3. **Mantén los mismos nombres** para que funcione automáticamente
4. La página se actualizará automáticamente

#### Opción 2: Agregar Nuevas Imágenes
1. Coloca tus nuevas imágenes en `/app/frontend/public/images/`
2. Abre `/app/frontend/src/pages/LandingPage.jsx`
3. Actualiza las rutas en el objeto `IMAGES`:
```javascript
const IMAGES = {
  hero: '/images/tu-imagen-hero.jpg',
  entrada2: '/images/tu-imagen-2.jpg',
  vistaAerea: '/images/tu-imagen-3.jpg',
  entradaNoche: '/images/tu-imagen-4.jpg',
  amenidadesAerea: '/images/tu-imagen-amenidades.jpg'
};
```
4. Guarda el archivo

## 🎨 Recomendaciones para las Imágenes

### Imagen Hero (Principal)
- **Tamaño recomendado:** 1920x1080px mínimo
- **Formato:** JPG o WebP
- **Peso:** Máximo 500KB para optimizar carga
- **Contenido:** Entrada principal o vista más atractiva del desarrollo

### Imagen Amenidades Aérea
- **Tamaño recomendado:** 1200x800px mínimo
- **Formato:** JPG o WebP
- **Peso:** Máximo 400KB
- **Contenido:** Vista aérea mostrando alberca, canchas, áreas verdes

## 🔄 Actualizar Después de Cambiar

Después de modificar las imágenes:
1. Si reemplazaste archivos con el mismo nombre: recarga la página (Ctrl+R o Cmd+R)
2. Si cambiaste nombres en el código: guarda el archivo y la página recargará automáticamente
3. Si no ves cambios, presiona Ctrl+Shift+R (o Cmd+Shift+R) para recargar sin caché

## 💡 Consejos para Optimizar Imágenes

Antes de subir nuevas imágenes, optimízalas para web:
- Usa herramientas como TinyPNG, Squoosh, o ImageOptim
- Mantén el tamaño de archivo bajo (idealmente < 500KB)
- Usa formato WebP si es posible (mejor calidad con menos peso)
- Asegúrate de que las imágenes sean claras y de alta calidad

## 📞 Soporte

Si necesitas ayuda adicional para cambiar las imágenes o personalizar otros aspectos de la landing page, contacta al equipo de desarrollo.

---

**Nota:** Las imágenes actuales son fotos reales del proyecto Guayacanes II. Si necesitas usar diferentes vistas o ángulos, simplemente reemplázalas siguiendo los pasos anteriores.

