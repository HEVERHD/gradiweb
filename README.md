# GradiWeb - Prueba Desarrollador Front-end

Este es el repositorio para la prueba de desarrollador front-end GradiWeb.

Landing page de productos construida con [ React.js ](https://react.dev/) Última versión estable 18.1 ( 26 de abril de 2022) y empaquetador de módulos [ Webpack ](https://react.dev/) Última versión estable v5 .

---

- **Autor:** Hevert Gelis - <hever11.hdgd@gmail.com>

---

## Comenzando 🚀

#### **REQUERIMIENTOS MÍNIMOS**

- Git
- NodeJS v18.17.1 LTS
- npm v10.1.0
- axios
- react-navigation
- react-react-router-dom
- webpack
- sass
- sweetalert2
- babel

#### **CONFIGURACIÓN INICIAL**

Para iniciar a codificar, recuerde que se usa [GitHub Flow](https://guides.github.com/introduction/flow/) para el manejo de las ramas de `Git`, por lo cual asegúrese de que esté ubicado en la rama `Dev` antes de realizar cualquier cambio, realizar un `git pull` para actualizar su repositorio local y posteriormente crear una rama `feature/{nombre-cambio}` a partir de `Dev` en dónde realizar los cambios correspondientes.

No haga cambios directamente sobre la rama `develop` ni tampoco sobre `main`, siempre cree una nueva rama `feature` y una vez realizado `git push` al servidor con sus cambios, cree un pull request con los cambios hacia `develop` para que otra persona del equipo o en su defecto usted mismo, revise y apruebe el PR.

### **Iniciar la Aplicación Landing de GradiWeb**

##### **npm**

Localmente, ejecute `npm install` para descargar las dependencias de la aplicación después de haber realizado un `git pull`. Además de descargar, también realiza una serie de procedimientos automáticos de acuerdo al entorno de desarrollo en el que se ejecuta. Nunca ejecute `npm update`. Si quiere subir la versión de una dependencia, edite la versión de dicha dependencia en el archivo `package.json` directamente, y luego ejecute nuevamente `npm install`.

Si quiere actualizar la versión de alguna dependencia, le recomendamos instalar [npm-check-updates](https://github.com/raineorshine/npm-check-updates) con el comando:

```
npm i -g npm-check-updates
```

### \*_Lista de comandos_

para inicializar el proyecto en desarrollo ejecutamos desde la raiz del proyecto

```
npm run start
```

`se abrira una pestaña en el puerto localhost:8080 en tu navegador predeterminado`

para generar el build de produccion ejecutamos desde la raiz del proyecto

```
npm run build

```

`esto genera una carpeta llamada build en la raiz del proyecto`
`para inicializar el build de produccion debes correr el siguiente comando en la raiz de la carpeta generada "build"`

```
npx serve
```

### \*_Pantalla inicial de la App_ y estamos listo para navegar en ella

<img src="https://raw.githubusercontent.com/HEVERHD/gradiweb/main/Escritorio-PC-1380x720.png" alt="Texto alternativo" width="300">

### \*\*Link de despliege plataforma vercel

https://expo.dev/accounts/heverdj72/projects/todo-app-servy/builds/b1c660d6-a31f-4c12-b75b-a78076cda61b

## Arquitectura basada en La arquitectura limpia (Clean Architecture)

promueve la organización, la legibilidad y la mantenibilidad del código al establecer límites claros entre las diferentes capas de la aplicación. Esto facilita la evolución de la aplicación a lo largo del tiempo y su adaptación a nuevas tecnologías o cambios en los requisitos
