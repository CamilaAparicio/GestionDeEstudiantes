## Bienvenido a StudiesApp

### StudiesApp es una web que organiza la información de los estudiantes. Desarrollada en React + MUI, está pensada de manera simple para docentes que necesitan información rapida y precisa
----
## Tecnologías Utilizadas

## Estructura Modular:
|____package-lock.json
|____package.json
|____public/
| |____StudiesApp.png
|____README.md
|____src/
| |____App.jsx
| |____assets/
| |____components/
| | |____EstudiantesForms
| | |____ThemeButton.jsx
| |____hooks/
| | |____useAllEstudiantes.js
| | |____useDeleteEstudiante.js
| | |____...
| |____index.css
| |____Layout/
| | |____Drawer.jsx
| | |____Footer.jsx
| | |____MenuLayout.jsx
| | |____Navbar.jsx
| |____main.jsx
| |____pages/
| | |____AddEstudiante/
| | |____AllEstudiante/
| | |____Cursos/
| | |____DeleteEstudiante/
| | |____EditEstudiantePage/
| | |____Home/
| |____router
| | |____AppRouter.jsx/
| |____services
| | |____actualizarEstudiante.js
| | |____crearEstudiante.js
| | |____eliminarEstudiante.js
| | |____ ...
| |____Theme/
| | |____theme.js
| | |____ThemeContext.jsx
| | |____themeProvider.jsx
|____vite.config.js
```
_____
## Como correr el proyecto
1. Clonar el repositorio
```
git clone <repo-url>
```
2. Instalar Dependencias
```
npm install
```
3. Correr el proyecto
```
npm run dev
```
---

##     Rutas Principales
|       Ruta          |                    Descripción                |
| ------------------- |:---------------------------------------------:|
|             /       |            Homepage: pagina principal         |
|       /estudiantes  |               Pagina Estudiantes              |
|         /cursos     |     Aqui se encuentra el filtro por cursos    |
| /estudiantes/agregar|    Formulario para agrega nuevos estudiantes  |
| /estudiantes/lista  |    Presentación por Lista de los estudiantes  |
|        Delete       |            Es botón dentro de la lista        |


---


