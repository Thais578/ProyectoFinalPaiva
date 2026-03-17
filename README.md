# React + Vite

# Bean Box – E-commerce con React y Firebase

Esta aplicación fue creada usando **React + Vite**, y utiliza Firebase/Firestore como base de datos para guardar productos y órdenes. 

## Descripción
Bean Box es una aplicación de e-commerce desarrollada con React. Permite navegar por un catálogo de productos, ver el detalle de cada uno, seleccionar la cantidad a comprar, agregar productos al carrito y finalizar la compra con un checkout que guarda la orden en Firestore (Firebase).  

La aplicación funciona como **Single Page Application (SPA)** y mantiene el estado del carrito usando **Context API**.

---

## Tecnologías utilizadas
- **React** (componentes funcionales y hooks)
- **React Router** (navegación SPA)
- **Context API** (estado global del carrito)
- **Firebase / Firestore** (base de datos y almacenamiento de órdenes)
- **Bootstrap** (estilos y componentes)

---

## Componentes principales

| Componente | Función |
|------------|--------|
| `App.jsx` | Define las rutas de la aplicación y envuelve todo en `CartProvider`. |
| `NavBar.jsx` | Barra de navegación con enlaces a categorías y `CartWidget`. |
| `CartWidget.jsx` | Icono del carrito que muestra la cantidad total de unidades agregadas. |
| `ItemListContainer.jsx` + `ItemList.jsx` | Listado de productos, opcionalmente filtrados por categoría. |
| `ItemDetailContainer.jsx` + `ItemDetail.jsx` | Detalle de producto con descripción, stock y opción de agregar al carrito. |
| `ItemCount.jsx` | Selector de cantidad con validación de stock mínimo y máximo. |
| `Cart.jsx` | Muestra los productos agregados al carrito, cantidad, subtotal y total. Permite eliminar productos o vaciar el carrito. |
| `CheckoutForm.jsx` | Formulario de finalización de compra. Crea la orden en Firestore y limpia el carrito. |
| `CartContext.jsx` | Maneja el estado global del carrito (agregar, eliminar, total, cantidad). |

| `NotFound.jsx` | Página de error 404 para rutas no existentes, incluyendo la sección de Contacto. |
