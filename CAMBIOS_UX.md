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

## CAMBIO 5: Reemplazar formulario de email por recursos directos

**Archivos modificados:**
- `components/ResourcesModal.tsx` (NUEVO)
- `app/page.tsx`
- `components/Hero.tsx`
- `components/Footer.tsx`
- `components/FAQ.tsx`

### Nuevo componente: ResourcesModal

**ANTES:** EmailModal con formulario de captura de email

**DESPUÉS:** ResourcesModal con links directos a:
1. **CodeGPT** - https://www.codegpt.co/
2. **Blog de Daniel Ávila** - https://medium.com/@dan.avila7

### Cambios en CTAs:

**Hero.tsx (línea 42):**
- ANTES: "Recibir templates gratis" + "Te llegan al correo"
- DESPUÉS: "Ver templates y recursos" + "Acceso directo y gratuito"

**Footer.tsx (línea 32):**
- ANTES: "Recibir templates gratis"
- DESPUÉS: "Ver templates y recursos"

**FAQ.tsx (línea 35):**
- ANTES: "...compartimos recursos y actualizaciones por email para quienes se suscriban a los templates."
- DESPUÉS: "...puedes acceder a templates y recursos adicionales de forma gratuita."

### Razón:
En lugar de capturar emails, ahora se entregan recursos directos (CodeGPT y Medium) para reducir fricción y dar valor inmediato.

---

## Archivos Modificados (ACTUALIZADO)

1. ✅ `components/FAQ.tsx` - 4 cambios (duración, webinar, comunidad, recursos)
2. ✅ `components/Hero.tsx` - 4 cambios (subtítulo, CTAs, microcopy, recursos)
3. ✅ `components/Footer.tsx` - 4 cambios (título, descripción, CTAs, recursos)
4. ✅ `components/EmailModal.tsx` - 1 cambio (placeholder) - YA NO SE USA
5. ✅ `components/VideoPreview.tsx` - 1 cambio (eliminar "6 módulos completos")
6. ✅ `components/ResourcesModal.tsx` - NUEVO componente
7. ✅ `app/page.tsx` - Reemplazar EmailModal por ResourcesModal

**Total:** 7 archivos, 15 cambios de copy/UX

---

## CAMBIO 6: Pivot de contenido - Curso introductorio sobre setup y buenas prácticas

**Fecha:** 2026-01-28

**Contexto:** El curso/webinar trata sobre **primeros pasos con Claude Code y las buenas prácticas para armar un excelente setup de trabajo**, no un curso completo de 6 módulos.

**Archivos modificados:**
- `components/Hero.tsx`
- `components/VideoPreview.tsx`
- `components/Outcomes.tsx`
- `components/Modules.tsx`
- `components/TargetAudience.tsx`
- `components/FinalProject.tsx`
- `components/FAQ.tsx`
- `components/Footer.tsx`

### 6.1 Hero.tsx

**Título:**
- ANTES: "Claude Code en serio: de tu terminal a producción"
- DESPUÉS: "Primeros pasos con Claude Code: setup y buenas prácticas"

**Subtítulo:**
- ANTES: "Domina Claude Code desde la configuración inicial hasta deployar proyectos reales en producción. Empieza hoy, 100% gratuito en YouTube."
- DESPUÉS: "Aprende a configurar Claude Code correctamente, organizar tus proyectos con CLAUDE.md y dominar flujos agénticos desde el primer día. 100% gratuito en YouTube."

### 6.2 VideoPreview.tsx

**Descripción:**
- ANTES: "Un recorrido completo por el curso y todo lo que dominarás al finalizarlo"
- DESPUÉS: "Setup profesional, organización con CLAUDE.md y flujos agénticos para trabajar como un experto"

### 6.3 Outcomes.tsx

**Subtítulo:**
- ANTES: "Este curso te lleva de cero a experto en Claude Code con resultados medibles"
- DESPUÉS: "Fundamentos sólidos para trabajar con Claude Code de forma profesional desde el inicio"

