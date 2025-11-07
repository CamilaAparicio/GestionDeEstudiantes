## Bienvenido a StudiesApp

### StudiesApp es una web que organiza la información de los estudiantes. Desarrollada en React + MUI, está pensada de manera simple para docentes que necesitan información rapida y precisa
----
## Tecnologías Utilizadas
* Listado de estudiantes con sus datos con botón de borrado
* Formulario para agregar nuevos alumnos
* Drawer para Mobiles
* Filtro de estudiantes por cursos
---
## Estructura Modular:
```
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
### Mejoras a implementar a futuro
* Aplicación de Api context
* Mejorar en responsive
---
### Deployado en vercel:
[Gestion de estudiantes](https://gestion-de-estudiantes.vercel.app/).

## Home Desktop
<img width="1893" height="935" alt="ThemeLight" src="https://github.com/user-attachments/assets/9d09930d-9a93-4cee-a9eb-7a487870403e" />

### DarkTheme
<img width="1892" height="875" alt="ThemeDark" src="https://github.com/user-attachments/assets/4bb5f5b9-7aae-47b0-ba96-3d441171ca3e" />

### Mobile 
<img width="406" height="828" alt="image" src="https://github.com/user-attachments/assets/40ced80a-f6a5-48bc-83f5-8784da9f79a2" />



