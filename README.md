

## Shawarma utils

Este proyecto permite construir una aplicación de escritorio usando Electron y React. La app dispone de varias funcionalidades que permiten el formateo de json, encoding de texto a base64, en otras cosas.

### Setup

Ver [aqui](/docs/create_react_app.md) para setup del proyecto.

### Instalación Desktop App

Existen 3 formas de usar la app, según sean sus conocimientos, tiempo disponible, conocimientos y nivel de confianza:

1. **"Do it yourself"**: Clonar el proyecto y ejecutar `npm run build`, en la carpeta `/dist` se creara un archivo binario llamado `shawarma-utils-${version}`, que puede ser ejecutado directamente, y un instalador según su sitema operativo, en el caso de Mac construirá un instalador `.dmg`.

2. **"~~I'm lazy~~ I trust in elegardo"**: Puede dirigirse a la sección 'release' del proyecto de GitHub y bajar la última versión del binario o instalador construido. (*)

3. __"~~I'm don't f***ing understanding anything~~ I don't want to install anything"__: No se preocupe, este proyecto tambien tiene una version web y esta desplegado en [GitHub Pages](https://elegardo.github.io/shawarma-utils/).

(*) Si usted esta leyendo esto es porque confia en mi, gracias por eso, pero Mac OS no es tan confiado como usted, al intentar ejecutar el binario, o ejecutar la app después de haberla instalado con el archivo `.dmg`, Mac OS dira que no puede ejecutar la aplicación porque desconoce al desarrollador, usted puede seguir [estas](https://support.apple.com/es-cl/guide/mac-help/mh40616/mac) instrucciones y crear una excepción de seguridad que le permita ejecutar la aplicación sin problemas.
