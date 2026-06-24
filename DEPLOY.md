# Guía de Despliegue — Nexori System

## Información del servidor

| Dato | Valor |
|---|---|
| Proveedor | Digital Ocean |
| IP del Droplet | 165.232.59.88 |
| SO | Ubuntu 25.04 |
| Dominio | nexorisystem.com |
| Certificado SSL | Let's Encrypt (vence 2026-09-22, se renueva automático) |
| Ruta en servidor | /var/www/nexorisystem |
| Repositorio GitHub | https://github.com/sguzmansalas217/NexoriSystem |

---

## Cómo subir cambios al servidor

### Paso 1 — En tu PC (terminal de VS Code)

```bash
git add .
git commit -m "descripción del cambio"
git push
```

### Paso 2 — En la consola de Digital Ocean
Panel DO → tu Droplet → botón **Console**

```bash
cd /var/www/nexorisystem
git pull
npm run build
docker cp /var/www/nexorisystem/dist/. balconeria_frontend:/usr/share/nginx/nexorisystem/
docker exec balconeria_frontend nginx -s reload
```

---

## Cómo está configurado el servidor

La página corre dentro del contenedor Docker **balconeria_frontend** que ya existía en el servidor (compartido con maguzsa.com). Se agregó un virtual host nuevo sin modificar la configuración existente.

### Archivo de configuración Nginx (dentro del contenedor)
Ubicación: `/etc/nginx/conf.d/nexorisystem.conf`

```nginx
server {
    listen 80;
    server_name nexorisystem.com www.nexorisystem.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name nexorisystem.com www.nexorisystem.com;

    ssl_certificate     /etc/letsencrypt/live/nexorisystem.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nexorisystem.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    root /usr/share/nginx/nexorisystem;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Archivos estáticos dentro del contenedor
```
/usr/share/nginx/nexorisystem/   ← dist/ se copia aquí
```

### Certificado SSL
```
/etc/letsencrypt/live/nexorisystem.com/fullchain.pem
/etc/letsencrypt/live/nexorisystem.com/privkey.pem
```

---

## DNS en GoDaddy

| Tipo | Nombre | Valor |
|---|---|---|
| A | @ | 165.232.59.88 |
| CNAME | www | nexorisystem.com. |

---

## Comandos útiles en el servidor

```bash
# Ver estado de los contenedores
docker ps

# Ver espacio en disco
df -h /

# Limpiar caché de Docker (libera espacio)
docker builder prune -f

# Ver logs de nginx
docker exec balconeria_frontend nginx -t

# Recargar nginx sin reiniciar
docker exec balconeria_frontend nginx -s reload
```

---

## Primer despliegue (referencia)

Estos pasos ya están hechos. Solo se documentan como referencia.

1. Instalar Node.js 20 en el servidor
2. Clonar el repo: `git clone https://github.com/sguzmansalas217/NexoriSystem.git /var/www/nexorisystem`
3. Instalar dependencias: `npm install`
4. Build inicial: `chmod +x node_modules/.bin/vite && npm run build`
5. Copiar dist al contenedor
6. Crear `/etc/nginx/conf.d/nexorisystem.conf` dentro del contenedor
7. Generar certificado SSL con Certbot
8. Recargar nginx
