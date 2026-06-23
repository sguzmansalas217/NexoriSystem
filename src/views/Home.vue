<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-badge">Desarrollo de Software a Medida</span>
          <h1>Sistemas que <span class="highlight">transforman</span> tu empresa</h1>
          <p>Desarrollamos soluciones tecnológicas personalizadas para reducir costos, automatizar procesos y llevar tu negocio al siguiente nivel.</p>
          <div class="hero-actions">
            <RouterLink to="/contacto" class="btn-primary">Solicitar Información</RouterLink>
            <RouterLink to="/proyectos" class="btn-outline">Ver Proyectos</RouterLink>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-card card1"><span class="card-icon">🤖</span><span>Inteligencia Artificial</span></div>
          <div class="floating-card card2"><span class="card-icon">⚙️</span><span>RPAs</span></div>
          <div class="floating-card card3"><span class="card-icon">⏰</span><span>Control de Asistencia</span></div>
          <div class="floating-card card4"><span class="card-icon">💰</span><span>Nómina</span></div>
          <div class="floating-card card5"><span class="card-icon">📍</span><span>Trazabilidad</span></div>
          <div class="floating-card card6"><span class="card-icon">📉</span><span>Reducción de Costos</span></div>
          <div class="floating-card card7"><span class="card-icon">🏪</span><span>Inventario</span></div>
          <div class="floating-card card8"><span class="card-icon">📊</span><span>Dashboard</span></div>
          <div class="floating-card card9"><span class="card-icon">📝</span><span>Registros Automáticos</span></div>
          <div class="floating-card card10"><span class="card-icon">🛠️</span><span>A tu Medida</span></div>
          <div class="hero-circle">
            <img src="/logo.png" alt="Nexori System" />
          </div>
        </div>
      </div>
      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#F4F7FB"/>
        </svg>
      </div>
    </section>

    <!-- Servicios -->
    <section class="services">
      <div class="container text-center">
        <h2 class="section-title">Nuestros Servicios</h2>
        <p class="section-subtitle">Desarrollamos el sistema que tu empresa necesita para operar con mayor eficiencia y control</p>
        <div class="services-grid">
          <div v-for="s in services" :key="s.title" class="service-card">
            <div class="service-icon" :style="{ background: s.color }">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Por qué elegirnos -->
    <section class="why">
      <div class="container why-inner">
        <div class="why-text">
          <h2 class="section-title">¿Por qué elegir Nexori System?</h2>
          <p style="color: var(--gray); margin-bottom: 2rem;">Somos tu socio tecnológico de confianza. Entendemos que cada empresa es única y diseñamos soluciones adaptadas a tu realidad y presupuesto.</p>
          <ul class="why-list">
            <li v-for="item in reasons" :key="item">
              <span class="check">✓</span> {{ item }}
            </li>
          </ul>
          <RouterLink to="/contacto" class="btn-primary" style="margin-top: 2rem;">Hablar con un asesor</RouterLink>
        </div>
        <div class="why-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <div class="stat-num" :style="{ color: stat.color }">{{ stat.num }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container text-center">
        <h2>¿Listo para digitalizar tu empresa?</h2>
        <p>Contáctanos hoy y recibe una consulta gratuita. Desarrollamos el sistema que necesitas.</p>
        <a href="https://wa.me/524492557153?text=Hola,%20me%20interesa%20una%20consulta%20gratuita%20sobre%20sus%20sistemas." target="_blank" class="btn-whatsapp">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consulta gratuita por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    icon: '⏰',
    title: 'Control de Asistencia',
    desc: 'Registro preciso de entradas y salidas de personal con reportes automáticos y alertas en tiempo real.',
    color: 'rgba(61,184,238,0.15)',
  },
  {
    icon: '💰',
    title: 'Nómina Automatizada',
    desc: 'Calcula salarios, descuentos, prestaciones y genera timbres fiscales sin errores y en segundos.',
    color: 'rgba(245,200,66,0.2)',
  },
  {
    icon: '📦',
    title: 'Trazabilidad',
    desc: 'Rastrea productos, materias primas o procesos en toda la cadena de producción o distribución.',
    color: 'rgba(79,187,165,0.2)',
  },
  {
    icon: '📉',
    title: 'Reducción de Costos',
    desc: 'Identifica desperdicios, optimiza recursos y automatiza tareas manuales para reducir gastos operativos.',
    color: 'rgba(13,27,110,0.1)',
  },
  {
    icon: '📊',
    title: 'Reportes y Dashboards',
    desc: 'Visualiza datos clave de tu empresa en tiempo real para tomar mejores decisiones.',
    color: 'rgba(61,184,238,0.15)',
  },
  {
    icon: '⚙️',
    title: 'Sistema a Medida',
    desc: 'Desarrollamos cualquier sistema que tu empresa necesite, adaptado 100% a tus procesos y flujos.',
    color: 'rgba(245,200,66,0.2)',
  },
]

