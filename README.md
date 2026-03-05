# 🏛️ Immigration Leads - Sistema Avanzado de Gestión

> Sistema inteligente de captura, cualificación y gestión de leads para despachos de inmigración.

## 🚀 Características Principales

### ✅ **Ya Implementado**

#### 1. **Landing Page Bilingüe** (`landing.html`)
- Diseño moderno y responsive
- Soporte español/inglés automático
- Formulario de contacto integrado
- Secciones de features, pricing y testimonios
- CTA optimizado para conversión

#### 2. **Panel de Gestión de Leads** (`app.html`)
- Dashboard completo con scoring automático
- Filtros avanzados (todos, viables, nuevos)
- Sistema de estados (nuevo, contactado, agendado, cerrado)
- Visualización por score con código de colores
- Formulario integrado para captura rápida

#### 3. **Analytics Dashboard** (`dashboard.html`)
- 📊 **Estadísticas en tiempo real:**
  - Total de leads
  - Leads viables
  - Citas agendadas
  - Tasa de conversión
  
- 📈 **Gráficas interactivas:**
  - Distribución de viabilidad (doughnut chart)
  - Leads por país (bar chart)
  - Tipos de visa (pie chart)
  - Tendencia mensual (line chart)

- 💡 **Insights automáticos:**
  - Análisis de calidad de leads
  - Detección de casos urgentes
  - Sugerencias de optimización

- 📤 **Exportación de datos:**
  - CSV (funcional)
  - PDF (en desarrollo)
  - Excel (en desarrollo)

#### 4. **AI Assistant** (`ai-assistant.html`)
- 🤖 **Predicción de conversión:**
  - Algoritmo de scoring avanzado
  - Probabilidad de éxito en tiempo real
  - Visualización con barra de progreso

- 💡 **Sugerencias personalizadas:**
  - Recomendaciones específicas por caso
  - Timing óptimo de contacto
  - Estrategias de approach

- 💬 **Plantillas inteligentes:**
  - Mensajes personalizados por lead
  - Adaptados a urgencia y score
  - Variables dinámicas (nombre, país, tipo de visa)

- 📱 **Integración mensajería:**
  - WhatsApp (funcional)
  - Telegram (en desarrollo)

#### 5. **Sistema de Notificaciones** (`notifications.js`)
- 🔔 **Notificaciones push en tiempo real:**
  - Alertas de nuevos leads viables
  - Notificaciones de alta prioridad (score >80)
  - Alertas de casos urgentes
  
- 🎵 **Sistema de sonido:**
  - Audio para leads de alta calidad
  - Configurable on/off

- 🎨 **UI avanzada:**
  - Toast notifications con animaciones
  - Diseño adaptativo
  - Botón flotante de toggle

---

## 📦 Estructura del Proyecto

```
immigration-leads/
├── landing.html          # Página de aterrizaje (marketing)
├── app.html              # Panel principal de gestión
├── dashboard.html        # Analytics y reportes
├── ai-assistant.html     # Asistente IA con sugerencias
├── notifications.js      # Sistema de notificaciones push
└── README.md            # Esta documentación
```

---

## 🎯 Algoritmo de Scoring

El sistema calcula automáticamente la viabilidad de cada lead usando:

```javascript
Score = Presupuesto (30%) + Urgencia (25%) + Tipo Visa (25%) + Situación Legal (20%)
```

### Desglose:

**Presupuesto:**
- Alto (>€3,000): 30 puntos
- Medio (€1,000-€3,000): 20 puntos
- Bajo (<€1,000): 10 puntos

**Urgencia:**
- Alta (inmediata): 25 puntos
- Media (1-3 meses): 15 puntos
- Baja (3+ meses): 5 puntos

**Tipo de Visa:**
- Trabajo/Inversionista: 25 puntos
- Familia: 20 puntos
- Estudiante: 15 puntos
- Turista/Otra: 10 puntos

**Situación Legal:**
- Legal/Documentado: 20 puntos
- Pendiente: 15 puntos
- Indocumentado: 10 puntos
- Deportación: 10 puntos (caso crítico)

**Clasificación:**
- 🟢 **Alta (70-100):** Contactar inmediatamente
- 🟡 **Media (50-69):** Contactar en 24-48h
- 🔴 **Baja (<50):** Automatizar o descartar

---

## 🚀 Cómo Usar

### 1. **Para Marketing (Landing Page)**
```
1. Abre landing.html
2. Comparte el enlace con clientes potenciales
3. Los leads se capturan automáticamente en app.html
```

### 2. **Para Gestión Diaria (App)**
```
1. Abre app.html
2. Revisa los leads ordenados por score
3. Usa los filtros (todos/viables/nuevos)
4. Contacta directamente desde el panel
5. Actualiza estados (contactado/agendado/cerrado)
```

