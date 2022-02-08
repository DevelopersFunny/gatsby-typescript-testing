## 🚀 Inicio Rápido

1.  **Clona el repositorio.**

    Una vez creado el repositorio procede a instalar con NPM o Yarn

    ```shell
    # ejemplo del comando para instalar
    npm install
    ```

2.  **Iniciar el entorno de desarrollo.**

    Navega hasta el directorio de tu sitio e inicia el ambiente.

    ```shell
    cd my-react-gatsby-testing-site/
    npm run develop
    ```

3.  **Abre el código y empieza a personalizarlo!**

    Tu sitio ahora es accesible mediante la siguiente url: http://localhost:8000!

    Edita `src/pages/index.js` para ver la actualización del sitio en tiempo real!

4.  **Puedes ver las pruebas visuales con StoryBook**

    Navega hasta el directorio de tu sitio e inicia el ambiente de pruebas con StoryBook.

    ```shell
    cd my-react-gatsby-testing-site/
    npm run storybook
    ```

5.  **Realiza las pruebas con Jest, React Testing Library y Puppeteer**

    Navega hasta el directorio de tu sitio y ejecuta el comando para realizar las pruebas de Jest y RTL de cada uno tus componentes de Storybook, esto te generara dos carpetas, una para los snapshots de tu código de stories y otra para los snapshots de las imágenes.
    **_Toma en cuenta que en este punto se pueden realizar capturas de pantalla de tus componentes haciendo uso de Puppeteer, por lo que tendrás que tener iniciado en una consola Storybook_**

    ```shell
    cd my-react-gatsby-testing-site/
    npm run test
    ```

6.  **Revisa el avance del código cubierto por las pruebas**

    Navega hasta el directorio de tu sitio y ejecuta el comando para revisar que todo tu código ha sido cubierto por las pruebas de Jest y RTL, de cada uno de tus componentes de Storybook.
    **_Necesitas tener storybook ejecutándose en todo momento al realizar las pruebas para que no fallen, en casi de tener archivos con extension .stories.[jt]sx, si no las tienes y no vas a usarlo puedes borrar también archivo Storyshots.test.tsx que se encuentra en raíz_**
    **_En este punto tendrás el watch de Jest en todo momento, para revisar todos los cambios que hagas cada que guardas el archivo que estés modificando_**

    ```shell
    cd my-react-gatsby-testing-site/
    npm run test:coverage
    ```

7.  **Publica tu pagina en GitHub Pages**

    En la carpeta .github tendrás el GitHub Action que te permitirá publicar tu sitio en GitHub Pages, revisa que tengas la rama gh-pages y que hayas seleccionado la rama correcta para el despliegue en la configuración de tu GitHub Repository.

    **_Los archivos a cambiar para que despliegue correctamente serán los siguientes, si lo quieres en raíz porque es tu blog personal de tu gh-pages quita --prefix-paths de package.json_**

    ```js
    # gatsby-config.js
    module.exports = {
      siteMetadata: {
        siteUrl: "https://sh4d1t0.github.io"
      },
      pathPrefix: "/reponame",
    }
    ```

    ```json
    # package.json
    {
      "scripts": {
        "deploy": "gatsby build --prefix-paths"
      }
    }
    ```

    # Referencias:

    - [Github Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
    - [Gatsby y GitHub Pages](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

## 🚀 Aprende mas

1. **Documentación de React**

   - [Documentación](https://es.reactjs.org/docs/getting-started.html)

   - [Conceptos Iniciales](https://es.reactjs.org/docs/hello-world.html)

   - [Guías Avanzadas](https://es.reactjs.org/docs/accessibility.html)

   - [API](https://es.reactjs.org/docs/react-api.html)

   - [HOOKS](https://es.reactjs.org/docs/hooks-intro.html)

   - [Pruebas](https://es.reactjs.org/docs/testing.html)

2. **Documentación de Gatsby**

   - [Documentación](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Tutoriales](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [API](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Plugins](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

3. **Documentación de Jest**

   - [Documentación](https://jestjs.io/es-ES/docs/getting-started)

   - [Guías](https://jestjs.io/es-ES/docs/snapshot-testing)

   - [Guías de Frameworks](https://jestjs.io/es-ES/docs/tutorial-react)

4. **Documentación de React Testing**

   - [Documentación](https://testing-library.com/docs/)

   - [API](https://testing-library.com/docs/queries/about)

   - [Guías de Frameworks](https://testing-library.com/docs/dom-testing-library/intro)

   - [Interacciones de Usuario](https://testing-library.com/docs/user-event/intro)

   - [Ecosistemas](https://testing-library.com/docs/ecosystem-jest-dom)

   - [Ejemplos](https://testing-library.com/docs/recipes)

5. **Documentación de Tailwind CSS**

   - [Documentación](https://tailwindcss.com/docs/installation)

   - [Conceptos](https://tailwindcss.com/docs/utility-first)

   - [Personalización](https://tailwindcss.com/docs/configuration)
