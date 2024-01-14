# E-commerce de Heladería Freddo con ReactJS y Firebase

¡Bienvenido al proyecto de E-commerce de Freddo Heladdos desarrollado con ReactJS y Firebase! Este README proporciona información esencial para configurar, ejecutar y contribuir al proyecto.

## Descripción del Proyecto

Este proyecto es un sistema de comercio electrónico para una heladería ficticia. Utiliza ReactJS para el desarrollo del frontend y Firebase como backend para gestionar la autenticación de usuarios y almacenar datos como productos, pedidos y clientes.

## Características Principales

- Catálogo de productos con detalles
- Carrito de compras
- Autenticación de usuarios
- Historial de pedidos

## Tecnologías Utilizadas

- ReactJS
- Firebase Authentication
- Firebase Firestore (Base de datos NoSQL)
- Otras dependencias de React (react-router-dom, react-redux, etc.)

## Configuración del Proyecto

1. **Clonar el Repositorio:**
   https://github.com/LisandroGuerra01/ProyectoFinal-Guerra.git

2. **Instalar Dependencias:**
   npm install

3. **Configurar Firebase:**
   - Crea un proyecto en [Firebase Console](https://console.firebase.google.com/).
   - Copia la configuración de Firebase (apiKey, authDomain, projectId, etc.).
   - Crea un archivo `.env` en la raíz del proyecto y coloca las variables de entorno de Firebase:
     REACT_APP_FIREBASE_API_KEY=TuApiKey
     REACT_APP_FIREBASE_AUTH_DOMAIN=TuAuthDomain
     REACT_APP_FIREBASE_PROJECT_ID=TuProjectId
     REACT_APP_FIREBASE_STORAGE_BUCKET=TuStorageBucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=TuMessagingSenderId
     REACT_APP_FIREBASE_APP_ID=TuAppId

4. **Ejecutar la Aplicación:**
   npm start

   El proyecto estará disponible en [http://localhost:5173](http://localhost:5173).

## Estructura del Proyecto

La estructura de archivos y carpetas del proyecto está organizada de la siguiente manera:

- `src/`
  - `Components/`: Componentes reutilizables.
  - `Context/`: Contextos de React para el manejo de estado global.
  - `layout/`: Diseños o componentes de diseño que se utilizan en varias partes de la aplicación.
  - `routes/`: Archivos relacionados con las rutas y las páginas de la aplicación.
  - `views/`: Páginas principales de la aplicación.

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras errores, mejoras potenciales o nuevas características que quisieras agregar, por favor, abre un problema o envía una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE).

¡Disfruta construyendo y mejorando el proyecto de E-commerce de Heladería Freddo!