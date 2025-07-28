
# mi-proyecto-react

Este es un proyecto creado con Vite y React para desplegar un portafolio/currículum en línea.

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Material UI (MUI)](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [html2canvas](https://html2canvas.hertzen.com/)
- [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/)
- [Lucide React Icons](https://lucide.dev/)

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo.

### `npm run build`
Compila el proyecto para producción en la carpeta `dist`.

### `npm run preview`
Previsualiza el proyecto ya compilado.

### `npm run deploy`
Despliega el contenido de `dist` en GitHub Pages.

> Asegúrate de tener el paquete `gh-pages` instalado y configurado correctamente en tu proyecto.

## Configuración para despliegue en GitHub Pages

- En `vite.config.js`, configura correctamente la base:

```js
base: '/mi-proyecto-react/'
```

- En `package.json`, incluye la propiedad `homepage`:

```json
"homepage": "https://FacundoAC.github.io/mi-proyecto-react"
```

## Estructura del proyecto

```
mi-proyecto-react/
├── public/
├── src/
│   ├── components/
│   ├── assets/
│   └── App.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Requisitos

- Node.js
- npm

## Instalación

```bash
npm install
```

---

Desarrollado por Facundo Angulo Cabrera.
