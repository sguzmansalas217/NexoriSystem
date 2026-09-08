<template>
  <div class="aviso">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <span class="badge">Legal</span>
        <h1>Aviso de Privacidad</h1>
        <p>Última actualización: {{ empresa.avisoActualizado }}</p>
      </div>
    </section>

    <!-- Contenido -->
    <section class="legal-section">
      <div class="container legal-container">

        <p class="intro">
          En cumplimiento con la <strong>Ley Federal de Protección de Datos Personales en Posesión
          de los Particulares</strong> (LFPDPPP), su Reglamento y los Lineamientos del Aviso de
          Privacidad, ponemos a su disposición el presente Aviso de Privacidad Integral.
        </p>

        <h2>1. Identidad y domicilio del responsable</h2>
        <p>
          <strong>{{ empresa.responsable }}</strong>, quien opera comercialmente bajo la marca
          <strong>{{ empresa.marca }}</strong> (en adelante, "el Responsable"), es responsable del
          tratamiento, uso y protección de sus datos personales.
        </p>
        <ul class="datos-fiscales">
          <li><span>RFC:</span> {{ empresa.rfc }}</li>
          <li><span>Domicilio:</span> {{ domicilio }}</li>
          <li><span>Teléfono:</span> {{ empresa.telefono }}</li>
          <li><span>Correo:</span> {{ empresa.email }}</li>
          <li><span>Sitio web:</span> {{ empresa.sitio }}</li>
        </ul>

        <h2>2. Datos personales que recabamos</h2>
        <p>Para las finalidades señaladas en este aviso, podemos recabar los siguientes datos:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> nombre completo.</li>
          <li><strong>Datos de contacto:</strong> número telefónico, WhatsApp y correo electrónico.</li>
          <li><strong>Datos laborales:</strong> nombre de la empresa, cargo y giro del negocio.</li>
          <li><strong>Información del proyecto:</strong> descripción de las necesidades técnicas que usted nos comparta voluntariamente.</li>
        </ul>
        <p class="nota">
          <strong>No recabamos datos personales sensibles</strong> ni datos patrimoniales o
          financieros a través de este sitio web.
        </p>

        <h2>3. Finalidades del tratamiento</h2>
        <p><strong>Finalidades primarias</strong> (necesarias para la relación con usted):</p>
        <ul>
          <li>Atender y dar seguimiento a sus solicitudes de información, cotización o soporte.</li>
          <li>Elaborar propuestas comerciales y presupuestos de desarrollo de software.</li>
          <li>Prestar, dar mantenimiento y dar soporte a los servicios contratados.</li>
          <li>Emitir comprobantes fiscales y cumplir obligaciones legales y contractuales.</li>
        </ul>
        <p><strong>Finalidades secundarias</strong> (no necesarias, usted puede oponerse):</p>
        <ul>
          <li>Enviarle información sobre nuevos servicios, mejoras o promociones.</li>
          <li>Realizar encuestas de calidad y satisfacción.</li>
        </ul>
        <p class="nota">
          Si no desea que sus datos se traten para las finalidades secundarias, puede manifestarlo
          escribiendo al contacto indicado en la sección 6. Su negativa no será motivo para negarle
          los servicios que solicita.
        </p>

        <h2>4. Transferencia de datos</h2>
        <p>
          <strong>Sus datos personales no se venden, ceden ni comercializan con terceros.</strong>
          Únicamente podrán ser transferidos sin requerir su consentimiento en los supuestos
          previstos por el artículo 37 de la LFPDPPP, es decir, cuando sea requerido por autoridad
          competente o resulte legalmente exigible.
        </p>
        <p>
          Para operar el sitio y comunicarnos con usted utilizamos proveedores tecnológicos
          (servicios de hospedaje web y mensajería instantánea), quienes actúan como encargados del
          tratamiento y están obligados a mantener la confidencialidad de la información.
        </p>

        <h2>5. Uso de cookies y tecnologías de rastreo</h2>
        <p>
          Este sitio web <strong>no utiliza cookies de rastreo, publicidad ni perfilamiento</strong>.
          Únicamente se emplean recursos técnicos indispensables para mostrar correctamente el sitio
          (tipografías y archivos estáticos). Usted puede configurar su navegador para bloquear
          estos recursos, aunque ello podría afectar la apariencia del sitio.
        </p>

        <h2>6. Derechos ARCO</h2>
        <p>
          Usted tiene derecho a <strong>Acceder</strong> a sus datos personales, a
          <strong>Rectificarlos</strong> cuando sean inexactos, a <strong>Cancelarlos</strong>
          cuando considere que no son necesarios, y a <strong>Oponerse</strong> a su tratamiento
          para fines específicos. También puede revocar en cualquier momento el consentimiento
          otorgado.
        </p>
        <p>Para ejercer cualquiera de estos derechos, envíe una solicitud al contacto siguiente:</p>
        <div class="contacto-arco">
          <p><strong>Correo:</strong> {{ empresa.email }}</p>
          <p><strong>WhatsApp / Teléfono:</strong> {{ empresa.telefono }}</p>
          <p><strong>Domicilio:</strong> {{ domicilio }}</p>
        </div>
        <p>La solicitud deberá contener:</p>
        <ul>
          <li>Nombre completo del titular y medio para comunicarle la respuesta.</li>
          <li>Documento que acredite su identidad (identificación oficial vigente).</li>
          <li>Descripción clara de los datos respecto de los que ejerce el derecho.</li>
          <li>Cualquier elemento que facilite la localización de sus datos.</li>
        </ul>
        <p>
          Daremos respuesta en un plazo máximo de <strong>20 días hábiles</strong> contados desde su
          recepción. De resultar procedente, se hará efectiva dentro de los 15 días hábiles
          siguientes.
        </p>

        <h2>7. Conservación de los datos</h2>
        <p>
          Sus datos se conservarán durante el tiempo necesario para cumplir las finalidades
          descritas y, posteriormente, durante los plazos que exija la legislación fiscal y
          mercantil aplicable. Concluidos dichos plazos, serán suprimidos de forma segura.
        </p>

        <h2>8. Medidas de seguridad</h2>
        <p>
          Implementamos medidas de seguridad administrativas, técnicas y físicas razonables para
          proteger sus datos personales contra daño, pérdida, alteración, destrucción o uso, acceso
          o tratamiento no autorizado, incluyendo cifrado de las comunicaciones del sitio mediante
          certificado SSL/TLS y control de acceso a la información.
        </p>

        <h2>9. Cambios al aviso de privacidad</h2>
        <p>
          El presente aviso puede sufrir modificaciones derivadas de cambios legales, de nuestras
          prácticas de privacidad o de nuestro modelo de negocio. Cualquier modificación se
          publicará en esta misma página
          <a :href="empresa.sitio + '/aviso-de-privacidad'">{{ empresa.sitio }}/aviso-de-privacidad</a>,
          por lo que le recomendamos consultarla periódicamente.
        </p>

        <h2>10. Autoridad competente</h2>
        <p>
          Si considera que su derecho a la protección de datos personales ha sido vulnerado, puede
          acudir ante la autoridad competente en materia de protección de datos personales para
          presentar la queja o denuncia correspondiente.
        </p>

        <div class="aceptacion">
          <p>
            Al proporcionar sus datos personales a través de este sitio o de nuestros canales de
            contacto, usted manifiesta haber leído, entendido y aceptado los términos del presente
            Aviso de Privacidad.
          </p>
        </div>

        <RouterLink to="/contacto" class="btn-primary volver">¿Dudas? Contáctanos</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { empresa, domicilioCompleto } from '../data/empresa.js'

