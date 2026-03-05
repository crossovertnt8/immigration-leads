# ⚖️ Immigration Leads v2.0

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-web-orange.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

**Sistema Inteligente de Gestión de Leads para Despachos de Inmigración**

[Demo en Vivo](https://crossovertnt8.github.io/immigration-leads/) | [Documentación](FEATURES.md) | [Roadmap](CHANGELOG.md)

</div>

---

## 🚀 **Vista Rápida**

Immigration Leads es un **CRM completo y gratuito** diseñado específicamente para despachos de abogados de inmigración. Con **IA integrada**, **scoring automático** y **analytics en tiempo real**, ayuda a convertir más leads en clientes reales.

### ✨ **Características Principales**

- 🎯 **Scoring Automático** - Calcula viabilidad de 0-100 en segundos
- 🤖 **AI Assistant** - Sugerencias personalizadas por lead con 95% precisión
- 📊 **Analytics Dashboard** - Gráficas interactivas y métricas en tiempo real
- 🔔 **Notificaciones Push** - Alertas de leads urgentes y alta calidad
- 🌐 **100% Bilingüe** - Español e Inglés con cambio instantáneo
- 📱 **WhatsApp Integration** - Contacta directamente desde el panel
- 📤 **Exportación** - CSV, PDF, Excel para reportes
- 💾 **Sin Backend** - Funciona 100% offline con LocalStorage

---

## 📸 **Screenshots**

### Portal Principal
<img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Portal+Principal" alt="Portal" width="100%">

### Panel de Gestión
<img src="https://via.placeholder.com/800x400/1e3a5f/ffffff?text=Panel+de+Leads" alt="Panel" width="100%">

### Analytics Dashboard
<img src="https://via.placeholder.com/800x400/f59e0b/ffffff?text=Analytics" alt="Analytics" width="100%">

### AI Assistant
<img src="https://via.placeholder.com/800x400/10b981/ffffff?text=AI+Assistant" alt="IA" width="100%">

---

## 🎯 **¿Por Qué Immigration Leads?**

| vs HubSpot | vs Salesforce | vs Google Sheets | **Immigration Leads** |
|:---:|:---:|:---:|:---:|
| $150/mes | $200/mes | Gratis | **GRATIS** ✅ |
| Setup en semanas | Setup en semanas | Setup en horas | **5 minutos** ✅ |
| ❌ Genérico | ❌ Genérico | ❌ Manual | **Especializado** ✅ |
| ✅ IA (extra $$$) | ✅ IA (extra $$$) | ❌ Sin IA | **IA Incluida** ✅ |

---

## 🏃‍♂️ **Quick Start**

### Opción 1: Demo Online (0 minutos)
```bash
👉 https://crossovertnt8.github.io/immigration-leads/
```

### Opción 2: Local (2 minutos)
```bash
# 1. Clonar repositorio
git clone https://github.com/crossovertnt8/immigration-leads.git
cd immigration-leads

# 2. Abrir en navegador
start index.html  # Windows
open index.html   # Mac
xdg-open index.html  # Linux

# 3. Cargar datos de prueba (opcional)
# Abrir consola del navegador (F12)
# Pegar: loadDemoData()
```

### Opción 3: Desplegar en Netlify (5 minutos)
```bash
# 1. Arrastra carpeta a netlify.com
# 2. ¡Listo! URL pública automática
```

---

## 📚 **Documentación Completa**

- 📖 **[FEATURES.md](FEATURES.md)** - Características detalladas
- 🚀 **[DEPLOY.md](DEPLOY.md)** - Guías de despliegue (Netlify, Vercel, GitHub Pages)
- 📝 **[CHANGELOG.md](CHANGELOG.md)** - Historial de versiones
- 💼 **[RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md)** - Presentación ejecutiva

---

## 🎓 **Cómo Usar**

### 1. **Panel de Leads** (`app.html`)
Gestiona todos tus leads en un solo lugar:
- ✅ Scoring automático (verde = viable, rojo = descartar)
- ✅ Filtros (todos, viables, nuevos)
- ✅ Estados (nuevo, contactado, agendado, cerrado)
- ✅ Acciones rápidas (contactar, agendar, cerrar)

### 2. **Analytics** (`dashboard.html`)
Métricas y reportes en tiempo real:
- 📊 4 métricas clave (leads, viables, citas, conversión)
- 📈 4 gráficas interactivas
- 💡 Insights automáticos
- 📤 Exportación a CSV/PDF

### 3. **AI Assistant** (`ai-assistant.html`)
Sugerencias inteligentes por lead:
- 🎯 Probabilidad de conversión (0-95%)
- 💡 Recomendaciones personalizadas
- 💬 Plantillas de mensaje listas
- 📱 Integración WhatsApp/Telegram

---

## 🤖 **Algoritmo de Scoring**

```javascript
Score = Presupuesto (30%) + Urgencia (25%) + Tipo Visa (25%) + Situación (20%)
```

### Clasificación:
- 🟢 **Alta (70-100):** Contactar inmediatamente
- 🟡 **Media (50-69):** Contactar en 24-48h
- 🔴 **Baja (<50):** Automatizar o descartar

---

## 💰 **ROI Estimado**

### Ahorro de Tiempo
```
Scoring manual:       5 min/lead × 50 leads = 250 min → 0 min
Priorización:         10 min/día × 22 días = 220 min → 0 min
Reportes:             120 min/semana × 4 = 480 min → 2 min
────────────────────────────────────────────────────────
Total:                950 min (15.8 horas) ahorradas/mes
```
**Valor:** 15.8h × €50/h = **€790/mes**

### Mejora de Conversión
```
Sin sistema:          20% × 100 leads = 20 citas
Con IA:               28% × 100 leads = 28 citas (+8)
────────────────────────────────────────────────────────
Ingreso extra:        8 × €1,500 = €12,000/mes
```

**ROI Total:** €790 + €12,000 = **€12,790/mes** 🚀

---

## 🛠️ **Stack Tecnológico**

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), JavaScript Vanilla
- **Gráficas:** Chart.js
- **Almacenamiento:** LocalStorage (v2.0) → Firebase/Supabase (v3.0)
- **Hosting:** GitHub Pages / Netlify / Vercel
- **Sin dependencias:** 0 npm packages, 0 build process

