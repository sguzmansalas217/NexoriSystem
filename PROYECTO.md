# Nexori System — Documentación del Proyecto

## Descripción

Página web corporativa de **Nexori System**, empresa de desarrollo de software a medida. Ofrece servicios de control de asistencia, nómina, trazabilidad, reducción de costos, inventario, dashboards, IA, RPAs y sistemas personalizados.

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Vue.js | 3.4 | Framework principal |
| Vue Router | 4.3 | Navegación entre páginas |
| Vite | 5.0 | Bundler y servidor de desarrollo |
| CSS Variables | — | Sistema de colores del logo |

## Colores del sistema

Tomados del logo **Nexori System**:

| Variable | Color | Uso |
|---|---|---|
| `--navy` | `#0D1B6E` | Color principal, textos, botones |
| `--blue` | `#3DB8EE` | Acentos, highlights |
| `--teal` | `#4FBBA5` | Hover, checks, detalles |
| `--gold` | `#F5C842` | Link activo en navbar, detalles |
| `--light` | `#F4F7FB` | Fondos de secciones alternas |

## Estructura del proyecto

```
PaginaWeb/
├── public/
│   └── logo.png                  ← Logo de Nexori System
├── src/
│   ├── components/
│   │   ├── Navbar.vue            ← Menú fijo con scroll effect
│   │   ├── Footer.vue            ← Footer con links y contacto
│   │   └── WhatsappBtn.vue       ← Botón flotante de WhatsApp
│   ├── views/
│   │   ├── Home.vue              ← Hero + servicios + por qué elegirnos + CTA
│   │   ├── Nosotros.vue          ← Misión, visión, valores, tecnologías
│   │   ├── Proyectos.vue         ← Portafolio con filtros por categoría
│   │   └── Contacto.vue          ← Info de contacto + formulario WhatsApp
│   ├── router/
│   │   └── index.js              ← Rutas de la aplicación
│   ├── App.vue                   ← Componente raíz
│   ├── main.js                   ← Punto de entrada
│   └── style.css                 ← Estilos globales y variables CSS
├── index.html                    ← HTML base
├── vite.config.js                ← Configuración de Vite
├── package.json                  ← Dependencias
├── PROYECTO.md                   ← Este archivo
└── DEPLOY.md                     ← Guía de despliegue
```

## Páginas

| Ruta | Vista | Descripción |
|---|---|---|
| `/` | Home.vue | Hero animado con tarjetas flotantes, 6 servicios, estadísticas y CTA |
| `/nosotros` | Nosotros.vue | Misión, visión, valores, historia y tecnologías usadas |
| `/proyectos` | Proyectos.vue | 6 proyectos con filtros por categoría |
| `/contacto` | Contacto.vue | Formulario que abre WhatsApp con mensaje pre-llenado |

## Contacto integrado

- **WhatsApp:** +52 449 255 7153
- **URL:** `https://wa.me/524492557153`
- Botón flotante visible en todas las páginas
- Formulario de contacto envía mensaje directo a WhatsApp

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# Abre en http://localhost:5173

# Build para producción
npm run build
# Genera carpeta dist/
```

## Repositorio

- **GitHub:** https://github.com/sguzmansalas217/NexoriSystem
- **Rama principal:** main

## Despliegue

Ver archivo [DEPLOY.md](./DEPLOY.md) para instrucciones completas de despliegue en Digital Ocean.
