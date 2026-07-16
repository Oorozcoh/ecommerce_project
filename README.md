# 🚀 Mi Tienda

Ecommerce desarrollado con React y Firebase como proyecto para Coderhouse.

La aplicación permite visualizar productos, navegar por categorías, consultar detalles de cada producto, gestionar un carrito de compras y realizar órdenes que quedan almacenadas en Firebase Firestore.

---

## ✨ Características

### 🛍️ Catálogo de Productos

- Listado dinámico de productos.
- Consulta de datos desde Firebase Firestore.
- Navegación por categorías.
- Detalle de producto.

### 🛒 Carrito de Compras

- Agregar productos al carrito.
- Modificar cantidades.
- Eliminar productos.
- Vaciar carrito.
- Cálculo automático de cantidad total.
- Cálculo automático del total de compra.

### ✅ Checkout

- Formulario de compra.
- Validación de datos del comprador.
- Generación de órdenes en Firestore.
- Generación de ID de compra.
- Actualización automática del stock después de la compra.
- Validación de stock disponible antes de generar la orden.

### 🔥 Interfaz

- Diseño inspirado en la estética Cyberpunk.
- Notificaciones con React Toastify.
- Navegación mediante React Router.
- Botón flotante "Volver arriba".

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- React
- Vite
- React Router DOM
- Context API
- React Icons
- React Toastify

### Backend y Base de Datos

- Firebase
- Firestore Database

---

## 📂 Estructura del Proyecto

```plaintext
src
│
├── assets
│
├── components
│   ├── BackToTop
│   ├── Cart
│   ├── CartWidget
│   ├── Checkout
│   ├── Footer
│   ├── ItemDetailContainer
│   ├── ItemListContainer
│   └── NavBar
│
├── context
│   ├── CartContext.jsx
│   └── CartProvider.jsx
│
├── db
│   └── db.js
│
├── layout
│   └── Layout.jsx
│
├── pages
│   ├── HomePage.jsx
│   ├── CategoryPage.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   └── CheckoutPage.jsx
│
├── services
│   └── firebase
│
├── App.jsx
└── main.jsx
```
---

## 📸 Capturas

### Página principal

./public/screenshots/home.png

### Detalle de producto

./public/screenshots/detalle.png

### Carrito

./public/screenshots/carrito.png

---

## 🔥 Configuración de Firebase

Crear un archivo:

```plaintext
src/db/db.js
```

con la configuración de Firebase:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
```

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/oorozcoh/ecommerce_project.git
```

Ingresar al proyecto:

```bash
cd ecommerce_project
```

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 📦 Dependencias Principales

```bash
npm install react-router-dom
```

```bash
npm install firebase
```

```bash
npm install react-icons
```

```bash
npm install react-toastify
```

---

## 📸 Funcionalidades Implementadas

### Navegación

- Inicio
- Categorías
- Detalle de producto
- Carrito
- Checkout

### Firestore

Colección:

```plaintext
products
```

Ejemplo de documento:

```json
{
  "name": "Leche",
  "category": "Lacteos",
  "price": 3500,
  "stock": 10,
  "image": "Leche.webp",
  "description": "Leche entera pasteurizada"
}
```

Colección:

```plaintext
orders
```

Ejemplo:

```json
{
  "buyer": {
    "nombre": "Oscar Orozco",
    "telefono": "3001234567",
    "email": "correo@ejemplo.com"
  },
  "items": [],
  "total": 25000,
  "fecha": "Timestamp"
}
```

---

## 🎯 Próximas Mejoras

- Persistencia del carrito.
- Búsqueda de productos.
- Autenticación de usuarios.
- Panel administrativo.
- Optimización SEO.
- Deploy en Firebase Hosting o Vercel.

---

## 👨‍💻 Autor

Oscar Orozco

Proyecto desarrollado para el curso React JS de Coderhouse.

---

## 📜 Licencia

Proyecto de uso académico y educativo.