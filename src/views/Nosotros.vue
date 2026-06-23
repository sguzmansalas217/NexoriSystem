<template>
  <div class="nosotros">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">Quiénes Somos</span>
        <h1>Nexori System</h1>
        <p>Desarrollamos tecnología que trabaja para ti — no al revés.</p>
      </div>
    </section>

    <!-- Misión & Visión -->
    <section>
      <div class="container mv-grid">
        <div class="mv-card">
          <div class="mv-icon" style="background: rgba(61,184,238,0.15);">🎯</div>
          <h3>Misión</h3>
          <p>Desarrollar soluciones de software a medida que impulsen la eficiencia operativa de las empresas, adaptándonos a sus necesidades reales con tecnología moderna y accesible.</p>
        </div>
        <div class="mv-card">
          <div class="mv-icon" style="background: rgba(79,187,165,0.2);">🚀</div>
          <h3>Visión</h3>
          <p>Ser el aliado tecnológico de referencia para empresas que buscan crecer de manera inteligente, confiable y con sistemas que escalan junto con su negocio.</p>
        </div>
        <div class="mv-card">
          <div class="mv-icon" style="background: rgba(245,200,66,0.2);">💎</div>
          <h3>Valores</h3>
          <p>Calidad, honestidad, compromiso con el cliente y entrega puntual. Cada proyecto lo tratamos con la dedicación que merece, sin importar su tamaño.</p>
        </div>
      </div>
    </section>

    <!-- Historia -->
    <section class="story">
      <div class="container story-inner">
        <div class="story-text">
          <h2 class="section-title">Nuestra Historia</h2>
          <p>Nexori System nació de la necesidad de ofrecer soluciones tecnológicas reales a empresas que no encuentran en el mercado un software que se adapte a sus procesos específicos.</p>
          <p>Creemos que la tecnología debe reducir el trabajo repetitivo, eliminar errores humanos y darte información precisa para tomar mejores decisiones. Por eso desarrollamos cada sistema desde cero, pensando en ti.</p>
          <p>Trabajamos directamente contigo — sin intermediarios — para entender tu negocio a fondo y construir exactamente lo que necesitas.</p>
        </div>
        <div class="story-visual">
          <div class="story-card">
            <div class="story-logo">
              <img src="/logo.png" alt="Nexori System" />
            </div>
            <div class="story-tags">
              <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologías -->
    <section class="tech">
      <div class="container text-center">
        <h2 class="section-title">Tecnologías que usamos</h2>
        <p class="section-subtitle">Trabajamos con herramientas modernas para garantizar soluciones robustas y escalables</p>
        <div class="tech-grid">
          <div v-for="t in techs" :key="t.name" class="tech-pill">
            <span class="tech-dot" :style="{ background: t.color }"></span>
            {{ t.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-nosotros">
      <div class="container text-center">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Cuéntanos tu idea y te decimos cómo podemos ayudarte.</p>
        <a href="https://wa.me/524492557153?text=Hola,%20quiero%20platicar%20sobre%20un%20proyecto." target="_blank" class="btn-whatsapp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Platicar por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const tags = ['Vue.js', 'Node.js', 'PostgreSQL', 'Python', 'API REST', 'Cloud']

const techs = [
  { name: 'Vue.js', color: '#42b883' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Python', color: '#3572A5' },
  { name: 'MySQL', color: '#F5C842' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'REST API', color: '#3DB8EE' },
  { name: 'Digital Ocean', color: '#0080FF' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML/CSS', color: '#E34F26' },
  { name: 'Git', color: '#F05032' },
]
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
  font-size: 1.15rem;
  max-width: 500px;
  margin: 0 auto;
}

/* Misión Visión */
.mv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.mv-card {
  background: white;
  border: 1px solid rgba(13,27,110,0.08);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  transition: transform 0.25s, box-shadow 0.25s;
}

.mv-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(13,27,110,0.1);
}

.mv-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.25rem;
}

.mv-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.mv-card p {
  color: var(--gray);
  font-size: 0.92rem;
  line-height: 1.75;
}

/* Story */
.story {
  background: var(--light);
}

.story-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.story-text p {
  color: var(--gray);
  margin-bottom: 1.25rem;
  line-height: 1.8;
}

.story-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(13,27,110,0.1);
  text-align: center;
}

.story-logo img {
  height: 70px;
  margin: 0 auto 2rem;
}

.story-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.tag {
  background: rgba(13,27,110,0.08);
  color: var(--navy);
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
}

/* Tech */
.tech {
  background: white;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
}

.tech-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--light);
  border: 1px solid rgba(13,27,110,0.08);
  border-radius: 50px;
  padding: 0.55rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--dark);
  transition: box-shadow 0.2s;
}

.tech-pill:hover {
  box-shadow: 0 4px 16px rgba(13,27,110,0.1);
}

.tech-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* CTA */
.cta-nosotros {
  background: linear-gradient(135deg, #EEF2FF 0%, #F0FAFA 100%);
}

.cta-nosotros h2 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.cta-nosotros p {
  color: var(--gray);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .mv-grid { grid-template-columns: 1fr; }
  .story-inner { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