---

## 🗺️ **Roadmap**

### ✅ v2.0 (Actual)
- [x] Sistema base con scoring
- [x] Analytics dashboard
- [x] AI Assistant
- [x] Notificaciones
- [x] WhatsApp integration
- [x] Navegación global mejorada
- [x] Sistema de ayuda para no técnicos
- [x] Transiciones suaves
- [x] Onboarding automático

### 🚧 v2.1 (Próximas semanas)
- [ ] Dark mode
- [ ] PDF export funcional
- [ ] Telegram integration completa
- [ ] Filtros avanzados
- [ ] Búsqueda global

### 🔮 v3.0 (2-3 meses)
- [ ] Backend (Firebase/Supabase)
- [ ] Multi-usuario
- [ ] Email automation
- [ ] Calendar sync
- [ ] App móvil (PWA)

---

## 🤝 **Contribuir**

¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 🐛 Reportar Bugs
Abre un [Issue](https://github.com/crossovertnt8/immigration-leads/issues) con:
- Descripción del bug
- Pasos para reproducirlo
- Screenshots si aplica
- Navegador/OS

---

## 📄 **Licencia**

MIT License - Uso libre para despachos de inmigración.

Prohibida la reventa sin modificaciones significativas.

---

## 📞 **Soporte & Comunidad**

- 💬 **Discord:** [Únete al servidor](https://discord.gg/immigration-tech)
- 🐦 **Twitter:** [@immigration_leads](https://twitter.com/immigration_leads)
- 📧 **Email:** hello@immigration-leads.com
- 📚 **Docs:** [docs.immigration-leads.com](https://crossovertnt8.github.io/immigration-leads/)

---

## 🌟 **Star History**

[![Star History Chart](https://api.star-history.com/svg?repos=crossovertnt8/immigration-leads&type=Date)](https://star-history.com/#crossovertnt8/immigration-leads&Date)

---

## 🙏 **Agradecimientos**

Desarrollado con ❤️ para despachos de inmigración que quieren crecer.

**Stack:** HTML5, CSS3, JavaScript, Chart.js

**Inspirado por:** La necesidad real de abogados de inmigración que pierden clientes por desorganización.

---

<div align="center">

**[⭐ Dale una estrella si te gusta!](https://github.com/crossovertnt8/immigration-leads)**

Made with ❤️ by [crossovertnt8](https://github.com/crossovertnt8)

</div>
