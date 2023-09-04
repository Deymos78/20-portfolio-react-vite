# CONFIGURACION CREACION PORTFOLIO

## 1. Inicializacion proyecto

**Nos colocamos en la carpeta en la que crearemos la aplicacion y ejecutaremos el comando**

    npm create vite

*Realizamos la configuracion segun nuestras necesidades, en este caso seleccionamos la opciones de react y vite javascript*

**Ahora instalamos las dependencias del proyecto**

    npm install

**Para ejecutar la aplicacion usaremos**

    npm run dev


## 2. Instalacion de dependencias

1. prop-types nos permitira verificar y validar los props que se pasan a los componentes

    npm install prop-types 

2. Ahora realizaremos la instalacion para babel, nos permite usar escribir javascript moderno y babel se encarga de transformarlo en una version compatible con navegadores y entornos mas antiguos

    npm install --save-dev @babel/core @babel/preset-env
    npm install -D @babel/preset-react

**Ahora tendremos que crear un nuevo archivo en la raiz del proyecto llamado 'babel.config.cjs' y colocar el siguiente bloque dentro Debido a actualizaciones el archivo pasa de ser .js a .cjs**

~~~
    module.exports = {
        presets: [
        ['@babel/preset-env', {targets: { esmodules: true}}],
        ['@babel/preset-react', {runtime: 'automatic'}],
        ],
    };
~~~

3. React  router dom nos permitira gestionar la navegacion y la visualizacion de diferentes componentes o paginas dentro de una aplicacion, sin tener que recargar por completo la pagina

    npm install react-router-dom@6

**Hay que importar en el main el Browse Router**

    import { BrowserRouter } from "react-router-dom";

*Hay que colocar los componentes dentro de las etiquetas BrowseRouter*

~~~
    <BrowserRouter>

        <Componente/>

    </BrowserRouter>
~~~

4. Material UI nos permitira crear una interfaz atractiva de una manera mas sencilla

    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material

5. Instalaremos react-scroll para realizar un desplazamiento suave a diferentes secciones de la pagina web

    npm install react-scroll

6. Animate.css se usara para darle animacion a los componentes

~~~
    <head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    </head>
~~~