const domicilio = computed(() => domicilioCompleto())
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--navy) 0%, #1a2d9e 100%);
  color: white;
  padding: 9rem 0 4rem;
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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.page-hero p {
  color: rgba(255,255,255,0.75);
  font-size: 0.95rem;
}

.legal-section {
  background: var(--white);
}

.legal-container {
  max-width: 820px;
}

.intro {
  background: var(--light);
  border-left: 4px solid var(--blue);
  padding: 1.25rem 1.5rem;
  border-radius: 0 12px 12px 0;
  color: var(--dark);
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
}

.legal-container h2 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--navy);
  margin: 2.5rem 0 0.9rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(13,27,110,0.08);
}

.legal-container p {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.legal-container strong {
  color: var(--dark);
}

.legal-container ul {
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
}

.legal-container ul li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 0.4rem;
}

.legal-container ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--teal);
}

.datos-fiscales {
  background: var(--light);
  border-radius: 14px;
  padding: 1.25rem 1.5rem !important;
  border: 1px solid rgba(13,27,110,0.06);
}

.datos-fiscales li {
  padding-left: 0 !important;
  margin-bottom: 0.5rem !important;
  color: var(--dark) !important;
}

.datos-fiscales li::before {
  display: none;
}

.datos-fiscales span {
  display: inline-block;
  min-width: 110px;
  font-weight: 700;
  color: var(--navy);
}

.nota {
  background: rgba(79,187,165,0.08);
  border-radius: 10px;
  padding: 0.9rem 1.15rem;
  font-size: 0.9rem !important;
}

.contacto-arco {
  background: var(--light);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(13,27,110,0.06);
  margin-bottom: 1.25rem;
}

.contacto-arco p {
  margin-bottom: 0.4rem;
  color: var(--dark);
}

.contacto-arco p:last-child {
  margin-bottom: 0;
}

.legal-container a {
  color: var(--blue);
  font-weight: 600;
  word-break: break-word;
}

.legal-container a:hover {
  text-decoration: underline;
}

.aceptacion {
  background: linear-gradient(135deg, rgba(13,27,110,0.04), rgba(61,184,238,0.06));
  border-radius: 14px;
  padding: 1.5rem;
  margin-top: 2.5rem;
}

.aceptacion p {
  margin-bottom: 0;
  color: var(--dark);
  font-weight: 500;
}

.volver {
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .page-hero { padding: 7rem 0 3rem; }
  .datos-fiscales span { display: block; min-width: 0; }
}
</style>
