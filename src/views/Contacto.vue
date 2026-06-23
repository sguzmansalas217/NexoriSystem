<template>
  <div class="contacto">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">Hablemos</span>
        <h1>Contáctanos</h1>
        <p>Estamos listos para escucharte y ayudarte a encontrar la solución ideal</p>
      </div>
    </section>

    <!-- Contenido -->
    <section class="contact-section">
      <div class="container contact-grid">

        <!-- Info de contacto -->
        <div class="contact-info">
          <h2>¿Cómo podemos ayudarte?</h2>
          <p>Cuéntanos sobre tu empresa y el sistema que necesitas. Nos ponemos en contacto contigo en menos de 24 horas.</p>

          <div class="contact-items">
            <a :href="whatsappUrl" target="_blank" class="contact-item wa">
              <div class="ci-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div class="ci-text">
                <strong>WhatsApp</strong>
                <span>+52 449 255 7153</span>
                <small>Respuesta en minutos</small>
              </div>
            </a>

            <div class="contact-item">
              <div class="ci-icon navy">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="ci-text">
                <strong>Ubicación</strong>
                <span>México</span>
                <small>Atención a todo el país</small>
              </div>
            </div>

            <div class="contact-item">
              <div class="ci-icon blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <div class="ci-text">
                <strong>Horario</strong>
                <span>Lun – Vie: 9am – 7pm</span>
                <small>Sáb: 9am – 2pm</small>
              </div>
            </div>
          </div>

          <!-- WhatsApp CTA grande -->
          <a :href="whatsappUrl" target="_blank" class="wa-big-btn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <div>
              <span class="wa-main">Iniciar conversación</span>
              <span class="wa-sub">+52 449 255 7153</span>
            </div>
          </a>
        </div>

        <!-- Formulario -->
        <div class="contact-form-wrap">
          <h2>Cuéntanos sobre tu proyecto</h2>
          <p>Completa el formulario y nos contactaremos contigo.</p>

          <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label>Nombre *</label>
                <input v-model="form.name" type="text" placeholder="Tu nombre" required />
              </div>
              <div class="form-group">
                <label>Empresa</label>
                <input v-model="form.company" type="text" placeholder="Nombre de tu empresa" />
              </div>
            </div>

            <div class="form-group">
              <label>WhatsApp / Teléfono *</label>
              <input v-model="form.phone" type="tel" placeholder="+52 449 000 0000" required />
            </div>

            <div class="form-group">
              <label>¿Qué sistema necesitas? *</label>
              <select v-model="form.service" required>
                <option value="" disabled>Selecciona un servicio</option>
                <option>Control de Asistencia</option>
                <option>Sistema de Nómina</option>
                <option>Trazabilidad</option>
                <option>Reducción de Costos</option>
                <option>Sistema de Inventario</option>
                <option>Dashboard Empresarial</option>
                <option>Otro sistema personalizado</option>
              </select>
            </div>

            <div class="form-group">
              <label>Cuéntanos más</label>
              <textarea v-model="form.message" rows="4" placeholder="Describe brevemente tu empresa y lo que necesitas..."></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <svg v-if="!sent" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {{ sent ? '¡Mensaje enviado por WhatsApp!' : 'Enviar por WhatsApp' }}
            </button>
          </form>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const whatsappUrl = 'https://wa.me/524492557153'
const sent = ref(false)

const form = ref({
  name: '',
  company: '',
  phone: '',
  service: '',
  message: '',
})

function handleSubmit() {
  const { name, company, phone, service, message } = form.value
  if (!name || !phone || !service) return

  const text = [
    `Hola, me contacto desde su página web.`,
    `*Nombre:* ${name}`,
    company ? `*Empresa:* ${company}` : null,
    `*Teléfono:* ${phone}`,
    `*Servicio:* ${service}`,
    message ? `*Mensaje:* ${message}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  window.open(`https://wa.me/524492557153?text=${encodeURIComponent(text)}`, '_blank')
  sent.value = true
  setTimeout(() => {
    sent.value = false
    form.value = { name: '', company: '', phone: '', service: '', message: '' }
  }, 4000)
}
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

/* Contact section */
.contact-section {
  background: var(--light);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: start;
}

.contact-info h2,
.contact-form-wrap h2 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.contact-info > p,
.contact-form-wrap > p {
  color: var(--gray);
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  border: 1px solid rgba(13,27,110,0.07);
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s, transform 0.2s;
}

.contact-item:hover {
  box-shadow: 0 8px 30px rgba(13,27,110,0.1);
  transform: translateX(4px);
}

.contact-item.wa {
  border-color: rgba(37,211,102,0.3);
}

.ci-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ci-icon.navy { background: var(--navy); }
.ci-icon.blue { background: var(--blue); }

.ci-text {
  display: flex;
  flex-direction: column;
}

.ci-text strong {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--navy);
}

.ci-text span {
  font-size: 0.95rem;
  color: var(--dark);
  margin: 0.1rem 0;
}

.ci-text small {
  font-size: 0.78rem;
  color: var(--gray);
}

/* WhatsApp big btn */
.wa-big-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #25D366;
  color: white;
  border-radius: 16px;
  padding: 1.25rem 1.75rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.wa-big-btn:hover {
  background: #1da851;
  transform: translateY(-2px);
}

.wa-main {
  display: block;
  font-size: 1.05rem;
  font-weight: 700;
}

.wa-sub {
  display: block;
  font-size: 0.88rem;
  opacity: 0.85;
}

/* Form */
.contact-form-wrap {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 30px rgba(13,27,110,0.07);
  border: 1px solid rgba(13,27,110,0.07);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy);
}

.form-group input,
.form-group select,
.form-group textarea {
  border: 1.5px solid rgba(13,27,110,0.15);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--dark);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(61,184,238,0.15);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: #25D366;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.submit-btn:hover {
  background: #1da851;
  transform: translateY(-1px);
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