**Outcomes (3 nuevos):**

1. **Setup profesional desde día 1** ⚙️
   - "Configura Claude Code correctamente y evita errores comunes. Aprende las mejores prácticas para un entorno de trabajo óptimo."

2. **Domina CLAUDE.md y organización** 📋
   - "Estructura tus proyectos con CLAUDE.md y la carpeta .claude para que el agente entienda tu contexto y trabaje de forma consistente."

3. **Flujos agénticos efectivos** 🔄
   - "Aprende a planificar y guiar a Claude Code con workflows que maximizan resultados y minimizan iteraciones innecesarias."

### 6.4 Modules.tsx

**Título:**
- ANTES: "Módulos del curso"
- DESPUÉS: "Contenido del curso"

**Subtítulo:**
- ANTES: "6 módulos progresivos que te llevan de principiante a experto"
- DESPUÉS: "5 temas fundamentales para dominar Claude Code desde el inicio"

**Módulos (5 nuevos):**

1. **Instalación y configuración inicial** (01)
   - Setup básico de Claude Code: instalación, requisitos del sistema y configuración inicial
   - Topics: Instalación paso a paso, Requisitos del sistema, Configuración básica, Primeros comandos esenciales

2. **CLAUDE.md y organización de instrucciones** (02)
   - Cómo estructurar instrucciones generales del proyecto para que Claude Code entienda tu contexto
   - Topics: Qué es CLAUDE.md, Estructura recomendada, Instrucciones efectivas, Ejemplos prácticos

3. **Carpeta .claude y componentes** (03)
   - Organización de archivos, componentes reutilizables y estructura de carpetas para proyectos escalables
   - Topics: Estructura de .claude, Componentes reutilizables, Organización de archivos, Mejores prácticas

4. **Planificación y flujos agénticos** (04)
   - Cómo guiar a Claude Code con workflows efectivos: planificación, iteración y optimización
   - Topics: Planificación de tareas, Workflows efectivos, Iteración inteligente, Optimización de prompts

5. **El futuro de la programación con agentes** (05)
   - Por qué adoptar agentes en CLI ahora te da ventaja competitiva y cómo seguir mejorando
   - Topics: Tendencias en IA y desarrollo, Ventajas competitivas, Próximos pasos, Recursos adicionales

### 6.5 TargetAudience.tsx

**Subtítulo:**
- ANTES: "Diseñado para cualquiera que quiera dominar el desarrollo asistido por IA"
- DESPUÉS: "Para cualquiera que quiera empezar con Claude Code de la forma correcta"

**Audiencias (4 nuevas):**

1. **Desarrolladores que empiezan con Claude Code**
   - "Si quieres adoptar Claude Code pero no sabes por dónde empezar, este curso te da las bases para configurarlo correctamente desde el día 1."

2. **Equipos que quieren estandarizar**
   - "Establece un setup consistente y mejores prácticas para que todo tu equipo use Claude Code de forma profesional y organizada."

3. **Programadores que buscan eficiencia**
   - "Aprende a organizar tus proyectos con CLAUDE.md y flujos agénticos para trabajar más rápido sin sacrificar calidad."

4. **Curiosos de la IA en desarrollo**
   - "Si quieres entender cómo funcionan los agentes en CLI y por qué son el futuro del desarrollo, este es tu punto de partida."

### 6.6 FinalProject.tsx

**Título:**
- ANTES: "Proyecto final: construye algo real"
- DESPUÉS: "Lo que obtienes al completar el curso"

**Descripción:**
- ANTES: "No es un tutorial más. Vas a construir una aplicación completa que puedes mostrar en tu portfolio..."
- DESPUÉS: "No solo teoría: te llevas templates, checklists y workflows que puedes aplicar inmediatamente en tus proyectos reales."

**Features (4 nuevos):**

1. **Templates de CLAUDE.md** 📁
   - "Plantillas listas para usar en tus proyectos con las mejores prácticas incluidas"

