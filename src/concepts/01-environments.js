/**
 * Actualiza el elemento HTML dado para mostrar las variables de entorno.
 * 
 * Esta función genera dinámicamente una cadena HTML que muestra varias
 * variables de entorno. Luego establece el innerHTML del elemento proporcionado
 * con este HTML generado. Esto es útil para depurar y verificar configuraciones
 * específicas del entorno.
 * 
 * @param {HTMLElement} element - El elemento HTML que se actualizará con las variables de entorno.
 * 
 * Variables de entorno utilizadas:
 * - import.meta.env.DEV: Indica si el entorno es de desarrollo.
 * - import.meta.env.PROD: Indica si el entorno es de producción.
 * - import.meta.env.MODE: Modo actual (desarrollo o producción).
 * - import.meta.env.BASE_URL: URL base definida en las variables de entorno.
 * - import.meta.env.VITE_API_KEY: Clave API definida en las variables de entorno.
 * - import.meta.env.VITE_BASE_URL: Otra URL base definida en las variables de entorno.
 */
export const environmentsComponent = (element) => {

    // Define una plantilla HTML que muestra las variables de entorno
    // Las variables se acceden usando import.meta.env.NOMBRE_DE_LA_VARIABLE
    const html = `
    variables:
        DEV: ${import.meta.env.DEV} <br>         <!-- Indica si el entorno es de desarrollo -->
        PROD: ${import.meta.env.PROD} <br>       <!-- Indica si el entorno es de producción -->
        MODE: ${import.meta.env.MODE} <br>       <!-- Modo actual (desarrollo o producción) -->
        BASE_URL: ${import.meta.env.BASE_URL} <br> <!-- URL base definida en las variables de entorno -->
        VITE_API_KEY: ${import.meta.env.VITE_API_KEY} <br> <!-- Clave API definida en las variables de entorno -->
        VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL} <br> <!-- Otra URL base definida en las variables de entorno -->
    `;

    // Inserta la plantilla HTML en el elemento proporcionado
    element.innerHTML = html;
}