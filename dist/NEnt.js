"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Clase que representa un número entero y proporciona métodos para manipularlo.
 */
class NEnt {
    valor;
    /**
     * Constructor de la clase NEnt. Inicializa el valor del número entero.
     * @constructor
     */
    constructor() {
        this.valor = 0;
    }
    /**
     * Carga un número en la instancia.
     * @param {number} numero - Número que se carga en la instancia.
     */
    cargar(numero) {
        this.valor = numero;
    }
    /**
     * Descarga el valor almacenado como una cadena.
     * @returns {string} - Valor almacenado convertido a cadena.
     */
    descargar() {
        return this.valor.toString();
    }
    /**
     * Invierte el número almacenado.
     */
    invertir() {
        let digito;
        let resultado = 0;
        let numero = this.valor;
        while (numero > 0) {
            digito = numero % 10;
            resultado = resultado * 10 + digito;
            numero = Math.floor(numero / 10);
        }
        this.valor = resultado;
    }
    /**
     * Calcula y actualiza el número de dígitos en el valor almacenado.
     */
    numeroDigitos() {
        this.valor = this.valor.toString().length;
    }
    /**
     * Verifica si el número almacenado es par.
     * @returns {boolean} - true si el número es par, false de lo contrario.
     */
    verificarPar() {
        return this.valor % 2 === 0;
    }
    /**
     * Verifica si el número almacenado es primo.
     * @returns {boolean} - true si el número es primo, false de lo contrario.
     */
    verificarPrimos() {
        let r;
        let c = 0;
        for (let i = 1; i <= this.valor; i++) {
            r = this.valor % i;
            if (r === 0) {
                c++;
            }
        }
        return c === 2;
    }
    /**
     * Verifica si el número almacenado es capicúa.
     * @returns {boolean} - true si el número es capicúa, false de lo contrario.
     */
    verificarCapicua() {
        const copia = this.valor;
        this.invertir();
        return copia === this.valor;
    }
}
exports.default = NEnt;