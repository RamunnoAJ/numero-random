# Proyecto Número Aleatorio

Este repositorio contiene dos proyectos:

- random-number-api: Un backend API construido con NestJS que genera números aleatorios.
- random-number-client: Una aplicación frontend construida con React y Vite que interactúa con la API.

## Estructura del Proyecto

```
.
├── random-number-api
│   ├── Dockerfile
│   ├── src
│   └── ...
├── random-number-client
│   ├── Dockerfile
│   ├── src
│   └── ...
├── docker-compose.yml
└── README.md
```

## Empezando

### 1. Construir y Ejecutar el Backend (random-number-api)

Navega al directorio random-number-api y construye la imagen Docker:

```bash
cd random-number-api
docker build -t random-number-api .
```

Ejecuta el contenedor docker:

```bash
docker run -p 3000:3000 random-number-api
```

La API backend estará disponible en http://localhost:3000.

### 2. Construir y Ejecutar el Frontend (random-number-client)

Navega al directorio random-number-client y construye la imagen Docker:

```bash
cd random-number-client
docker build -t random-number-client .
```

Ejecuta el contenedor Docker:

```bash
docker run -p 80:80 random-number-client
```

La aplicación frontend estará disponible en http://localhost:80.

### Opcional (Docker compose)

Ejecuta Docker Compose:

```bash
docker compose up -d
```

Esto iniciará tanto el servicio API como el cliente, y estarán accesibles en http://localhost:3000 y http://localhost:80 respectivamente.

### Información Adicional

Endpoint de la API: POST /random devuelve un número aleatorio entre 1 y 100.
Frontend: Contiene un botón para solicitar un número aleatorio del backend y mostrarlo.
