# Gestin Web (Front-End)

Este proyecto fue creado con el framework de Angular y el gestor de paquetes Yarn, por ende se necesitarán seguir unos pasos para preparar el entorno de desarrollo en su computadora.

# Como preparar el entorno de desarrollo

## Paso 1: Instalar Node.js
Descargar e instalar Node.js desde <a href="https://nodejs.org/es/download">**aquí**</a>

## Paso 2: Instalar Yarn
**Yarn** es un gestor de paquetes alternativo a NPM.

### ¿Porque usar Yarn?
Yarn además de ser un gestor de paquetes, resuelve dependencias, es más rapido gracias al manejo de cache de los paquetes y los comandos son más faciles de entender.

### ¿Como instalar Yarn?
Para instalar Yarn puedes elegirlo al momento de instalar Node.js, o si elegiste NPM por defecto ejecuta el siguiente comando:

```bash
npm install --global yarn
```

## Paso 3: Clona el proyecto
Clona este proyecto con Git con el siguiente comando:

```bash
git clone https://github.com/cervisebas/Gestin_Web_Frontend.git
```

_Alternativamente puedes descargar el archivo comprimido a traves de la interfaz de GitHub._

## Paso 4: Instala las dependencias del proyecto
Una vez instalados los requerimientos y clonado el proyecto, abre una consola en el directorio del proyecto y ejecuta el siguiente comando:

``` bash
yarn install
```

Esto instalara las dependendencias del proyecto listadas en el archivo **package.json**.
<br>
_La instalación de dependencias puede demorar mucho tiempo la primera vez_

# Comandos del proyecto

## Ejecución del proyecto en modo desarrollo
El siguiente comando levanta un servidor local que se actualizara ante cualquier cambio del codigo:

```bash
yarn start
```

Si quieres abrir el servidor para probar en otros dispositivos:

```bash
yarn start --host 0.0.0.0
```


## Empaquetado del proyecto
Para compilar el proyecto y obtener los archivos para desplegar en un servidor hay dos opciones:

### Modo desarrollo
Este comando compila y empaqueta el codigo pero en modo desarrollo, esto sirve para pruebas internas y debuggin.
> [!WARNING]
> En este modo las variables utilizadas son del archivo **enviroment.ts**

```bash
yarn build
```

### Modo producción
Este comando compila, empaqueta y minimifica el codigo en modo producción, aqui ya el codigo se vuelve seguro y el rendimiendo aumenta gracias a la minimificación.

> [!TIP]
> Este modo es el ideal para desplegar al servidor final.

> [!WARNING]
> En este modo las variables utilizadas son del archivo **enviroment.prod.ts**

```bash
yarn build --aot
```