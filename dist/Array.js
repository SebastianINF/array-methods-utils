"use strict";
const NEnt = require('./NEnt');
// Implementación del método 'cargar' para el prototipo de Array
Array.prototype.cargar = function (numeroDeElementos, valorInicial, valorFinal) {
    this.length = numeroDeElementos;
    for (let i = 0; i < this.length; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;
        this[i] = numeroAleatorio;
    }
};
Array.prototype.cargarElementoXElemento = function (numero) {
    this[this.length] = numero;
    this.length++;
};
Array.prototype.descargar = function descargar() {
    return '{' + this.toString() + '}';
};
Array.prototype.cargarSerieAritmetica = function cargarSerieAritmetica(numeroDeElementos, valorInicial, razon) {
    this.length = numeroDeElementos;
    for (let i = 0; i < this.length; i++) {
        this[i] = valorInicial + i * razon;
    }
};
Array.prototype.cargarSerieFibonacci = function cargarSerieFibonacci(numeroDeElementos) {
    this.length = numeroDeElementos;
    this[0] = 0;
    this[1] = 1;
    if (this.length <= 0)
        return;
    if (this.length === 1)
        return;
    for (let i = 2; i < this.length; i++) {
        this[i] = this[i - 1] + this[i - 2];
    }
};
Array.prototype.seleccionarPorPosicion = function seleccionarPorPosicion(intervalo, v2) {
    const numeroDePosiciones = this.length / intervalo;
    for (let i = 0; i < numeroDePosiciones; i++) {
        v2.cargarElementoXElemento(this[i * intervalo]);
    }
};
Array.prototype.seleccionarPrimos = function seleccionarPrimos(v2) {
    const n1 = new NEnt();
    for (let i = 0; i < this.length; i++) {
        n1.cargar(this[i]);
        n1;
        if (n1.verificarPrimos()) {
            v2.cargarElementoXElemento(this[i]);
        }
    }
};
Array.prototype.seleccionarNoPrimos = function seleccionarNoPrimos(v3) {
    const n1 = new NEnt();
    for (let i = 0; i < this.length; i++) {
        n1.cargar(this[i]);
        if (!n1.verificarPrimos()) {
            v3.cargarElementoXElemento(this[i]);
        }
    }
};
Array.prototype.seleccionarBuenos = function seleccionarBuenos(v2) {
    const media = this.promedio();
    const estandar = this.desviacionEstandar();
    const rango = media + estandar;
    for (let i = 0; i < this.length; i++) {
        if (this[i] > rango) {
            v2.cargarElementoXElemento(this[i]);
        }
    }
};
Array.prototype.maximo = function maximo() {
    let dr = this[0];
    for (let i = 1; i < this.length; i++) {
        if (this[i] > dr) {
            dr = this[i];
        }
    }
    return dr;
};
Array.prototype.frecuencia = function frecuencia(elemento) {
    let c = 0;
    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] === elemento) {
            c++;
        }
    }
    return c;
};
Array.prototype.maximoYfrecuencia = function maximoYfrecuencia(objetoMaxYFrec) {
    objetoMaxYFrec.maximo = this.maximo();
    objetoMaxYFrec.frecuencia = this.frecuencia(objetoMaxYFrec.maximo);
};
Array.prototype.promedio = function promedio() {
    let suma = 0;
    for (let i = 0; i < this.length; i++) {
        suma += this[i];
    }
    return suma / this.length;
};
Array.prototype.desviacionMedia = function desviacionMedia() {
    const media = this.promedio();
    let suma = 0;
    for (let i = 0; i < this.length; i++) {
        suma += Math.abs(this[i] - media);
    }
    return suma / this.length;
};
Array.prototype.desviacionEstandar = function desviacionEstandar() {
    const media = this.promedio();
    let suma = 0;
    for (let i = 0; i < this.length; i++) {
        suma += Math.pow(this[i] - media, 2);
    }
    return Math.sqrt(suma / this.length);
};
Array.prototype.busquedaBinaria = function busquedaBinaria(valorBuscado) {
    this.ordenamientoBurbujaAscendente();
    let izquierda = 0;
    let derecha = this.length - 1;
    while (izquierda <= derecha) {
        const medio = izquierda + Math.floor((derecha - izquierda) / 2);
        if (this[medio] === valorBuscado) {
            return true;
        }
        if (this[medio] > valorBuscado) {
            derecha = medio - 1;
        }
        else {
            izquierda = medio + 1;
        }
    }
    return false;
};
Array.prototype.busquedaSecuencial = function (valorBuscado) {
    for (let i = 0; i < this.length; i++) {
        if (valorBuscado === this[i]) {
            return true;
        }
    }
    return false;
};
Array.prototype.retornarDimension = function () {
    return this.length;
};
Array.prototype.retornarElemento = function (elemento) {
    return this[elemento];
};
Array.prototype.retornarArray = function () {
    return this;
};
Array.prototype.eliminarDuplicados = function () {
    const arraySinDuplicados = Array.from(new Set(this));
    this.length = 0;
    this.push(...arraySinDuplicados);
};
Array.prototype.intercambiar = function (a, b) {
    const temp = this[a];
    this[a] = this[b];
    this[b] = temp;
};
Array.prototype.ordenamientoBurbujaAscendente =
    function ordenamientoBurbujaAscendente() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this[j] > this[j + 1]) {
                    this.intercambiar(j, j + 1);
                }
            }
        }
    };
