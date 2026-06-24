<template>
  <header :class="['navbar', { scrolled: isScrolled, 'dark-hero': isDarkHero }]">
    <div class="container navbar-inner">
      <RouterLink to="/" class="logo-link">
        <img src="/logo.png" alt="Nexori System" class="logo" />
      </RouterLink>

      <nav :class="['nav-links', { open: menuOpen }]">
        <RouterLink to="/" @click="menuOpen = false">Inicio</RouterLink>
        <RouterLink to="/nosotros" @click="menuOpen = false">Nosotros</RouterLink>
        <RouterLink to="/proyectos" @click="menuOpen = false">Proyectos</RouterLink>
        <RouterLink to="/contacto" @click="menuOpen = false">Contacto</RouterLink>
        <a :href="whatsappUrl" target="_blank" class="btn-wa" @click="menuOpen = false">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </nav>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const isScrolled = ref(false)
const menuOpen = ref(false)
const whatsappUrl = 'https://wa.me/524492557153'
const route = useRoute()

const isDarkHero = computed(() => !isScrolled.value && route.path !== '/')

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: background 0.3s, box-shadow 0.3s;
  padding: 1rem 0;
}

.navbar.scrolled {
  background: var(--white);
  box-shadow: 0 2px 20px rgba(13, 27, 110, 0.1);
  padding: 0.5rem 0;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 48px;
  width: auto;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  font-weight: 500;
  color: #1a1a2e;
  transition: color 0.2s;
  font-size: 0.95rem;
}

.nav-links a:hover {
  color: var(--teal);
}

.nav-links .router-link-active {
  color: var(--navy);
  font-weight: 700;
  border-bottom: 2px solid var(--gold);
  padding-bottom: 2px;
}

/* Fondo hero oscuro/azul (Nosotros, Proyectos, Contacto) */
.dark-hero .nav-links a {
  color: rgba(255, 255, 255, 0.85);
}

.dark-hero .nav-links a:hover {
  color: var(--gold);
}

.dark-hero .nav-links .router-link-active {
  color: white;
  font-weight: 700;
  border-bottom: 2px solid var(--gold);
}

.dark-hero .hamburger span {
  background: white;
}

.btn-wa {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #25D366;
  color: var(--white) !important;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  font-weight: 600;
  transition: background 0.2s !important;
}

.btn-wa:hover {
  background: #1da851;
  color: var(--white) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--navy);
  border-radius: 2px;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--white);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transform: translateY(-120%);
    transition: transform 0.3s;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  /* En móvil el menú siempre tiene fondo blanco — letras siempre oscuras */
  .dark-hero .nav-links.open a {
    color: var(--navy) !important;
  }

  .dark-hero .nav-links.open .router-link-active {
    color: var(--navy) !important;
    border-bottom: 2px solid var(--gold);
  }

  .dark-hero .nav-links.open a:hover {
    color: var(--teal) !important;
  }

  /* Botón hamburguesa siempre visible en cualquier fondo */
  .dark-hero .hamburger span {
    background: white;
  }

  .navbar.scrolled .hamburger span {
    background: var(--navy);
  }
}
</style>