### 3. **Para Análisis (Dashboard)**
```
1. Abre dashboard.html
2. Revisa métricas clave (conversión, leads viables, etc.)
3. Analiza gráficas de tendencias
4. Lee los insights automáticos
5. Exporta datos (CSV/PDF/Excel)
```

### 4. **Para Optimizar Conversión (AI Assistant)**
```
1. Abre ai-assistant.html
2. Selecciona un lead de la lista
3. Revisa la probabilidad de conversión
4. Lee las sugerencias personalizadas
5. Copia la plantilla de mensaje
6. Envía por WhatsApp/Telegram
```

---

## 🔧 Instalación

### Opción 1: Local (Sin servidor)
```bash
1. Descarga todos los archivos en una carpeta
2. Abre landing.html en tu navegador
3. ¡Listo! Todo funciona sin internet
```

### Opción 2: Hosting Web
```bash
# Sube los archivos a cualquier hosting (Netlify, Vercel, GitHub Pages)
git init
git add .
git commit -m "Immigration Leads System"
git push origin main

# Netlify detectará automáticamente landing.html
```

---

## 💾 Almacenamiento de Datos

**Actualmente:** LocalStorage del navegador
- ✅ Sin necesidad de backend
- ✅ Funciona offline
- ⚠️ Limitado al navegador actual
- ⚠️ No sincroniza entre dispositivos

**Próxima versión:** Backend opcional
- Firebase (gratis para <1000 leads/mes)
- Supabase (open-source)
- API REST custom

---

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en cada archivo:

```css
/* Color principal */
#1e3a5f → Tu color azul

/* Color secundario */
#f59e0b → Tu color naranja/dorado

/* Gradientes */
linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Modificar Textos
Todos los textos están en español/inglés con `data-es` y `data-en`:

```html
<h1 data-es="Texto en español" data-en="Text in English">
```

### Ajustar Algoritmo de Scoring
Edita la función `calculateScore()` en `app.html`:

```javascript
function calculateScore(data) {
    let score = 0;
    // Modifica los pesos aquí
    if (data.budget === 'high') score += 30; // Cambia el 30
    // ...
    return Math.min(score, 100);
}
```

---

## 📱 Integraciones

### WhatsApp Business API
```javascript
// En ai-assistant.html, función sendWhatsApp()
const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
```

### Telegram Bot (Próximamente)
```javascript
// Crear bot via @BotFather
// Obtener token
// Integrar con Telegram Bot API
```

### Email Automation (Próximamente)
- SendGrid
- Mailgun
- SMTP directo

---

## 📊 Métricas Recomendadas

**KPIs a monitorear:**
- Tasa de conversión (citas / total leads)
- Tiempo promedio de respuesta
- Score promedio de leads
- Distribución geográfica
- ROI por fuente de tráfico

**Metas sugeridas:**
- >60% de leads viables
- <2h tiempo de primera respuesta
- >30% tasa de conversión a citas
- >70 score promedio

---

## 🐛 Troubleshooting

### "No veo mis leads en otro dispositivo"
- **Causa:** LocalStorage es local al navegador
- **Solución:** Exporta a CSV y comparte, o implementa backend

### "Las notificaciones no suenan"
- **Causa:** Navegador bloqueó autoplay
- **Solución:** Haz click en la página primero, luego activa notificaciones

### "Los gráficos no se muestran"
- **Causa:** Chart.js no cargó desde CDN
- **Solución:** Verifica conexión a internet o descarga Chart.js local

---

## 🔮 Roadmap

### Versión 2.0 (Próxima)
- [ ] Backend con Firebase/Supabase
- [ ] Autenticación multi-usuario
- [ ] Sincronización en tiempo real
- [ ] App móvil (PWA)
- [ ] Integración con calendarios (Google/Outlook)

### Versión 3.0 (Futuro)
- [ ] CRM completo
- [ ] Automatización de emails
- [ ] Firma electrónica de documentos
- [ ] Portal del cliente
- [ ] Facturación integrada

---

## 📄 Licencia

Uso libre para despachos de inmigración.
Prohibida la reventa del código sin modificar.

---

## 🤝 Soporte

¿Necesitas ayuda o customización?
- Email: support@immigration-leads.com
- Telegram: @immigration-leads-support
- Web: www.immigration-leads.com

---

## 🏆 Créditos

Desarrollado con ❤️ para despachos de inmigración que quieren crecer.

**Stack tecnológico:**
- HTML5 + CSS3 (diseño moderno)
- JavaScript vanilla (sin frameworks pesados)
- Chart.js (gráficas interactivas)
- LocalStorage (persistencia simple)

---

**¡Empieza a captar más clientes hoy! 🚀**
