<template>
  <div class="proyectos">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">Nuestro Trabajo</span>
        <h1>Proyectos</h1>
        <p>Sistemas que hemos desarrollado para transformar operaciones reales</p>
      </div>
    </section>

    <!-- Filtros -->
    <section class="filter-section">
      <div class="container text-center">
        <div class="filters">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn', { active: activeFilter === cat }]"
            @click="activeFilter = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Proyectos Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <div
            v-for="p in filteredProjects"
            :key="p.title"
            class="project-card"
          >
            <div class="project-thumb" :style="{ background: p.gradient }">
              <span class="project-emoji">{{ p.icon }}</span>
            </div>
            <div class="project-body">
              <div class="project-tags">
                <span v-for="tag in p.tags" :key="tag" class="ptag">{{ tag }}</span>
              </div>
              <h3>{{ p.title }}</h3>
              <p>{{ p.desc }}</p>
              <div class="project-features">
                <span v-for="f in p.features" :key="f" class="feature">✓ {{ f }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Tienes un proyecto? -->
    <section class="cta-proyectos">
      <div class="container text-center">
        <h2>¿Tu empresa necesita un sistema similar?</h2>
        <p>Cada proyecto que desarrollamos es único. Cuéntanos lo que necesitas y lo hacemos realidad.</p>
        <a href="https://wa.me/524492557153?text=Hola,%20vi%20sus%20proyectos%20y%20me%20interesa%20algo%20similar%20para%20mi%20empresa." target="_blank" class="btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Solicitar proyecto similar
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Recursos Humanos', 'Logística', 'Operaciones', 'Administración']
const activeFilter = ref('Todos')

const projects = [
  {
    icon: '⏰',
    title: 'Sistema de Control de Asistencia',
    desc: 'Registro de entradas y salidas de empleados con lector de huella, código QR o PIN. Generación automática de reportes de asistencia, retardos y faltas.',
    tags: ['Recursos Humanos'],
    features: ['Reportes automáticos', 'Alertas en tiempo real', 'Multi-sucursal', 'App web'],
    gradient: 'linear-gradient(135deg, #EEF2FF, #DBEAFE)',
  },
  {
    icon: '💰',
    title: 'Sistema de Nómina',
    desc: 'Cálculo automático de salarios, deducciones, prestaciones e IMSS. Generación de recibos digitales y timbrado CFDI para cumplimiento fiscal.',
    tags: ['Recursos Humanos', 'Administración'],
    features: ['Cálculo automático', 'CFDI / Timbrado', 'Múltiples periodos', 'Exportar a Excel'],
    gradient: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)',
  },
  {
    icon: '📦',
    title: 'Sistema de Trazabilidad',
    desc: 'Rastrea productos a lo largo de toda la cadena de producción o distribución. Identifica lotes, movimientos y responsables en cada etapa del proceso.',
    tags: ['Logística', 'Operaciones'],
    features: ['Seguimiento por lote', 'Código QR / Barras', 'Historial completo', 'Alertas de stock'],
    gradient: 'linear-gradient(135deg, #F0FAFA, #CCFBF1)',
  },
  {
    icon: '📉',
    title: 'Sistema de Reducción de Costos',
    desc: 'Análisis y visualización de gastos operativos en tiempo real. Identifica áreas de desperdicio y oportunidades de ahorro con reportes ejecutivos.',
    tags: ['Administración', 'Operaciones'],
    features: ['Dashboard ejecutivo', 'KPIs personalizados', 'Alertas de gasto', 'Comparativos'],
    gradient: 'linear-gradient(135deg, #F0F9FF, #E0F2FE)',
  },
  {
    icon: '🏪',
    title: 'Sistema de Inventario',
    desc: 'Control de entradas, salidas y existencias de productos. Alertas de stock mínimo, reportes de rotación y gestión de múltiples almacenes.',
    tags: ['Logística', 'Operaciones'],
    features: ['Control de stock', 'Multi-almacén', 'Alertas automáticas', 'Reportes de rotación'],
    gradient: 'linear-gradient(135deg, #FFF7ED, #FFEDD5)',
  },
  {
    icon: '📊',
    title: 'Dashboard Empresarial',
    desc: 'Panel de control con métricas e indicadores clave de tu empresa en tiempo real. Integración con tus sistemas existentes para una visión 360°.',
    tags: ['Administración'],
    features: ['Tiempo real', 'Gráficas interactivas', 'Multi-módulo', 'Exportar PDF'],
    gradient: 'linear-gradient(135deg, #EEF2FF, #E0E7FF)',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') return projects
  return projects.filter(p => p.tags.includes(activeFilter.value))
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--navy) 0%, #1a2d9e 100%);
  color: white;
  padding: 9rem 0 5rem;
  text-align: center;
}

.badge {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.9);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.page-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-hero p {
  color: rgba(255,255,255,0.75);
  font-size: 1.1rem;
}

/* Filters */
.filter-section {
  padding: 2.5rem 0 1rem;
  background: var(--light);
}

.filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  background: white;
  border: 2px solid rgba(13,27,110,0.12);
  color: var(--navy);
  padding: 0.55rem 1.25rem;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--navy);
  border-color: var(--navy);
  color: white;
}

/* Projects */
.projects-section {
  background: var(--light);
  padding-bottom: 5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.project-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(13,27,110,0.06);
  transition: transform 0.25s, box-shadow 0.25s;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(13,27,110,0.1);
}

.project-thumb {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-emoji {
  font-size: 3.5rem;
}

.project-body {
  padding: 1.5rem;
}

.project-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
}

.ptag {
  background: rgba(13,27,110,0.08);
  color: var(--navy);
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
}

.project-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.6rem;
}

.project-body p {
  color: var(--gray);
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.feature {
  font-size: 0.78rem;
  color: var(--teal);
  font-weight: 600;
}

/* CTA */
.cta-proyectos {
  background: linear-gradient(135deg, var(--navy), #1a2d9e);
  color: white;
}

.cta-proyectos h2 {
  font-size: 1.9rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.cta-proyectos p {
  color: rgba(255,255,255,0.75);
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
