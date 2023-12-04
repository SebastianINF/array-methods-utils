/**
 * Clase que representa un número entero y proporciona métodos para manipularlo.
 */
export default class NEnt {
    valor: number;
    /**
     * Constructor de la clase NEnt. Inicializa el valor del número entero.
     * @constructor
     */
    constructor();
    /**
     * Carga un número en la instancia.
     * @param {number} numero - Número que se carga en la instancia.
     */
    cargar(numero: number): void;
    /**
     * Descarga el valor almacenado como una cadena.
     * @returns {string} - Valor almacenado convertido a cadena.
     */
    descargar(): string;
    /**
     * Invierte el número almacenado.
     */
    invertir(): void;
    /**
     * Calcula y actualiza el número de dígitos en el valor almacenado.
     */
    numeroDigitos(): void;
    /**
     * Verifica si el número almacenado es par.
     * @returns {boolean} - true si el número es par, false de lo contrario.
     */
    verificarPar(): boolean;
    /**
     * Verifica si el número almacenado es primo.
     * @returns {boolean} - true si el número es primo, false de lo contrario.
     */
    verificarPrimos(): boolean;
    /**
     * Verifica si el número almacenado es capicúa.
     * @returns {boolean} - true si el número es capicúa, false de lo contrario.
     */
    verificarCapicua(): boolean;
}
