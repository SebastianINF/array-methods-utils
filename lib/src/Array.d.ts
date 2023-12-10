/**
 * Clase que representa un número entero y proporciona métodos para manipularlo.
 */
declare class NEnt {
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
interface ObjetoMaxYFrec {
    maximo: number;
    frecuencia: number;
}
interface Array<T> {
    /**
     * Carga el array con números aleatorios en un rango específico.
     * @param {number} numeroDeElementos - Número de elementos a cargar.
     * @param {number} valorInicial - Valor mínimo del rango.
     * @param {number} valorFinal - Valor máximo del rango.
     */
    cargar(numeroDeElementos: number, valorInicial: number, valorFinal: number): void;
    /**
     * Carga un elemento en el array.
     * @param {number} numero - Elemento a cargar.
     */
    cargarElementoXElemento(numero: number): void;
    /**
     * Descarga el array en formato de cadena.
     * @returns {string} - Cadena que representa el array.
     */
    descargar(): void;
    /**
     * Carga el array con una serie aritmética.
     * @param {number} numeroDeElementos - Número de elementos a cargar.
     * @param {number} valorInicial - Primer término de la serie.
     * @param {number} razon - Razón de la serie.
     */
    cargarSerieAritmetica(numeroDeElementos: number, valorInicial: number, razon: number): void;
    /**
     * Carga el array con una serie de Fibonacci.
     * @param {number} numeroDeElementos - Número de elementos a cargar.
     */
    cargarSerieFibonacci(numeroDeElementos: number): void;
    /**
     * Selecciona elementos del array por posición en un intervalo específico.
     * @param {number} intervalo - Intervalo de selección.
     * @param {Array} v2 - Array donde se cargarán los elementos seleccionados.
     */
    seleccionarPorPosicion(intervalo: number, v2: number[]): void;
    /**
     * Selecciona los números primos del array y los carga en otro array.
     * @param {Array} v2 - Array donde se cargarán los números primos.
     */
    seleccionarPrimos(v2: number[]): void;
    /**
     * Selecciona los números no primos del array y los carga en otro array.
     * @param {Array} v3 - Array donde se cargarán los números no primos.
     */
    seleccionarNoPrimos(v3: number[]): void;
    /**
     * Selecciona los números mayores que la media más la desviación estándar y los carga en otro array.
     * @param {Array} v2 - Array donde se cargarán los números seleccionados.
     */
    seleccionarBuenos(v2: number[]): void;
    /**
     * Encuentra y devuelve el valor máximo en el array.
     * @returns {number} - Valor máximo en el array.
     */
    maximo(): number;
    /**
     * Calcula y devuelve la frecuencia de un elemento en el array.
     * @param {number} elemento - Elemento cuya frecuencia se desea calcular.
     * @returns {number} - Frecuencia del elemento en el array.
     */
    frecuencia(elemento: number): number;
    /**
     * Calcula y asigna el valor máximo y su frecuencia a un objeto dado.
     * @param {ObjetoMaxYFrec} objetoMaxYFrec - Objeto que almacenará el máximo y su frecuencia.
     * @property {number} objetoMaxYFrec.maximo - Valor máximo en el array.
     * @property {number} objetoMaxYFrec.frecuencia - Frecuencia del valor máximo.
     */
    maximoYfrecuencia(objetoMaxYFrec: ObjetoMaxYFrec): void;
    /**
     * Calcula y devuelve el promedio de los elementos en el array.
     * @returns {number} - Promedio de los elementos en el array.
     */
    promedio(): number;
    /**
     * Calcula y devuelve la desviación media de los elementos en el array.
     * @returns {number} - Desviación media de los elementos en el array.
     */
    desviacionMedia(): number;
    /**
     * Calcula y devuelve la desviación estándar de los elementos en el array.
     * @returns {number} - Desviación estándar de los elementos en el array.
     */
    desviacionEstandar(): number;
    /**
     * Realiza una búsqueda binaria en el array para encontrar un valor específico.
     * @param {number} valorBuscado - Valor a buscar en el array.
     * @returns {boolean} - `true` si se encuentra el valor, `false` de lo contrario.
     */
    busquedaBinaria(valorBuscado: number): boolean;
    /**
     * Realiza una búsqueda secuencial en el array para encontrar un valor específico.
     * @param {number} valorBuscado - Valor a buscar en el array.
     * @returns {boolean} - `true` si se encuentra el valor, `false` de lo contrario.
     */
    busquedaSecuencial(valorBuscado: number): boolean;
    /**
     * Retorna la dimensión del array (número de elementos).
     * @returns {number} - Número de elementos en el array.
     */
    retornarDimension(): number;
    /**
     * Retorna el elemento en una posición específica del array.
     * @param {number} elemento - Posición del elemento a retornar.
     * @returns {number} - Elemento en la posición especificada.
     */
    retornarElemento(elemento: number): number;
    /**
     * Retorna el array completo.
     * @returns {number[]} - Array completo.
     */
    retornarArray(): number[];
    /**
     * Elimina los elementos duplicados del array.
     */
    eliminarDuplicados(): void;
    /**
     * Intercambia dos elementos en posiciones específicas del array.
     * @param {number} a - Posición del primer elemento.
     * @param {number} b - Posición del segundo elemento.
     */
    intercambiar(a: number, b: number): void;
    /**
     * Realiza el ordenamiento por intercambio de manera ascendente.
     */
    ordenamientoPorIntercambioAscendente(): void;
    /**
     * Realiza el ordenamiento por intercambio de manera descendente.
     */
    ordenamientoPorIntercambioDescendente(): void;
    /**
     * Realiza el ordenamiento por selección de manera ascendente.
     */
    ordenamientoPorSeleccionAscendente(): void;
    /**
     * Realiza el ordenamiento por selección de manera descendente.
     */
    ordenamientoPorSeleccionDescendente(): void;
    /**
     * Ordena los elementos del array mediante el algoritmo de burbuja de manera ascendente.
     */
    ordenamientoBurbujaAscendente(): void;
    /**
     * Ordena los elementos del array mediante el algoritmo de burbuja de manera descendente.
     */
    ordenamientoBurbujaDescendente(): void;
    /**
     * Verifica si un número pertenece al array.
     * @param {number} numero - Número a verificar.
     * @returns {boolean} - `true` si el número pertenece al array, `false` de lo contrario.
     */
    pertenencia(numero: number): boolean;
    /**
     * Obtiene la intersección de dos conjuntos y carga el resultado en el array actual.
     * @param {number[]} v1 - Primer conjunto.
     * @param {number[]} v2 - Segundo conjunto.
     */
    interseccionDeConjuntos(v1: number[], v2: number[]): void;
    /**
     * Obtiene la unión de dos conjuntos y carga el resultado en el array actual.
     * @param {number[]} v1 - Primer conjunto.
     * @param {number[]} v2 - Segundo conjunto.
     */
    unionDeConjuntos(v1: number[], v2: number[]): void;
    /**
     * Obtiene la diferencia A - B de dos conjuntos y carga el resultado en el array actual.
     * @param {number[]} v1 - Conjunto A.
     * @param {number[]} v2 - Conjunto B.
     */
    diferenciaDeConjuntosAB(v1: number[], v2: number[]): void;
    /**
     * Obtiene la diferencia B - A de dos conjuntos y carga el resultado en el array actual.
     * @param {number[]} v1 - Conjunto A.
     * @param {number[]} v2 - Conjunto B.
     */
    diferenciaDeConjuntosBA(v1: number[], v2: number[]): void;
    /**
     * Segmenta el array separando los números pares de los impares.
     */
    segmentarParYNoPar(): void;
    /**
     * Segmenta el array separando los números primos de los no primos.
     */
    segmentarPrimoYNoPrimo(): void;
    /**
     * Intercala los números pares e impares del array.
     */
    intercalarParYNoPar(): void;
    /**
     * Intercala los números primos y no primos del array.
     */
    intercalarPrimoYNoPrimo(): void;
    /**
     * Invierte el orden de los elementos del array.
     */
    invertir(): void;
    /**
     * Cuenta los submúltiplos en el array.
     * @returns {number} - Número de submúltiplos.
     */
    contarSubmultiplos(): number;
    /**
     * Busca y devuelve el elemento mayor en el array en posiciones múltiplos del índice dado.
     * @param {number} indice - Índice para determinar las posiciones a considerar.
     * @returns {number} - Elemento mayor.
     */
    buscarElementoMayor(indice: number): number;
    /**
     * Calcula y devuelve la media de los elementos del array en posiciones múltiplos del índice dado.
     * @param {number} indice - Índice para determinar las posiciones a considerar.
     * @returns {number} - Media de los elementos.
     */
    buscarMedia(indice: number): number;
    /**
     * Verifica si todos los elementos del array son iguales.
     * @returns {boolean} - Indica si todos los elementos son iguales.
     */
    verificarElementosIguales(): boolean;
    /**
     * Verifica si un segmento del array está ordenado de manera ascendente.
     * @param {number} a - Índice de inicio del segmento.
     * @param {number} b - Índice de fin del segmento.
     * @returns {boolean} - Indica si el segmento está ordenado.
     */
    verificarSegmentoOrdenado(a: number, b: number): boolean;
    /**
     * Inserta un array en otro en una posición específica.
     * @param {number[]} v1 - Array a insertar.
     * @param {number[]} v2 - Array que contiene los elementos a insertar.
     * @param {number} posicion - Posición en la que se insertará el array.
     */
    insertarArrayPorPosicion(v1: number[], v2: number[], posicion: number): void;
    /**
     * Elimina los elementos de un array indicando dos posiciones (rango).
     * @param {number} a - Índice de inicio del rango.
     * @param {number} b - Índice de fin del rango.
     */
    eliminarElementosDelArrayIndicandoLasPosiciones(a: number, b: number): void;
    /**
     * Duplica los elementos del array.
     */
    duplicarElementos(): void;
    /**
     * Concatena dos arrayes al final del array actual.
     * @param {number[]} v1 - Array a concatenar.
     */
    concatenar(v1: number[]): void;
    /**
     * Ordena los elementos de un segmento del array usando el método de burbuja.
     * @param {number} a - Índice de inicio del segmento.
     * @param {number} b - Índice de fin del segmento.
     */
    ordenarElementosDeUnSegmento(a: number, b: number): void;
    /**
     * Busca el elemento menos repetido en el array.
     * @returns {number} - Elemento menos repetido.
     */
    buscarElementoMenosRepetido(): number;
    /**
     * Encuentra el elemento menos repetido entre un segmento del array.
     * @param {number} a - Índice de inicio del segmento.
     * @param {number} b - Índice de fin del segmento.
     * @returns {number} - Elemento menos repetido en el segmento.
     */
    encontrarElementoMenosRepetidoEntreUnSegmento(a: number, b: number): number;
    /**
     * Carga en un array la frecuencia de cómo aparece cada número del array actual en otro array.
     * @param {number[]} v3 - Array donde se carga la frecuencia.
     * @param {number[]} v2 - Array con los elementos cuya frecuencia se va a calcular.
     */
    cargarFrecuencia(v3: number[], v2: number[]): void;
    /**
     * Encuentra la frecuencia de distribución de un segmento
     * @param {number[]} v2 objeto de la clase array
     * @param {number[]} v3 objeto de la clase array
     */
    encontrarLaFrecuenciaDeDistribucionEntreUnSegmento(a: number, b: number, v2: number[], v3: number[]): void;
    /**
     * Cuenta la cantidad de números si capicúas en el array.
     * @returns {number} - Número de elementos no capicúas en el array.
     */
    contarCapicuas(): number;
    /**
     * Cuenta la cantidad de números no capicúas en el array.
     * @returns {number} - Número de elementos no capicúas en el array.
     */
    contarNoCapicuas(): number;
    /**
     * Segmenta los capicuas y los no capicuas
     */
    segmentarCapicuaYNoCapicua(): void;
    /**
     * Intercala primos y no primos de un segmento.
     * @param {number} a primer Intervalo
     * @param {number} b segundo Intervalo
     */
    intercalarPrimoYNoPrimoDeUnSegmento(a: number, b: number): void;
}
