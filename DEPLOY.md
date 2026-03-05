# 🚀 Guía de Despliegue - Immigration Leads

## Opciones de Hosting

### 1️⃣ **Netlify** (Recomendado - GRATIS)

#### Opción A: Drag & Drop
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `immigration-leads` al área de upload
3. ✅ ¡Listo! Tu sitio estará en línea en segundos

#### Opción B: GitHub + Netlify (Más profesional)
```bash
# 1. Crea un repositorio en GitHub
git init
git add .
git commit -m "Immigration Leads System v2.0"
git remote add origin https://github.com/TU-USUARIO/immigration-leads.git
git push -u origin main

# 2. En Netlify:
# - New site from Git
# - Conecta tu repositorio
# - Build settings: (dejar vacío, es HTML estático)
# - Deploy!
```

**Ventajas:**
- ✅ HTTPS automático
- ✅ Dominio gratis (.netlify.app)
- ✅ CDN global
- ✅ Redeploy automático con cada push

---

### 2️⃣ **Vercel** (Alternativa GRATIS)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desde la carpeta immigration-leads
vercel

# Seguir instrucciones interactivas
```

**Ventajas:**
- ✅ Extremadamente rápido
- ✅ Dominio gratis (.vercel.app)
- ✅ Analytics incluido

---

### 3️⃣ **GitHub Pages** (100% Gratis)

```bash
# 1. Subir a GitHub (ver arriba)

# 2. En tu repositorio de GitHub:
# Settings → Pages
# Source: Deploy from a branch
# Branch: main / root
# Save

# URL será: https://TU-USUARIO.github.io/immigration-leads/
```

**Ventajas:**
- ✅ Totalmente gratis
- ✅ Integrado con GitHub
- ✅ Perfecto para proyectos open-source

---

### 4️⃣ **Cloudflare Pages** (GRATIS + CDN)

1. Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecta tu GitHub
3. Selecciona el repositorio
4. Deploy!

**Ventajas:**
- ✅ CDN ultra rápido
- ✅ Sin límites de ancho de banda
- ✅ Protección DDoS incluida

---

## 🌐 Dominio Personalizado

### Comprar Dominio
- **Namecheap:** ~$10/año
- **Google Domains:** ~$12/año
- **Cloudflare Registrar:** ~$8/año (precio al costo)

### Configurar DNS
En Netlify/Vercel/Cloudflare:
1. Settings → Domain Management
2. Agregar tu dominio: `immigration-leads.com`
3. Actualizar DNS en tu registrador:
   ```
   A record:  @  →  [IP proporcionada]
   CNAME:     www → [subdominio proporcionado]
   ```

---

## 📊 Analytics (Opcional)

### Google Analytics 4
```html
<!-- Agregar en <head> de cada HTML -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-friendly)
```html
<script defer data-domain="tudominio.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🔒 HTTPS & Seguridad

Todos los servicios recomendados incluyen **HTTPS gratis** vía Let's Encrypt.

### Configuración adicional:
```html
<!-- Agregar en <head> para forzar HTTPS -->
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

---

## 📱 PWA (Progressive Web App)

Para convertir en app instalable, crear `manifest.json`:

```json
{
  "name": "Immigration Leads",
  "short_name": "Immigration",
  "description": "Sistema de Gestión de Leads para Despachos",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Y agregar en `<head>`:
```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#667eea">
<link rel="apple-touch-icon" href="/icon-192.png">
```

---

## 🔄 Actualizaciones Continuas

### Workflow recomendado:
```bash
# 1. Hacer cambios localmente
# 2. Probar en navegador
# 3. Commit y push
git add .
git commit -m "Descripción del cambio"
git push

# Netlify/Vercel detectará el push y re-desplegará automáticamente
```

---

## 💾 Migración a Backend (Futuro)

### Firebase (Recomendado para empezar)

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Inicializar
firebase init

# 3. Configurar Firestore para datos
# 4. Migrar de localStorage a Firestore
```

**Costo:** Gratis hasta 20,000 lecturas/día

### Supabase (Alternativa Open-Source)
- PostgreSQL real
- Auth incluido
- Gratis hasta 500MB
- [supabase.com](https://supabase.com)

---

## ✅ Checklist de Despliegue

- [ ] Probar todos los flujos localmente
- [ ] Cargar datos de prueba con `demo-data.js`
- [ ] Verificar que todos los links funcionan
- [ ] Configurar Analytics (opcional)
- [ ] Subir a hosting elegido
- [ ] Configurar dominio personalizado (opcional)
- [ ] Probar en móvil/tablet
- [ ] Configurar HTTPS (automático en servicios recomendados)
- [ ] Agregar a Google Search Console (SEO)
- [ ] Compartir URL con clientes

---

## 🆘 Troubleshooting

### "404 Not Found" en rutas
- **Causa:** Hosting busca `index.html` como raíz
- **Solución:** Renombrar `landing.html` → `index.html`

### LocalStorage no funciona entre sesiones
- **Causa:** Modo incógnito o cookies bloqueadas
- **Solución:** Usar navegador normal o implementar backend

### Estilos rotos en producción
- **Causa:** Rutas relativas incorrectas
- **Solución:** Verificar que todos los `href`/`src` usen rutas relativas (`./` o sin `/` inicial)

---

## 📞 Soporte

¿Necesitas ayuda con el despliegue?
- 📧 Email: deploy-support@immigration-leads.com
- 💬 Discord: [Unirse al servidor](https://discord.gg/immigration-tech)

---

**¡Tu sistema estará online en menos de 5 minutos! 🚀**
