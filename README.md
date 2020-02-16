

## Shawarma utils

Este proyecto permite construir una aplicación de escritorio usando Electron y React. La app dispone de varias funcionalidades que permiten el formateo de json, encoding de texto a base64, en otras cosas.

### Setup

Ver [aqui](/docs/create_react_app.md) para setup del proyecto.

### Instalación Desktop App

Existen 3 formas de usar la app, según sean sus conocimientos, tiempo disponible, conocimientos y nivel de confianza:

1. **"Do it yourself"**: Clonar el proyecto y ejecutar `npm run build`, en la carpeta `/dist` se creara un archivo binario llamado `shawarma-utils-${version}`, que puede ser ejecutado directamente, y un instalador según su sistema operativo, en el caso de Mac, construirá un instalador `.dmg`.

2. **"~~I'm lazy~~ I trust in elegardo"**: Puede dirigirse a la sección 'release' del proyecto de GitHub y bajar la última versión del binario o instalador construido. (*)

3. **"Early adopters"**: Este proyecto tambien tiene una version web y esta desplegado en [GitHub Pages](https://elegardo.github.io/shawarma-utils/). Cualquier nueva funcionalidad estara publicada en ese link, pero si obtienes un 404 o un error no me culpes ... :innocent:

4. **"I don't want to install anything"**: Si no quieres instalar una app nativa y tampoco quieres tener otra pestaña abierta en tu browser, puedes instalarla como accesso directo. Esta app es una Progressive Web App (pwa), para instalarla [sigue](https://www.genbeta.com/paso-a-paso/como-instalar-aplicaciones-web-progresivas-pwa-chrome) estas instrucciones (Chrome).

(*) Si usted esta leyendo esto es porque confia en mi, gracias por eso, pero Mac OS no es tan confiado como usted, al intentar ejecutar el binario, o ejecutar la app después de haberla instalado con el archivo `.dmg`, Mac OS dira que no puede ejecutar la aplicación porque desconoce al desarrollador, usted puede seguir [estas](https://support.apple.com/es-cl/guide/mac-help/mh40616/mac) instrucciones y crear una excepción de seguridad que le permita ejecutar la aplicación sin problemas.
