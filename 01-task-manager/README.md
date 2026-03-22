# 📄 Task Manager App — Especificación Técnica

## 🧩 Descripción general

Aplicación web construida con Next.js para gestionar tareas (CRUD básico), enfocada en aplicar fundamentos sólidos de React.

---

## 🎯 Objetivo

Construir una aplicación que permita:

- Crear tareas
- Listar tareas
- Marcar tareas como completadas
- Eliminar tareas
- Persistir datos en el navegador

---

## 🧠 Alcance (Scope)

### ✅ Incluido
- CRUD de tareas (sin backend)
- Persistencia con localStorage
- Manejo de estado con hooks
- Componentización limpia

### ❌ No incluido (por ahora)
- Autenticación
- Base de datos real
- Backend/API

---

## 🧱 Arquitectura

### 📁 Estructura sugerida

```bash
app/
  page.jsx

components/
  TaskForm.jsx
  TaskList.jsx
  TaskItem.jsx

hooks/
  useTasks.js

utils/
  storage.js

```

## Flujo de datos

```bash

TaskForm → crea tarea
   ↓
State global (useState / custom hook)
   ↓
TaskList → renderiza lista
   ↓
TaskItem → acciones individuales

```

