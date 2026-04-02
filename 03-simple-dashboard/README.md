# 🧩 Mini Dashboard de Usuarios

Pequeña aplicación construida con React para practicar manejo de datos, validación, errores y metadata usando librerías modernas del ecosistema.

---

## 🚀 Objetivo del proyecto

Este proyecto está diseñado para **aprender a profundidad**:

* Manejo de datos remotos (fetching, cache, mutations)
* Validación de datos en el frontend
* Manejo de errores en UI
* Control dinámico del `<head>` (título, meta)

---

## 🧠 Conceptos clave que se practican

* Server State vs UI State
* Cache y sincronización de datos
* Validación runtime
* Manejo de errores en React
* Arquitectura basada en providers

---

## 🛠️ Tecnologías utilizadas

* React
* TanStack Query (manejo de datos y cache)
* Zod (validación de datos)
* react-error-boundary (manejo de errores)
* react-helmet-async (metadata dinámica)

---

## 📦 Funcionalidades

### 1. 📋 Listado de usuarios

* Obtiene usuarios desde una API
* Muestra estados:

  * loading
  * error
  * success
* Usa cache automáticamente

---

### 2. ➕ Crear usuario

* Formulario con:

  * nombre
  * email
* Validación con Zod
* Envío con mutation
* Refetch automático de la lista

---

### 3. ⚡ Optimistic UI (opcional)

* El usuario aparece en la lista **antes** de que el servidor responda

---

### 4. 🛑 Manejo de errores

* Uso de Error Boundary global
* Fallback UI cuando algo falla
* Botón de retry

---

### 5. 🧾 Metadata dinámica

* Cambia el título de la página dinámicamente
* Ejemplo:

  * "Usuarios (5)"

---

## 🧱 Estructura del proyecto (sugerida)

```
src/
│
├── components/
│   ├── UserList.tsx
│   ├── CreateUserForm.tsx
│   └── ErrorFallback.tsx
│
├── api/
│   └── users.ts
│
├── schemas/
│   └── userSchema.ts
│
├── providers/
│   └── AppProvider.tsx
│
├── App.tsx
└── main.tsx
```

---

## 🔧 Instalación

```bash
npm install
```

---

## ▶️ Ejecutar proyecto

```bash
npm run dev
```

---

## 🧪 Retos (muy importante)

### 🥇 Nivel básico

* Mostrar loading y errores correctamente
* Validar formulario antes de enviar

---

### 🥈 Nivel intermedio

* Limpiar formulario después de crear usuario
* Mostrar errores de validación en UI

---

### 🥉 Nivel avanzado

* Implementar optimistic updates
* Simular errores de API
* Manejar retry manual

---

## 💥 Pruebas recomendadas

* Simular API caída
* Enviar formulario inválido
* Abrir múltiples componentes con la misma query
* Refrescar la página y observar comportamiento del cache

---

## 🧠 Qué deberías entender al finalizar

* Cómo funciona el cache en TanStack Query
* Cómo validar datos correctamente con Zod
* Cómo manejar errores sin romper la app
* Cómo fluye la data desde la API hasta la UI

---

## ⚠️ Reglas del proyecto

* No copiar código sin entenderlo
* Intentar resolver errores antes de buscar solución
* Priorizar comprensión sobre velocidad

---

## 🎯 Resultado esperado

Una aplicación pequeña pero con arquitectura similar a una app real:

* Separación de responsabilidades
* Manejo robusto de datos
* UI resiliente a errores

---

## 📌 Notas finales

Este proyecto no busca ser complejo, sino **enseñarte las bases correctas** para escalar a aplicaciones más grandes.

---

## 🚀 Próximos pasos

* Agregar autenticación
* Integrar routing avanzado
* Persistir cache
* Agregar testing

---
