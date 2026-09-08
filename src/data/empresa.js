// Datos fiscales y de contacto de Nexori System.
// Fuente unica de verdad: lo usan Footer.vue, Contacto.vue y AvisoPrivacidad.vue.
//
// NOTA: la CURP, el idCIF y los sellos digitales de la constancia de situacion fiscal
// NO se publican en el sitio. Son datos personales que no tienen funcion en una pagina web.
//
// Estos datos los revisa Meta al verificar el negocio, asi que deben coincidir
// exactamente con la constancia de situacion fiscal.

export const empresa = {
  marca: 'Nexori System',
  responsable: 'Sergio Daniel Guzmán Salas',
  actividad: 'Servicios de consultoría en computación',

  // --- Datos fiscales (constancia de situacion fiscal) ---
  rfc: 'GUSS930217T79',
  domicilio: {
    calle: 'Misión de Santa Cruz',
    numero: '107',
    colonia: 'Misión de Santa Fe',
    cp: '20266',
    ciudad: 'Aguascalientes',
    estado: 'Aguascalientes',
    pais: 'México',
  },

  // El domicilio fiscal es particular. Ponlo en false para ocultar la calle y el numero
  // en la pagina de Contacto (el Aviso de Privacidad si lo conserva, porque la ley
  // exige senalar el domicilio del responsable).
  mostrarDomicilioEnContacto: true,

  // --- Contacto ---
  telefono: '+52 449 255 7153',
  telefonoPlano: '524492557153',
  email: 'sergioguzman@nexorisystem.com',
  whatsapp: 'https://wa.me/524492557153',

  sitio: 'https://nexorisystem.com',
  avisoActualizado: '8 de septiembre de 2026',
}

// Domicilio completo, omitiendo los campos vacios.
export const domicilioCompleto = () => {
  const d = empresa.domicilio
  return [
    [d.calle, d.numero].filter(Boolean).join(' '),
    d.colonia ? `Col. ${d.colonia}` : '',
    d.cp ? `C.P. ${d.cp}` : '',
    d.ciudad,
    d.estado,
    d.pais,
  ]
    .filter(Boolean)
    .join(', ')
}

// Version corta para Contacto cuando no se quiere exponer la calle.
export const domicilioPublico = () =>
  empresa.mostrarDomicilioEnContacto
    ? domicilioCompleto()
    : [empresa.domicilio.ciudad, empresa.domicilio.estado, empresa.domicilio.pais].join(', ')

export default empresa
