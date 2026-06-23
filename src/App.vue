<template>
  <div>
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <WhatsappBtn />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import WhatsappBtn from './components/WhatsappBtn.vue'
</script>
