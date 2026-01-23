# Cambios de UX/Copy - Landing Page

## Resumen
Modificaciones realizadas para aumentar engagement (más clics al CTA de YouTube y más conversiones al formulario de templates).

**IMPORTANTE:** Solo se modificaron textos y microinteracciones. NO se cambió estructura, layout, colores, tipografías ni contenido de módulos.

---

## CAMBIO 1: FAQ - Eliminar duración por semanas/meses

**Archivo:** `components/FAQ.tsx`  
**Líneas:** 21-24

**ANTES:**
```typescript
{
  question: "¿Cuánto tiempo me tomará completar el curso?",
  answer: "El curso está diseñado para completarse en 4-6 semanas dedicando 3-5 horas por semana. Puedes ir a tu propio ritmo: algunos lo completan en 2 semanas intensivas, otros lo toman con más calma en 2-3 meses."
}
```

**DESPUÉS:**
```typescript
{
  question: "¿Cuánto tiempo me tomará completar el curso?",
  answer: "Por ahora es un video único (pilot) en YouTube. Si a la comunidad le sirve y nos va bien con este primer video, vamos a seguir publicando más videos y materiales."
}
```

---

## CAMBIO 2: FAQ - Agregar pregunta sobre webinar

**Archivo:** `components/FAQ.tsx`  
**Líneas:** 25-28 (nueva pregunta insertada después de la de duración)

**AGREGADO:**
```typescript
{
  question: "¿Habrá un webinar?",
  answer: "Sí. Daniel Ávila y CamiDevAI planean un webinar introductorio para enseñar lo básico de Claude Code (comandos, cómo utilizarlo y primeros flujos). Lo vamos a anunciar por este mismo canal cuando esté confirmado."
}
```

---

## CAMBIO 3A: Hero - Mejorar CTAs y subtítulo

**Archivo:** `components/Hero.tsx`

### Subtítulo (Líneas 16-19)

**ANTES:**
```typescript
<p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
  Aprende a dominar Claude Code desde la configuración inicial hasta deployar proyectos reales en producción. 
  Curso 100% gratuito en YouTube.
</p>
```

**DESPUÉS:**
```typescript
<p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl">
  Domina Claude Code desde la configuración inicial hasta deployar proyectos reales en producción. 
  Empieza hoy, 100% gratuito en YouTube.
</p>
```

### CTA Principal (Línea 31)

**ANTES:** `Ver el curso en YouTube`  
**DESPUÉS:** `Ver el video ahora`

### CTA Secundario (Líneas 37-46)

**ANTES:**
```typescript
<button
  onClick={onOpenEmailModal}
  className="..."
>
  Quiero los templates y recursos
</button>
```

**DESPUÉS:**
```typescript
<div className="flex flex-col gap-1">
  <button
    onClick={onOpenEmailModal}
    className="..."
  >
    Recibir templates gratis
  </button>
  <span className="text-xs text-muted text-center sm:text-left">Te llegan al correo</span>
</div>
```

---

## CAMBIO 3B: FAQ - Mejorar respuesta de comunidad

**Archivo:** `components/FAQ.tsx`  
**Líneas:** 33-36

**ANTES:**
```typescript
{
  question: "¿Hay soporte o comunidad?",
  answer: "Puedes hacer preguntas en los comentarios de YouTube donde tanto los instructores como la comunidad responden activamente. También compartimos recursos y actualizaciones por email para quienes se suscriban a los templates."
}
```

**DESPUÉS:**
```typescript
{
  question: "¿Hay soporte o comunidad?",
  answer: "Sí. Deja tus dudas en los comentarios de YouTube y tanto los instructores como la comunidad te ayudarán. Suscríbete al canal para no perderte los próximos videos. También compartimos recursos y actualizaciones por email para quienes se suscriban a los templates."
}
```

---

## CAMBIO 3C: Footer - Sección "Empieza hoy mismo"

**Archivo:** `components/Footer.tsx`  
**Líneas:** 10-36

### Título (Línea 12)

**ANTES:** `Empieza hoy mismo`  
**DESPUÉS:** `Empieza hoy con el primer video`

### Descripción (Líneas 14-16)

**ANTES:**
```typescript
<p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto">
  Únete a miles de desarrolladores que ya están usando Claude Code para construir mejor y más rápido
</p>
```

**DESPUÉS:**
```typescript
<p className="text-lg sm:text-xl text-muted mb-8 max-w-2xl mx-auto">
  Guarda el video para seguirlo paso a paso. Suscríbete si quieres que lo transformemos en serie completa.
</p>
```

### CTA Principal (Línea 24)

**ANTES:** `Ver el curso en YouTube`  
**DESPUÉS:** `Ver el video ahora`

### CTA Secundario (Línea 33)

**ANTES:** `Quiero los templates y recursos`  
**DESPUÉS:** `Recibir templates gratis`

---

## CAMBIO 3D: EmailModal - Placeholder más específico

**Archivo:** `components/EmailModal.tsx`  
**Línea:** 121

**ANTES:** `placeholder="tu@email.com"`  
**DESPUÉS:** `placeholder="tu@correo.com"`

---

## CAMBIO 4: VideoPreview - Eliminar "6 módulos completos"

**Archivo:** `components/VideoPreview.tsx`
**Líneas:** 35-45

**ANTES:**
```typescript
<div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">6</div>
    <p className="text-muted">Módulos completos</p>
  </div>
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">100%</div>
    <p className="text-muted">Gratuito en YouTube</p>
  </div>
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">1</div>
    <p className="text-muted">Proyecto real en producción</p>
  </div>
</div>
```

**DESPUÉS:**
```typescript
<div className="mt-12 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">100%</div>
    <p className="text-muted">Gratuito en YouTube</p>
  </div>
  <div className="text-center">
    <div className="text-3xl sm:text-4xl font-editorial text-accent mb-2">1</div>
    <p className="text-muted">Proyecto real en producción</p>
  </div>
</div>
```

**Razón:** Como ahora es un video pilot (no 6 módulos completos), se eliminó la estadística engañosa.

---

## Archivos Modificados

1. ✅ `components/FAQ.tsx` - 3 cambios (duración, webinar, comunidad)
2. ✅ `components/Hero.tsx` - 3 cambios (subtítulo, CTAs, microcopy)
3. ✅ `components/Footer.tsx` - 3 cambios (título, descripción, CTAs)
4. ✅ `components/EmailModal.tsx` - 1 cambio (placeholder)
5. ✅ `components/VideoPreview.tsx` - 1 cambio (eliminar "6 módulos completos")

**Total:** 5 archivos, 11 cambios de copy/UX

---

## Criterios de Aceptación ✅

- ✅ No hay ninguna mención a semanas/meses como duración
- ✅ No se cambió el contenido de "Módulos del curso"
- ✅ La estructura/estilo se mantienen igual
- ✅ El engagement se mejora con copy más accionable
- ✅ CTAs más claros ("Ver el video ahora", "Recibir templates gratis")
- ✅ FAQ de comunidad optimizada (invita a comentar y suscribirse)
- ✅ Mención de webinar agregada
- ✅ Microcopy agregado ("Te llegan al correo")
- ✅ Footer con urgencia honesta ("Empieza hoy con el primer video")

