# Variables de entorno

* Las variables de entorno se definen en mayúsculas y se asignan con un signo igual (=). Esto permite cambiar sus valores en un solo lugar en lugar de hacerlo en el código. Estas variables son accesibles en cualquier parte del código usando process.env.NOMBRE_DE_LA_VARIABLE, como process.env.API_KEY y process.env.BASE_URL. El archivo .env que contiene estas variables no se sube a git para proteger las claves, por lo que se debe incluir un archivo .env.template con las variables necesarias y configurar .gitignore para que ignore el archivo .env.

    ```
    API_KEY=EstaEsMiApiKey
    BASE_URL=https://localhost:3000

    ```

 * Variables de entorno utilizadas:

    * - import.meta.env.DEV: Indica si el entorno es de desarrollo.
    * - import.meta.env.PROD: Indica si el entorno es de producción.
    * - import.meta.env.MODE: Modo actual (desarrollo o producción).
    * - import.meta.env.BASE_URL: URL base definida en las variables de entorno.
    * - import.meta.env.VITE_API_KEY: Clave API definida en las variables de entorno.
    * - import.meta.env.VITE_BASE_URL: Otra URL base definida en las variables de entorno.