# UdeA – Sociedad y Cultura Digital

Mockup funcional del módulo **Sociedad y Cultura Digital** de la plataforma UdeA (Programa de Niños y Jóvenes), construido con **React + Vite** y **CSS Modules**. Sin dependencias de Figma ni librerías externas pesadas.

---

## Vista previa

| Pantalla | Descripción |
|---|---|
| **Login** | Formulario de acceso con correo y contraseña |
| **Cultura Digital** | Vista principal con hero, noticias, consejos y recursos |
| **Inicio** | Panel con estadísticas y accesos rápidos |
| **Servicios** | Catálogo de servicios disponibles |
| **Nuevo registro** | Formulario para crear registros |
| **Reportes** | Tabla de registros con estados |

---

## Requisitos previos

Antes de empezar necesitas tener instalados:

- **Node.js** (versión 18 o superior) → [descargar en nodejs.org](https://nodejs.org)
- **npm** (viene incluido con Node.js)

Para verificar que los tienes instalados, abre una terminal y escribe:

```bash
node --version
npm --version
```

Deberías ver algo como `v20.x.x` y `10.x.x`.

---

## Pasos para ejecutar el proyecto

### 1. Abre la carpeta del proyecto en VS Code

Puedes hacerlo de dos formas:

**Opción A – Desde VS Code:**
- Abre VS Code
- Ve a `Archivo → Abrir carpeta…`
- Selecciona la carpeta `udea-app`

**Opción B – Desde la terminal:**
```bash
cd udea-app
code .
```

---

### 2. Abre la terminal integrada de VS Code

En VS Code presiona:
- **Windows / Linux:** `Ctrl + `` ` (tecla acento grave, a la izquierda del 1)
- **Mac:** `Cmd + `` `

O ve al menú: `Terminal → Nueva terminal`

---

### 3. Instala las dependencias

En la terminal escribe:

```bash
npm install
```

Esto descargará todas las librerías necesarias (React, Vite, lucide-react). Solo debes hacerlo **una vez**.

Cuando termine verás algo como:

```
added 150 packages in 12s
```

---

### 4. Inicia el servidor de desarrollo

```bash
npm run dev
```

Verás una salida similar a:

```
  VITE v6.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### 5. Abre la aplicación en el navegador

Haz clic en el enlace `http://localhost:5173/` o cópialo en tu navegador.

¡Listo! La aplicación está corriendo en vivo.

---

## Uso de la aplicación

1. **Ingresa** con cualquier correo y contraseña (no valida credenciales reales)
2. Navega por el **menú lateral** para explorar cada sección
3. La vista por defecto es **Sociedad y Cultura Digital**
4. El botón de **cerrar sesión** (ícono de salida junto al nombre) te regresa al login

---

## Comandos disponibles
|-----------------------|---------------------------------------------------------|
| Comando               | Descripción                                             |
|-----------------------|---------------------------------------------------------|
| `npm run dev`         | Inicia el servidor de desarrollo (modo local)           |
| `npm run build`       | Genera la versión optimizada para producción en `/dist` |
| `npm run preview`     | Previsualiza la versión de producción localmente        |
| `npx vite --host 0.0.0.0 --port 5173`|para configurar puerto de carga el linux  |
|---------------------------------------------------------------------------------|


## Estructura del proyecto

```
udea-app/
├── index.html                  # Punto de entrada HTML
├── vite.config.js              # Configuración de Vite
├── package.json                # Dependencias del proyecto
└── src/
    ├── main.jsx                # Arranque de React
    └── components/
        ├── App.jsx             # Pantalla de login
        ├── App.module.css
        ├── Dashboard.jsx       # Layout principal (sidebar + topbar + main)
        ├── Dashboard.module.css
        ├── Sidebar.jsx         # Menú lateral de navegación
        ├── Sidebar.module.css
        ├── Topbar.jsx          # Barra superior con saludo y acciones
        ├── Topbar.module.css
        ├── CulturaDigital.jsx  # Vista principal del módulo (la del mockup)
        ├── CulturaDigital.module.css
        ├── Inicio.jsx          # Vista: Panel de inicio con estadísticas
        ├── Servicios.jsx       # Vista: Catálogo de servicios
        ├── NuevoRegistro.jsx   # Vista: Formulario de registro
        ├── Reportes.jsx        # Vista: Tabla de reportes
        └── Views.module.css    # Estilos compartidos entre vistas
```

---

## Tecnologías utilizadas

| Tecnología | Para qué sirve |
|---|---|
| **React 18** | Librería para construir interfaces de usuario |
| **Vite** | Empaquetador y servidor de desarrollo ultrarrápido |
| **CSS Modules** | Estilos con alcance local (sin conflictos entre componentes) |
| **lucide-react** | Íconos SVG limpios y ligeros |

---

## Solución de problemas frecuentes

**Error: `npm` no se reconoce como comando**
→ Node.js no está instalado. Descárgalo en [nodejs.org](https://nodejs.org) y reinicia la terminal.

**Error: `Cannot find module '...'`**
→ Ejecuta `npm install` de nuevo.

**El puerto 5173 ya está en uso**
→ Vite usará automáticamente el siguiente puerto disponible (5174, 5175…). Mira la terminal para ver cuál.

**La página se ve en blanco**
→ Abre la consola del navegador (`F12 → Consola`) y revisa si hay errores en rojo.

---

## Detener el servidor

En la terminal donde corre `npm run dev`, presiona:

```
Ctrl + C

```

---

*Proyecto educativo – Tdea – Clase de Sociedad y Cultura Digital*