const reasons = [
  'Soluciones personalizadas 100% a tu medida',
  'Precios competitivos accesibles para PyMEs',
  'Soporte continuo y mantenimiento incluido',
  'Entrega rápida y metodología ágil',
  'Tecnología moderna y escalable',
  'Comunicación directa sin intermediarios',
]

const stats = [
  { num: '100%', label: 'Soluciones a medida', color: 'var(--blue)' },
  { num: '24h', label: 'Tiempo de respuesta', color: 'var(--teal)' },
  { num: '∞', label: 'Escalabilidad', color: 'var(--gold)' },
  { num: '1', label: 'Contacto directo', color: 'var(--navy)' },
]
</script>

<style scoped>
/* Hero */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #EEF2FF 0%, #F0FAFA 50%, #FFFBEA 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 5rem;
}

.hero-badge {
  display: inline-block;
  background: rgba(13,27,110,0.1);
  color: var(--navy);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.hero-text h1 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: var(--navy);
  line-height: 1.2;
  margin-bottom: 1.25rem;
}

.highlight {
  color: var(--blue);
}

.hero-text p {
  color: var(--gray);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 480px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--navy);
  padding: 0.85rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid var(--navy);
  transition: all 0.25s;
}

.btn-outline:hover {
  background: var(--navy);
  color: white;
}

/* Hero visual */
.hero-visual {
  position: relative;
  height: 560px;
}

.hero-circle {
  width: 280px;
  height: 280px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(13,27,110,0.18);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-circle img {
  width: 230px;
}

.floating-card {
  position: absolute;
  background: white;
  border-radius: 10px;
  padding: 0.5rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--navy);
  box-shadow: 0 6px 24px rgba(13,27,110,0.12);
  animation: float 3.5s ease-in-out infinite;
  white-space: nowrap;
}

/* 10 tarjetas distribuidas en reloj alrededor del círculo */
.card1  { top: 0%;    left: 50%;  transform: translateX(-50%);  animation-delay: 0s;   } /* 12 */
.card2  { top: 6%;    right: 4%;                                  animation-delay: 0.35s;} /* 1-2 */
.card3  { top: 30%;   right: -4%;                                 animation-delay: 0.7s; } /* 3 */
.card4  { top: 56%;   right: 2%;                                  animation-delay: 1.05s;} /* 4-5 */
.card5  { bottom: 2%; right: 10%;                                 animation-delay: 1.4s; } /* 5-6 */
.card6  { bottom: 0;  left: 50%;  transform: translateX(-50%);   animation-delay: 1.75s;} /* 6 */
.card7  { bottom: 2%; left: 4%;                                   animation-delay: 2.1s; } /* 7-8 */
.card8  { top: 56%;   left: -2%;                                  animation-delay: 2.45s;} /* 8-9 */
.card9  { top: 30%;   left: -6%;                                  animation-delay: 2.8s; } /* 10 */
.card10 { top: 6%;    left: 4%;                                   animation-delay: 3.15s;} /* 11 */

.card-icon { font-size: 1.1rem; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: 80px;
}

/* Services */
.services {
  background: var(--light);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  text-align: left;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.25s, box-shadow 0.25s;
  border: 1px solid rgba(13,27,110,0.06);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(13,27,110,0.1);
}

.service-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1.25rem;
}

.service-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.6rem;
}

.service-card p {
  color: var(--gray);
  font-size: 0.9rem;
  line-height: 1.7;
}

/* Why */
.why {
  background: white;
}

.why-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.why-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.why-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--dark);
  font-size: 0.95rem;
}

.check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--teal);
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.why-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.stat-card {
  background: var(--light);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(13,27,110,0.06);
}

.stat-num {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--gray);
  font-size: 0.85rem;
}

/* CTA */
.cta {
  background: linear-gradient(135deg, var(--navy) 0%, #1a2d9e 100%);
  color: white;
}

.cta h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.cta p {
  color: rgba(255,255,255,0.75);
  font-size: 1.05rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-text p { max-width: 100%; }
  .hero-actions { justify-content: center; }
  .hero-visual { display: none; }
  .services-grid { grid-template-columns: 1fr; }
  .why-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .why-stats { grid-template-columns: 1fr 1fr; }
}
</style>
