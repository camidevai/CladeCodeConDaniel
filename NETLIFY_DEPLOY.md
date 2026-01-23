# Guía de Deployment en Netlify

## 🚀 Deploy Rápido (5 minutos)

### Opción 1: Deploy desde GitHub (Recomendado)

1. **Ve a Netlify**
   - Abre [https://app.netlify.com](https://app.netlify.com)
   - Inicia sesión o crea una cuenta gratuita

2. **Importa el repositorio**
   - Click en "Add new site" → "Import an existing project"
   - Selecciona "Deploy with GitHub"
   - Autoriza Netlify a acceder a tu GitHub
   - Busca y selecciona: `camidevai/CladeCodeConDaniel`

3. **Configuración de Build**
   - Netlify detectará automáticamente Next.js
   - Verifica que la configuración sea:
     ```
     Build command: npm run build
     Publish directory: .next
     ```
   - El archivo `netlify.toml` ya está configurado ✅

4. **Deploy**
   - Click en "Deploy site"
   - Espera 2-3 minutos mientras se construye
   - ¡Listo! Tu sitio estará en vivo

5. **URL del sitio**
   - Netlify te dará una URL como: `https://random-name-123456.netlify.app`
   - Puedes cambiarla en: Site settings → Domain management → Options → Edit site name

---

## ⚙️ Configuración Post-Deploy

### 1. Actualizar URLs de YouTube

**IMPORTANTE:** Antes de compartir el sitio, actualiza estos placeholders:

En tu repositorio local:

1. **URL del curso completo** (`{{YOUTUBE_URL}}`):
   ```bash
   # Edita estos archivos:
   components/Hero.tsx (línea ~30)
   components/Footer.tsx (línea ~15)
   ```

2. **URL del video preview** (`{{VIDEO_PREVIEW_URL}}`):
   ```bash
   # Edita este archivo:
   components/VideoPreview.tsx (línea ~20)
   # Usa formato: https://www.youtube.com/embed/TU_VIDEO_ID
   ```

3. **Sube los cambios**:
   ```bash
   git add .
   git commit -m "Update YouTube URLs"
   git push
   ```

4. **Deploy automático**:
   - Netlify detectará el push y re-deployará automáticamente
   - Espera 2-3 minutos

### 2. Configurar Dominio Personalizado (Opcional)

1. Ve a: Site settings → Domain management
2. Click en "Add custom domain"
3. Ingresa tu dominio (ej: `claudecode.com`)
4. Sigue las instrucciones para actualizar DNS
5. Netlify configurará SSL automáticamente (HTTPS)

### 3. Variables de Entorno (Si las necesitas)

Si agregas integración con servicios externos:

1. Ve a: Site settings → Environment variables
2. Click en "Add a variable"
3. Agrega tus variables (ej: API keys)
4. Re-deploya el sitio

---

## 📊 Configuración Incluida

El archivo `netlify.toml` ya está configurado con:

✅ **Build command**: `npm run build`  
✅ **Publish directory**: `.next`  
✅ **Next.js plugin**: Optimizaciones automáticas  
✅ **Node version**: 20 (latest LTS)  
✅ **Redirects**: Configurados para Next.js routing  

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
# 1. Haz tus cambios en el código
# 2. Commit y push
git add .
git commit -m "Descripción de cambios"
git push

# 3. Netlify re-deploya automáticamente
# 4. Espera 2-3 minutos
# 5. ¡Cambios en vivo!
```

---

## 🎯 Checklist Pre-Launch

Antes de compartir tu sitio:

- [ ] URLs de YouTube actualizadas
- [ ] Links de redes sociales actualizados
- [ ] Imagen Open Graph agregada (`public/og-image.jpg`)
- [ ] Email form integrado (o placeholder funcional)
- [ ] Probado en mobile
- [ ] Probado en desktop
- [ ] Todos los links funcionan
- [ ] Video preview carga correctamente

---

## 🆘 Troubleshooting

### Build falla en Netlify

**Error: "Command failed with exit code 1"**
- Revisa los logs de build en Netlify
- Asegúrate que `package.json` tenga todas las dependencias
- Verifica que no haya errores de TypeScript

**Solución:**
```bash
# Localmente, verifica que el build funcione:
npm run build

# Si hay errores, corrígelos y push:
git add .
git commit -m "Fix build errors"
git push
```

### Sitio muestra página en blanco

**Causa común:** Rutas incorrectas o errores en componentes

**Solución:**
1. Revisa los logs de build en Netlify
2. Verifica que todos los imports sean correctos
3. Asegúrate que `netlify.toml` esté en la raíz del proyecto

### Video no carga

**Causa:** URL de YouTube incorrecta

**Solución:**
- Usa formato embed: `https://www.youtube.com/embed/VIDEO_ID`
- NO uses: `https://www.youtube.com/watch?v=VIDEO_ID`

---

## 📈 Optimizaciones Adicionales

### 1. Habilitar Analytics

En Netlify:
- Ve a: Site settings → Analytics
- Activa Netlify Analytics (gratis para 1M pageviews)

### 2. Optimizar Performance

Ya incluido:
- ✅ Next.js optimizaciones automáticas
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification

### 3. Configurar Formularios

Si quieres usar Netlify Forms para el email:

1. Agrega a `components/EmailModal.tsx`:
   ```tsx
   <form name="email-capture" method="POST" data-netlify="true">
     <input type="hidden" name="form-name" value="email-capture" />
     {/* resto del form */}
   </form>
   ```

2. Ve a: Site settings → Forms
3. Verás los submissions ahí

---

## 🎉 ¡Listo!

Tu sitio está en vivo en Netlify con:
- ✅ Deploy automático desde GitHub
- ✅ HTTPS gratis
- ✅ CDN global
- ✅ Builds automáticos en cada push

**URL de tu sitio:** Revisa en el dashboard de Netlify

**Próximos pasos:**
1. Actualiza las URLs de YouTube
2. Configura dominio personalizado (opcional)
3. ¡Comparte tu landing page!

---

## 📚 Recursos

- [Netlify Docs](https://docs.netlify.com)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)

