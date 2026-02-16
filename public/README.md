# Documentación de Requerimientos: Sistema de Gestión de Inventario (SGI)

Este documento detalla los requerimientos funcionales y técnicos para el desarrollo de una aplicación de inventario desacoplada (Frontend y Backend independientes).

---

## 1. Modelo de Datos del Producto
Cada registro en el inventario debe contener la siguiente estructura de información:

* **ID:** Identificador único (UUID o numérico auto-incremental).
* **Nombre:** Nombre descriptivo del artículo.
* **Categoría:** Etiqueta de clasificación (ej. Electrónica, Oficina, etc.).
* **Stock:** Cantidad actual disponible (Número entero).
* **Precio:** Valor unitario del producto (Decimal).
* **Fecha de Ingreso:** Fecha en la que se registró o actualizó el stock.
* **Descripción:** Detalle extendido sobre las características del producto.

---

## 2. Requerimientos Funcionales por Página

### **Página de Inicio (Home)**
* Mensaje de bienvenida y breve descripción del sistema.
* Acceso directo mediante botones a "Ver Inventario" y "Agregar Producto".

### **Página de Visualización (Listado de Stock)**
* **Renderizado:** Tabla o tarjetas que muestren: Nombre, Categoría, Stock y **Fecha de Registro**.
* **Acción:** Un botón visible de **"Ver Detalle"** por cada producto.
* **Consumo API:** Realizar una petición `GET` al cargar la página.

### **Página de Detalle (Vista Única)**
* Mostrar la ficha completa del producto seleccionado (incluyendo la descripción larga).
* Cargar los datos dinámicamente usando el ID del producto.
* Botón para regresar al listado general.

### **Página de Formulario (Alta de Producto)**
* **Inputs:** Nombre, Categoría, Stock, Precio y Descripción.
* **Selector de Fecha:** Input tipo `date` para registrar el ingreso.
* **Validación:** Impedir el envío si faltan campos obligatorios.
* **Acción:** Botón "Guardar" que ejecute una petición `POST`.

---

## 3. Requerimientos Técnicos

* **Backend:** API REST que maneje formato JSON.
* **Frontend:** Aplicación SPA (Single Page Application) o sitio estático que consuma la API.
* **CORS:** Configuración obligatoria en el Backend para permitir peticiones desde el dominio del Frontend.
* **Persistencia:** Base de datos o archivo local para mantener los datos tras reiniciar el servidor.

---

## 4. Checklist de Desarrollo (Progreso)

Copia este checklist para llevar el control de tus tareas:

### **Fase 1: Backend (Lógica y Datos)**
- [ ] Definir el esquema de datos (Base de datos o JSON).
- [ ] Crear endpoint `GET /productos` para el listado general.
- [ ] Crear endpoint `GET /productos/:id` para obtener el detalle de uno solo.
- [ ] Crear endpoint `POST /productos` para recibir y guardar nuevos datos.
- [ ] Configurar los permisos de CORS.

### **Fase 2: Frontend (Estructura y Rutas)**
- [ ] Configurar el enrutador (Home, Inventario, Detalle, Formulario).
- [ ] Crear maquetación básica de la **Página de Inicio**.
- [ ] Crear tabla/tarjetas en la **Página de Inventario**.
- [ ] Crear la vista de **Página de Detalle**.
- [ ] Crear el formulario con su **selector de fecha**.

### **Fase 3: Integración y UX**
- [ ] Conectar el listado con el `GET` del backend.
- [ ] Configurar el botón "Ver Detalle" para que navegue al ID correcto.
- [ ] Conectar el formulario con el `POST` del backend.
- [ ] Mostrar mensajes de éxito/error al usuario tras guardar.
- [ ] Formatear las fechas para que sean amigables (ej. DD/MM/AAAA).
- [ ] Asegurar que el diseño sea responsivo (adaptable a móviles).