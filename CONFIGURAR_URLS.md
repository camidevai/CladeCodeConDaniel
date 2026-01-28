# Configuración de URLs - Página de Inscripción

## 📋 URLs que necesitas configurar

Para que la página de inscripción funcione correctamente, necesitas reemplazar los siguientes placeholders con las URLs reales:

---

## 1. URL del Grupo de WhatsApp

**Archivo:** `app/inscripcion/page.tsx`  
**Línea:** ~95  
**Placeholder:** `{{WHATSAPP_GROUP_URL}}`

**Cómo obtener el link del grupo:**
1. Abre WhatsApp Web o la app móvil
2. Ve al grupo que creaste para el curso
3. Toca el nombre del grupo → "Invitar mediante enlace"
4. Copia el enlace (será algo como: `https://chat.whatsapp.com/XXXXXXXXXX`)

**Reemplazar:**
```tsx
// ANTES:
href="{{WHATSAPP_GROUP_URL}}"

// DESPUÉS:
href="https://chat.whatsapp.com/TU_CODIGO_DE_GRUPO"
```

---

## 2. URL del Video de Agradecimiento

**Archivo:** `app/inscripcion/page.tsx`  
**Línea:** ~58  
**Placeholder:** `{{THANK_YOU_VIDEO_URL}}`

**Opciones para el video:**

### Opción A: YouTube (Recomendado)
1. Sube el video de agradecimiento a YouTube
2. Haz clic en "Compartir" → "Insertar"
3. Copia solo la URL del `src` (será algo como: `https://www.youtube.com/embed/VIDEO_ID`)

**Reemplazar:**
```tsx
// ANTES:
src="{{THANK_YOU_VIDEO_URL}}"

// DESPUÉS:
src="https://www.youtube.com/embed/TU_VIDEO_ID"
```

### Opción B: Loom
1. Graba el video en Loom
2. Copia el enlace de inserción (embed)
3. Usa la URL del embed

**Reemplazar:**
```tsx
// ANTES:
src="{{THANK_YOU_VIDEO_URL}}"

// DESPUÉS:
src="https://www.loom.com/embed/TU_VIDEO_ID"
```

### Opción C: Vimeo
1. Sube el video a Vimeo
2. Copia el enlace de inserción
3. Usa la URL del embed

**Reemplazar:**
```tsx
// ANTES:
src="{{THANK_YOU_VIDEO_URL}}"

// DESPUÉS:
src="https://player.vimeo.com/video/TU_VIDEO_ID"
```

---

## 3. Cómo hacer los cambios

### Método 1: Editar directamente en el código

1. Abre el archivo `app/inscripcion/page.tsx`
2. Busca `{{WHATSAPP_GROUP_URL}}` y reemplázalo con tu URL de WhatsApp
3. Busca `{{THANK_YOU_VIDEO_URL}}` y reemplázalo con tu URL de video
4. Guarda el archivo
5. Haz commit y push:
   ```bash
   git add app/inscripcion/page.tsx
   git commit -m "Configure WhatsApp and video URLs for inscription page"
   git push
   ```

### Método 2: Usar variables de entorno (Avanzado)

Si prefieres usar variables de entorno:

1. Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   NEXT_PUBLIC_WHATSAPP_GROUP_URL=https://chat.whatsapp.com/TU_CODIGO
   NEXT_PUBLIC_THANK_YOU_VIDEO_URL=https://www.youtube.com/embed/TU_VIDEO_ID
   ```

2. Actualiza `app/inscripcion/page.tsx` para usar las variables:
   ```tsx
   href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP_URL}
   src={process.env.NEXT_PUBLIC_THANK_YOU_VIDEO_URL}
   ```

3. Configura las mismas variables en Netlify:
   - Ve a tu sitio en Netlify
   - Site settings → Environment variables
   - Agrega las dos variables
   - Redeploy el sitio

---

## 4. Verificar que funciona

1. **Localmente:**
   ```bash
   npm run dev
   ```
   Abre http://localhost:3000/inscripcion

2. **En producción:**
   - Espera a que Netlify termine el deploy
   - Visita https://curso-claude-code.netlify.app/inscripcion
   - Verifica que:
     - ✅ El video se reproduce correctamente
     - ✅ El botón de WhatsApp abre el grupo correcto

---

## 5. Contenido sugerido para el video de agradecimiento

**Duración:** 1-2 minutos

**Guión sugerido:**
1. **Saludo:** "¡Hola! Soy [Tu nombre] y quiero darte la bienvenida al curso de Claude Code"
2. **Agradecimiento:** "Gracias por inscribirte, estoy muy emocionado de tenerte aquí"
3. **Próximos pasos:** "Asegúrate de unirte al grupo de WhatsApp para recibir la fecha confirmada de la clase"
4. **Preparación:** "Mientras tanto, si aún no tienes Claude Code instalado, te recomiendo que lo hagas"
5. **Cierre:** "Nos vemos pronto en la clase. ¡Prepárate para dominar Claude Code!"

---

## 6. Texto sugerido para el grupo de WhatsApp

**Mensaje de bienvenida del grupo:**

```
👋 ¡Bienvenido al curso de Claude Code!

📅 Fecha de la clase: [Por confirmar]
⏰ Hora: [Por confirmar]

📋 Mientras tanto:
✅ Asegúrate de tener Claude Code instalado
✅ Prepara tus preguntas
✅ Activa las notificaciones de este grupo

Te avisaremos cuando esté confirmada la fecha. ¡Nos vemos pronto! 🚀
```

---

## 7. Checklist final

Antes de lanzar la página de inscripción:

- [ ] Video de agradecimiento grabado y subido
- [ ] Grupo de WhatsApp creado
- [ ] URL de WhatsApp configurada en `page.tsx`
- [ ] URL de video configurada en `page.tsx`
- [ ] Cambios pusheados a GitHub
- [ ] Deploy completado en Netlify
- [ ] Página `/inscripcion` probada en producción
- [ ] Video se reproduce correctamente
- [ ] Botón de WhatsApp funciona
- [ ] Mensaje de bienvenida configurado en el grupo

---

## 🆘 Problemas comunes

### El video no se reproduce
- Verifica que la URL sea de tipo "embed" (no la URL normal del video)
- Asegúrate de que el video sea público
- Revisa la consola del navegador para ver errores

### El botón de WhatsApp no funciona
- Verifica que el enlace sea del tipo `https://chat.whatsapp.com/...`
- Asegúrate de que el grupo sea público o que el enlace no haya expirado

### Los cambios no se ven en producción
- Espera 2-3 minutos después del push (Netlify tarda en deployar)
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Verifica que el commit se haya pusheado correctamente a GitHub

---

¿Necesitas ayuda? Revisa los logs de Netlify o la consola del navegador para más detalles.

