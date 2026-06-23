<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="/logo.png" alt="Nexori System" class="footer-logo" />
        <p>Soluciones de software a medida para impulsar tu empresa.</p>
      </div>

      <div class="footer-links">
        <h4>Navegación</h4>
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </div>

      <div class="footer-contact">
        <h4>Contacto</h4>
        <a :href="whatsappUrl" target="_blank" class="wa-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          +52 449 255 7153
        </a>
        <p class="footer-tagline">Atención rápida y personalizada</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Nexori System. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const whatsappUrl = 'https://wa.me/524492557153'
</script>

<style scoped>
.footer {
  background: var(--navy);
  color: rgba(255,255,255,0.8);
  padding-top: 4rem;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
}

.footer-logo {
  height: 44px;
  width: auto;
  filter: brightness(0) invert(1);
  margin-bottom: 1rem;
}

.footer-brand p {
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer-links h4,
.footer-contact h4 {
  color: var(--white);
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links a {
  display: block;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--gold);
}

.wa-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #25D366;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  transition: opacity 0.2s;
}

.wa-link:hover {
  opacity: 0.8;
}

.footer-tagline {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.5);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.25rem 0;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.45);
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