Array.prototype.ordenamientoBurbujaDescendente =
    function ordenamientoBurbujaDescendente() {
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this[j] < this[j + 1]) {
                    this.intercambiar(j, j + 1);
                }
            }
        }
    };
Array.prototype.ordenamientoPorSeleccionAscendente = function () {
    for (let i = 0; i < this.length; i++) {
        let indiceMinimo = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] < this[indiceMinimo]) {
                indiceMinimo = j;
            }
        }
        const temp = this[i];
        this[i] = this[indiceMinimo];
        this[indiceMinimo] = temp;
    }
};
Array.prototype.ordenamientoBurbujaDescendente = function () {
    for (let i = 0; i < this.length; i++) {
        let indicemaximo = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[j] > this[indicemaximo]) {
                indicemaximo = j;
            }
        }
        const temp = this[i];
        this[i] = this[indicemaximo];
        this[indicemaximo] = temp;
    }
};
Array.prototype.ordenamientoBurbujaAscendente = function () {
    let intercambio;
    do {
        intercambio = false;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] > this[i + 1]) {
                const temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                intercambio = true;
            }
        }
    } while (intercambio);
};
Array.prototype.ordenamientoBurbujaDescendente = function () {
    let intercambio;
    do {
        intercambio = false;
        for (let i = 0; i < this.length - 1; i++) {
            if (this[i] < this[i + 1]) {
                const temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                intercambio = true;
            }
        }
    } while (intercambio);
};
Array.prototype.pertenencia = function (numero) {
    let pertenece = false;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === numero) {
            pertenece = true;
            break;
        }
    }
    return pertenece;
};
Array.prototype.interseccionDeConjuntos = function (v1, v2) {
    const longitudV1 = v1.retornarDimension();
    const longitudV2 = v2.retornarDimension();
    const array1 = v1.retornarArray();
    const array2 = v2.retornarArray();
    for (let i = 0; i < longitudV1; i++) {
        for (let j = 0; j < longitudV2; j++) {
            if (array1[i] === array2[j]) {
                this.cargarElementoXElemento(array1[i]);
                break;
            }
        }
    }
    this.eliminarDuplicados();
};
Array.prototype.unionDeConjuntos = function (v1, v2) {
    const longitudV1 = v1.retornarDimension();
    const longitudV2 = v2.retornarDimension();
    const array1 = v1.retornarArray();
    const array2 = v2.retornarArray();
    for (let i = 0; i < longitudV1; i++) {
        this.cargarElementoXElemento(array1[i]);
    }
    for (let j = 0; j < longitudV2; j++) {
        this.cargarElementoXElemento(array2[j]);
    }
    this.eliminarDuplicados();
};
Array.prototype.diferenciaDeConjuntosAB = function (v1, v2) {
    const longitudV1 = v1.retornarDimension();
    const array1 = v1.retornarArray();
    for (let i = 0; i < longitudV1; i++) {
        if (!v2.pertenencia(array1[i])) {
            this.cargarElementoXElemento(array1[i]);
        }
    }
    this.eliminarDuplicados();
};
Array.prototype.diferenciaDeConjuntosBA = function (v1, v2) {
    const longitudV2 = v2.retornarDimension();
    const array2 = v2.retornarArray();
    for (let i = 0; i < longitudV2; i++) {
        if (!v1.pertenencia(array2[i])) {
            this.cargarElementoXElemento(array2[i]);
        }
    }
    this.eliminarDuplicados();
};
Array.prototype.segmentarParYNoPar = function () {
    const n1 = new NEnt();
    const n2 = new NEnt();
    for (let p = 0; p < this.length - 1; p++) {
        for (let d = p + 1; d < this.length; d++) {
            n1.cargar(this[d]);
            n2.cargar(this[p]);
            if ((n1.verificarPar() && !n2.verificarPar()) ||
                (n1.verificarPar() && n2.verificarPar() && this[d] < this[p]) ||
                (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p])) {
                this.intercambiar(d, p);
            }
        }
    }
};
Array.prototype.segmentarPrimoYNoPrimo = function () {
    const n1 = new NEnt();
    const n2 = new NEnt();
    for (let p = 0; p < this.length - 1; p++) {
        for (let d = p + 1; d < this.length; d++) {
            n1.cargar(this[d]);
            n2.cargar(this[p]);
            if ((n1.verificarPrimos() && !n2.verificarPrimos()) ||
                (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p]) ||
                (!n1.verificarPrimos() && !n2.verificarPrimos() && this[d] < this[p])) {
                this.intercambiar(d, p);
            }
        }
    }
};
Array.prototype.intercalarParYNoPar = function () {
    let b = true;
    const n1 = new NEnt();
    const n2 = new NEnt();
    for (let p = 0; p < this.length - 1; p++) {
        if (b) {
            for (let d = p + 1; d < this.length; d++) {
                n1.cargar(this[d]);
                n2.cargar(this[p]);
                if ((n1.verificarPar() && !n2.verificarPar()) ||
                    (n1.verificarPar() && n2.verificarPar() && this[d] < this[p]) ||
                    (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p])) {
                    this.intercambiar(d, p);
                }
            }
        }
        else {
            for (let d = p + 1; d < this.length; d++) {
                n1.cargar(this[d]);
                n2.cargar(this[p]);
                if ((!n1.verificarPar() && n2.verificarPar()) ||
                    (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p]) ||
                    (n1.verificarPar() && n2.verificarPar() && this[d] < this[p])) {
                    this.intercambiar(d, p);
                }
            }
        }
        b = !b;
    }
};
Array.prototype.intercalarPrimoYNoPrimo = function () {
    let b = true;
    const n1 = new NEnt();
    const n2 = new NEnt();
    for (let p = 0; p < this.length - 1; p++) {
        if (b) {
            for (let d = p + 1; d < this.length; d++) {
                n1.cargar(this[d]);
                n2.cargar(this[p]);
                if ((n1.verificarPrimos() && !n2.verificarPrimos()) ||
                    (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p]) ||
                    (!n1.verificarPrimos() && !n2.verificarPrimos() && this[d] < this[p])) {
                    this.intercambiar(d, p);
                }
            }
        }
        else {
            for (let d = p + 1; d < this.length; d++) {
                n1.cargar(this[d]);
                n2.cargar(this[p]);
                n2.verificarPrimos();
                if ((!n1.verificarPrimos() && n2.verificarPrimos()) ||
                    (!n1.verificarPrimos() &&
                        !n2.verificarPrimos() &&
                        this[d] < this[p]) ||
                    (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p])) {
                    this.intercambiar(d, p);
                }
            }
        }
        b = !b;
    }
};
Array.prototype.invertir = function () {
    let inicio = 0;
    let fin = this.length - 1;
    while (inicio < fin) {
        this.intercambiar(inicio, fin);
        inicio++;
        fin--;
    }
};
Array.prototype.contarSubmultiplos = function () {
    let contador = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] % (i + 1) === 0) {
            contador++;
        }
    }
    return contador;
};
Array.prototype.buscarElementoMayor = function (indice) {
    let mayor = 0;
    for (let i = 0; i < this.length; i++) {
        if (i % indice === 0 && mayor < this[i]) {
            mayor = this[i];
        }
    }
    return mayor;
};
Array.prototype.buscarMedia = function (indice) {
    let suma = 0;
    let contador = 0;
    for (let i = 0; i < this.length; i++) {
        if (i % indice === 0) {
            suma += this[i];
            contador++;
        }
    }
    return suma / contador;
};
Array.prototype.verificarElementosIguales = function () {
    const inicial = this[0];
    for (let i = 0; i < this.length; i++) {
        if (inicial !== this[i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.verificarSegmentoOrdenado = function (a, b) {
    for (let i = a; i < b; i++) {
        if (this[i] > this[i + 1]) {
            return false;
        }
    }
    return true;
};
Array.prototype.insertarArrayPorPosicion = function (v1, v2, posicion) {
    const n1 = v1.retornarDimension();
    const n2 = v2.retornarDimension();
    const vector1 = v1.retornarArray();
    const vector2 = v2.retornarArray();
    for (let i = 0; i < posicion; i++) {
        this.cargarElementoXElemento(vector1[i]);
    }
    for (let i = 0; i < n2; i++) {
        this.cargarElementoXElemento(vector2[i]);
    }
    for (let i = posicion; i < n1; i++) {
        this.cargarElementoXElemento(vector1[i]);
    }
};
Array.prototype.eliminarElementosDelArrayIndicandoLasPosiciones = function (a, b) {
    const copia = new Array();
    for (let i = 0; i < this.length; i++) {
        if (i < a || i > b) {
            copia.cargarElementoXElemento(this[i]);
        }
    }
    this.length = 0;
    this.push(...copia);
};
Array.prototype.duplicarElementos = function () {
    const copia = new Array();
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < 2; j++) {
            copia.cargarElementoXElemento(this[i]);
        }
    }
    this.length = 0;
    this.push(...copia);
    this.length = copia.length;
};
Array.prototype.concatenar = function (v1) {
    const n1 = v1.length;
    for (let i = 0; i < n1; i++) {
        this.cargarElementoXElemento(v1[i]);
    }
};
Array.prototype.ordenarElementosDeUnSegmento = function (a, b) {
    const array1 = new Array();
    const array2 = new Array();
    const array3 = new Array();
    for (let i = 0; i < a; i++) {
        array1.cargarElementoXElemento(this[i]);
    }
    for (let i = a; i <= b; i++) {
        array2.cargarElementoXElemento(this[i]);
    }
    for (let i = b + 1; i < this.length; i++) {
        array3.cargarElementoXElemento(this[i]);
    }
    array2.ordenamientoBurbujaAscendente();
    array1.concatenar(array2);
    array1.concatenar(array3);
    this.length = 0;
    this.push(...array1);
    this.length = array1.length;
};
Array.prototype.buscarElementoMenosRepetido = function () {
    let leastFrequentNumber = 0;
    let minCount = this.length + 1;
    const array = [...this];
    for (let i = 0; i < this.length; i++) {
        let count = 0;
        const currentNumber = array[i];
        if (currentNumber === Number.MIN_VALUE) {
            continue;
        }
        for (let j = i; j < this.length; j++) {
            if (array[j] === currentNumber) {
                count++;
                array[j] = Number.MIN_VALUE;
            }
        }
        if (count < minCount) {
            minCount = count;
            leastFrequentNumber = currentNumber;
        }
    }
    return leastFrequentNumber;
};
Array.prototype.encontrarElementoMenosRepetidoEntreUnSegmento = function (a, b) {
    const array1 = new Array();
    for (let i = a; i <= b; i++) {
        array1.cargarElementoXElemento(this[i]);
    }
    const menosRepetido = array1.buscarElementoMenosRepetido();
    return menosRepetido;
};
Array.prototype.cargarFrecuencia = function (v3, v2) {
    for (let i = 0; i < v2.length; i++) {
        v3.cargarElementoXElemento(this.frecuencia(v2[i]));
    }
};
Array.prototype.encontrarLaFrecuenciaDeDistribucionEntreUnSegmento = function (a, b, v2, v3) {
    const v1 = new Array();
    for (let i = a; i <= b; i++) {
        v1.cargarElementoXElemento(this[i]);
    }
    v1.ordenamientoBurbujaAscendente();
    for (let i = 0; i < v1.length; i++) {
        v2.cargarElementoXElemento(v1[i]);
    }
    v2.eliminarDuplicados();
    v1.cargarFrecuencia(v3, v2);
};
Array.prototype.contarCapicuas = function () {
    let contarCapicuas = 0;
    const n1 = new NEnt();
    for (let i = 0; i < this.length; i++) {
        n1.cargar(this[i]);
        if (!n1.verificarCapicua()) {
            break;
        }
        contarCapicuas++;
    }
    return contarCapicuas;
};
Array.prototype.contarNoCapicuas = function () {
    let contarNoCapicuas = 0;
    const n1 = new NEnt();
    for (let i = 0; i < this.length; i++) {
        n1.cargar(this[i]);
        if (n1.verificarCapicua()) {
            break;
        }
        contarNoCapicuas++;
    }
    return contarNoCapicuas;
};
Array.prototype.segmentarCapicuaYNoCapicua = function () {
    const n1 = new NEnt();
    const n2 = new NEnt();
    for (let p = 0; p < this.length - 1; p++) {
        for (let d = p + 1; d < this.length; d++) {
            n1.cargar(this[d]);
            n2.cargar(this[p]);
            if ((n1.verificarCapicua() && !n2.verificarCapicua()) ||
                (n1.verificarCapicua() && n2.verificarCapicua() && this[d] < this[p]) ||
                (!n1.verificarCapicua() && !n2.verificarCapicua() && this[d] < this[p])) {
                this.intercambiar(d, p);
            }
        }
    }
};
Array.prototype.intercalarPrimoYNoPrimoDeUnSegmento = function (a, b) {
    const array1 = new Array();
    const array2 = new Array();
    const array3 = new Array();
    for (let i = 0; i < a; i++) {
        array1.cargarElementoXElemento(this[i]);
    }
    for (let i = a; i <= b; i++) {
        array2.cargarElementoXElemento(this[i]);
    }
    for (let i = b + 1; i < this.length; i++) {
        array3.cargarElementoXElemento(this[i]);
    }
    array2.ordenamientoBurbujaAscendente();
    array2.intercalarPrimoYNoPrimo();
    array1.concatenar(array2);
    array1.concatenar(array3);
    this.length = 0;
    this.push(...array1);
    this.length = array1.length;
};