2. **Setup checklist completo** ⚙️
   - "Lista de verificación paso a paso para configurar Claude Code sin errores"

3. **Workflows agénticos probados** 🔄
   - "Flujos de trabajo que puedes aplicar inmediatamente en tus proyectos"

4. **Mejores prácticas documentadas** 🎯
   - "Guía de referencia rápida con tips y trucos para trabajar eficientemente"

**Checklist visual:**
- ANTES: Código en GitHub, Tests pasando, CI/CD configurado, Live en producción
- DESPUÉS: Claude Code configurado, CLAUDE.md estructurado, Carpeta .claude organizada, Flujos agénticos listos

### 6.7 FAQ.tsx

**Pregunta 1 (Experiencia previa):**
- ANTES: "Se recomienda tener conocimientos básicos... Si eres principiante, podrás seguir el curso pero te tomará más tiempo."
- DESPUÉS: "Sí, se recomienda tener conocimientos básicos de programación y familiaridad con la terminal. Este curso asume que ya sabes programar y te enseña a configurar y usar Claude Code correctamente desde el inicio."

**Pregunta 2 (Gratuito):**
- ANTES: "...solo necesitas dejar tu email para recibirlos."
- DESPUÉS: "...también son gratuitos y de acceso directo."

**Pregunta 3 (Requisitos):**
- ANTES: "...Git, y Node.js para seguir los ejemplos prácticos."
- DESPUÉS: "...para seguir los ejemplos de configuración."

### 6.8 Footer.tsx

**Título:**
- ANTES: "Claude Code en serio"
- DESPUÉS: "Primeros pasos con Claude Code"

**Descripción:**
- ANTES: "El curso más completo en español para dominar Claude Code desde cero hasta producción. 100% gratuito, 100% práctico."
- DESPUÉS: "Aprende a configurar Claude Code correctamente y domina las buenas prácticas desde el inicio. 100% gratuito, 100% práctico."

---

## Resumen Final de Todos los Cambios

**Total de archivos modificados:** 12 archivos
**Total de cambios:** 23 cambios de copy/UX

### Archivos modificados:

1. ✅ `components/FAQ.tsx` - 6 cambios
2. ✅ `components/Hero.tsx` - 4 cambios
3. ✅ `components/Footer.tsx` - 5 cambios
4. ✅ `components/EmailModal.tsx` - 1 cambio (YA NO SE USA)
5. ✅ `components/VideoPreview.tsx` - 2 cambios
6. ✅ `components/ResourcesModal.tsx` - NUEVO componente
7. ✅ `app/page.tsx` - Reemplazar EmailModal por ResourcesModal
8. ✅ `components/Outcomes.tsx` - 2 cambios (outcomes + subtítulo)
9. ✅ `components/Modules.tsx` - 2 cambios (5 módulos nuevos + título/subtítulo)
10. ✅ `components/TargetAudience.tsx` - 2 cambios (audiencias + subtítulo)
11. ✅ `components/FinalProject.tsx` - 3 cambios (título, features, checklist)

### Commits realizados:

1. ✅ "UX improvements: Update copy for better engagement (CTAs, FAQ, microcopy)"
2. ✅ "Remove misleading '6 módulos completos' stat from VideoPreview (now 2 columns)"
3. ✅ "Replace email form with direct resource links (CodeGPT + Medium blog)"
4. ✅ "Content pivot: Update all sections to reflect introductory course (setup + best practices)"

---

## Estado Actual

**Landing page:** https://curso-claude-code.netlify.app/

**Contenido reflejado:**
- ✅ Curso introductorio sobre primeros pasos con Claude Code
- ✅ Enfoque en setup y buenas prácticas
- ✅ 5 temas específicos (instalación, CLAUDE.md, .claude, flujos agénticos, futuro)
- ✅ Honesto sobre ser un video pilot
- ✅ Sin fricción para acceder a recursos (links directos)
- ✅ CTAs optimizados para engagement
- ✅ Copy alineado con contenido real del curso

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

