# SuperHeroes App 🦸‍♂️

Aplicación para la visualización y gestión de superhéroes.  
Permite consultar información de cada héroe, estadísticas. Adicional a ello te permite crear equipos (en el caso de android, validar identificacion biometrica para crear equipos), agregar miembros agregar distitos heroes a la lista de favoritos

Se creo un backend que se puede visualizar, en la siguiente url:
   ```bash
       https://rn-backend-test.vercel.app/api/v1/
  ````

Los metodos creados fueron
* /teams: get - obtener equipos
* /team: post - crea equipo
* /add-team-member: post - agregar miembros
* /switch-favorite: post - agregar/quitar de favoritos
* /favorites get - obtener favoritos

---

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JhessReyes/rn-stsa-test$0
    ````

2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Ejecutar en modo desarrollo, android y ios:

   ```bash
   npm run android
   npm run ios
   ```

---

## 📖 Uso

* Pantalla principal con listado de superhéroes.
* Búsqueda de héroes por nombre.
* Visualización de detalles individuales.
* Estadísticas de poder y habilidades.
* Creacion de Equipos
* Agregar Miembros a equipos
* Agregar heroes a favoritos
* Integracion biometrica nativa de android para crear equipos


---

## 🛠️ Tecnologías

* **Frontend:** React / React Native
* **Backend / API:** Node.js, Express
* **Base de datos:** PostgreSQL
* **Estado global:** React Query
* **Fetching Cache:** Tan Stack Query

---

## 📈 Plan de Optimizaciones Futuras

### 1. Escalabilidad ante aumento de superhéroes
* Implementar **paginación e infinitive scroll** para evitar cargar toda la lista en memoria.
* Optimizar consultas a la base de datos con **índices y filtros**.
* Integrar cache a nivel de base de datos propia, donde se podria manejar mejores indices y adaptar mucho mejor la cache

### 2. Respuesta a problemas de lentitud reportados por usuarios

* Aplicar **lazy loading / cache** de imágenes y recursos pesados.


### 3. Aspectos pendientes

* **Splash Screen**. Requiere mas tiempo de implementacion si se opta por codigo nativo
* **Modulo Nativo Pendiente - iOs:**. Tengo baja experiencia manejando el lenguaje, por lo que opte por implementar el modulo nativo de android

---
