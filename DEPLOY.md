# Guía de Despliegue — Nexori System

## Información del servidor

| Dato | Valor |
|---|---|
| Proveedor | Digital Ocean |
| IP del Droplet | 165.232.59.88 |
| SO | Ubuntu 25.04 |
| Dominio | nexorisystem.com |
| Certificado SSL | Let's Encrypt, renovación automática por webroot (ver sección SSL) |
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
npm install
npm run build
docker cp /var/www/nexorisystem/dist/. balconeria_frontend:/usr/share/nginx/nexorisystem/
docker exec balconeria_frontend nginx -s reload
```

> **Importante:** `node_modules/` y `dist/` ya **no** están en Git (antes sí lo estaban, lo que hacía fallar el `git pull` después de cada build en el servidor).
> Por eso ahora el paso `npm install` es **obligatorio** después de cada `git pull`.

#### Solo la primera vez después de este cambio

El `git pull` va a borrar el `node_modules/` que estaba versionado en el servidor. Si el pull se queja de archivos locales modificados, fuerza la limpieza y reinstala:

```bash
cd /var/www/nexorisystem
git reset --hard HEAD
git pull
npm install
npm run build
docker cp /var/www/nexorisystem/dist/. balconeria_frontend:/usr/share/nginx/nexorisystem/
docker exec balconeria_frontend nginx -s reload
```

Ya no hace falta el `chmod +x node_modules/.bin/vite`: ese truco solo era necesario porque `node_modules/` se subía desde Windows y perdía los permisos de ejecución.

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

| Tipo | Nombre | Valor | Estado |
|---|---|---|---|
| A | @ | 165.232.59.88 | ✅ existe |
| CNAME | www | nexorisystem.com. | ⚠️ **NO existe — hay que crearlo** |

El CNAME de `www` nunca se creó. Mientras falte, pasan dos cosas: quien escriba
`www.nexorisystem.com` no llega a ningún lado, y el certificado SSL **no se puede
renovar**, porque está emitido para el dominio raiz y para `www`, y Let's Encrypt
valida los dos.

---

## SSL y renovación automática

### Cómo está configurado

Los certificados se renuevan con el método **webroot**, sin apagar nada:

- Certbot escribe el desafío en el volumen `balconeria_certbot_www`, montado en el
  contenedor como `/var/www/certbot`.
- Los dos vhosts (`default.conf` y `nexorisystem.conf`) sirven
  `/.well-known/acme-challenge/` desde esa ruta.
- Al renovar, el *deploy hook* `/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh`
  recarga nginx dentro del contenedor.

### Qué NO hacer

**Nunca uses `--standalone` ni el plugin `--nginx` en este servidor.** Los puertos 80 y
443 los tiene el contenedor Docker, así que:

- `standalone` falla con `Address already in use`.
- El plugin `nginx` arranca el nginx **del host**, le roba el puerto 80 al contenedor
  y deja los sitios caídos. Esto ya pasó el 2026-09-08 y tumbó ambos dominios.

Tampoco pases `--pre-hook "docker stop ..."`: certbot **guarda los hooks de forma
permanente** en `/etc/letsencrypt/renewal/*.conf`, y en las siguientes renovaciones
apagaría el nginx que debe responder el desafío.

### Verificar que la renovación funciona

```bash
certbot renew --dry-run
certbot certificates | grep -E "Certificate Name|Expiry Date"
```

### Si un sitio se cae por el puerto 80

Señal: `failed to bind host port for 0.0.0.0:80: address already in use`.
Casi siempre es el nginx del host arrancado por certbot:

```bash
ss -tlnp | grep -E ':(80|443)\b'
fuser -k 80/tcp 443/tcp
docker start balconeria_frontend
docker exec balconeria_frontend nginx -s reload
```

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

# Ver que archivos hay publicados dentro del contenedor
docker exec balconeria_frontend ls -la /usr/share/nginx/nexorisystem/assets/
```

### Limpiar assets viejos

`docker cp` copia encima pero **no borra** los archivos del build anterior, así que los `.js` y `.css` viejos se van acumulando. Para dejar solo el build actual:

```bash
docker exec balconeria_frontend rm -rf /usr/share/nginx/nexorisystem/assets
docker cp /var/www/nexorisystem/dist/. balconeria_frontend:/usr/share/nginx/nexorisystem/
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
