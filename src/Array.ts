//@ts-nocheck
import NEnt from './NEnt'

interface ObjetoMaxYFrec {
  maximo: number
  frecuencia: number
}

interface Array<T> {
  /**
   * Carga el array con números aleatorios en un rango específico.
   * @param {number} numeroDeElementos - Número de elementos a cargar.
   * @param {number} valorInicial - Valor mínimo del rango.
   * @param {number} valorFinal - Valor máximo del rango.
   */
  cargar: (
    numeroDeElementos: number,
    valorInicial: number,
    valorFinal: number
  ) => void
  /**
   * Carga un elemento en el array.
   * @param {number} numero - Elemento a cargar.
   */
  cargarElementoXElemento: (numero: number) => void
  /**
   * Descarga el array en formato de cadena.
   * @returns {string} - Cadena que representa el array.
   */
  descargar: () => void
  /**
   * Carga el array con una serie aritmética.
   * @param {number} numeroDeElementos - Número de elementos a cargar.
   * @param {number} valorInicial - Primer término de la serie.
   * @param {number} razon - Razón de la serie.
   */
  cargarSerieAritmetica: (
    numeroDeElementos: number,
    valorInicial: number,
    razon: number
  ) => void
  /**
   * Carga el array con una serie de Fibonacci.
   * @param {number} numeroDeElementos - Número de elementos a cargar.
   */
  cargarSerieFibonacci: (numeroDeElementos: number) => void
  /**
   * Selecciona elementos del array por posición en un intervalo específico.
   * @param {number} intervalo - Intervalo de selección.
   * @param {Array} v2 - Array donde se cargarán los elementos seleccionados.
   */
  seleccionarPorPosicion: (intervalo: number, v2: number[]) => void
  /**
   * Selecciona los números primos del array y los carga en otro array.
   * @param {Array} v2 - Array donde se cargarán los números primos.
   */
  seleccionarPrimos: (v2: number[]) => void
  /**
   * Selecciona los números no primos del array y los carga en otro array.
   * @param {Array} v3 - Array donde se cargarán los números no primos.
   */
  seleccionarNoPrimos: (v3: number[]) => void
  /**
   * Selecciona los números mayores que la media más la desviación estándar y los carga en otro array.
   * @param {Array} v2 - Array donde se cargarán los números seleccionados.
   */
  seleccionarBuenos: (v2: number[]) => void
  /**
   * Encuentra y devuelve el valor máximo en el array.
   * @returns {number} - Valor máximo en el array.
   */
  maximo: () => number
  /**
   * Calcula y devuelve la frecuencia de un elemento en el array.
   * @param {number} elemento - Elemento cuya frecuencia se desea calcular.
   * @returns {number} - Frecuencia del elemento en el array.
   */
  frecuencia: (elemento: number) => number
  /**
   * Calcula y asigna el valor máximo y su frecuencia a un objeto dado.
   * @param {ObjetoMaxYFrec} objetoMaxYFrec - Objeto que almacenará el máximo y su frecuencia.
   * @property {number} objetoMaxYFrec.maximo - Valor máximo en el array.
   * @property {number} objetoMaxYFrec.frecuencia - Frecuencia del valor máximo.
   */
  maximoYfrecuencia: (objetoMaxYFrec: ObjetoMaxYFrec) => void
  /**
   * Calcula y devuelve el promedio de los elementos en el array.
   * @returns {number} - Promedio de los elementos en el array.
   */
  promedio: () => number
  /**
   * Calcula y devuelve la desviación media de los elementos en el array.
   * @returns {number} - Desviación media de los elementos en el array.
   */
  desviacionMedia: () => number
  /**
   * Calcula y devuelve la desviación estándar de los elementos en el array.
   * @returns {number} - Desviación estándar de los elementos en el array.
   */
  desviacionEstandar: () => number
  /**
   * Realiza una búsqueda binaria en el array para encontrar un valor específico.
   * @param {number} valorBuscado - Valor a buscar en el array.
   * @returns {boolean} - `true` si se encuentra el valor, `false` de lo contrario.
   */
  busquedaBinaria: (valorBuscado: number) => boolean
  /**
   * Realiza una búsqueda secuencial en el array para encontrar un valor específico.
   * @param {number} valorBuscado - Valor a buscar en el array.
   * @returns {boolean} - `true` si se encuentra el valor, `false` de lo contrario.
   */
  busquedaSecuencial: (valorBuscado: number) => boolean
  /**
   * Retorna la dimensión del array (número de elementos).
   * @returns {number} - Número de elementos en el array.
   */
  retornarDimension: () => number
  /**
   * Retorna el elemento en una posición específica del array.
   * @param {number} elemento - Posición del elemento a retornar.
   * @returns {number} - Elemento en la posición especificada.
   */
  retornarElemento: (elemento: number) => number
  /**
   * Retorna el array completo.
   * @returns {number[]} - Array completo.
   */
  retornarArray: () => number[]
  /**
   * Elimina los elementos duplicados del array.
   */
  eliminarDuplicados: () => void
  /**
   * Intercambia dos elementos en posiciones específicas del array.
   * @param {number} a - Posición del primer elemento.
   * @param {number} b - Posición del segundo elemento.
   */
  intercambiar: (a: number, b: number) => void
  /**
   * Realiza el ordenamiento por intercambio de manera ascendente.
   */
  ordenamientoPorIntercambioAscendente: () => void
  /**
   * Realiza el ordenamiento por intercambio de manera descendente.
   */
  ordenamientoPorIntercambioDescendente: () => void
  /**
   * Realiza el ordenamiento por selección de manera ascendente.
   */
  ordenamientoPorSeleccionAscendente: () => void
  /**
   * Realiza el ordenamiento por selección de manera descendente.
   */
  ordenamientoPorSeleccionDescendente: () => void
  /**
   * Ordena los elementos del array mediante el algoritmo de burbuja de manera ascendente.
   */
  ordenamientoBurbujaAscendente: () => void
  /**
   * Ordena los elementos del array mediante el algoritmo de burbuja de manera descendente.
   */
  ordenamientoBurbujaDescendente: () => void
  /**
   * Verifica si un número pertenece al array.
   * @param {number} numero - Número a verificar.
   * @returns {boolean} - `true` si el número pertenece al array, `false` de lo contrario.
   */
  pertenencia: (numero: number) => boolean
  /**
   * Obtiene la intersección de dos conjuntos y carga el resultado en el array actual.
   * @param {number[]} v1 - Primer conjunto.
   * @param {number[]} v2 - Segundo conjunto.
   */
  interseccionDeConjuntos: (v1: number[], v2: number[]) => void
  /**
   * Obtiene la unión de dos conjuntos y carga el resultado en el array actual.
   * @param {number[]} v1 - Primer conjunto.
   * @param {number[]} v2 - Segundo conjunto.
   */
  unionDeConjuntos: (v1: number[], v2: number[]) => void
  /**
   * Obtiene la diferencia A - B de dos conjuntos y carga el resultado en el array actual.
   * @param {number[]} v1 - Conjunto A.
   * @param {number[]} v2 - Conjunto B.
   */
  diferenciaDeConjuntosAB: (v1: number[], v2: number[]) => void
  /**
   * Obtiene la diferencia B - A de dos conjuntos y carga el resultado en el array actual.
   * @param {number[]} v1 - Conjunto A.
   * @param {number[]} v2 - Conjunto B.
   */
  diferenciaDeConjuntosBA: (v1: number[], v2: number[]) => void
  /**
   * Segmenta el array separando los números pares de los impares.
   */
  segmentarParYNoPar: () => void
  /**
   * Segmenta el array separando los números primos de los no primos.
   */
  segmentarPrimoYNoPrimo: () => void
  /**
   * Intercala los números pares e impares del array.
   */
  intercalarParYNoPar: () => void
  /**
   * Intercala los números primos y no primos del array.
   */
  intercalarPrimoYNoPrimo: () => void
  /**
   * Invierte el orden de los elementos del array.
   */
  invertir: () => void
  /**
   * Cuenta los submúltiplos en el array.
   * @returns {number} - Número de submúltiplos.
   */
  contarSubmultiplos: () => number
  /**
   * Busca y devuelve el elemento mayor en el array en posiciones múltiplos del índice dado.
   * @param {number} indice - Índice para determinar las posiciones a considerar.
   * @returns {number} - Elemento mayor.
   */
  buscarElementoMayor: (indice: number) => number
  /**
   * Calcula y devuelve la media de los elementos del array en posiciones múltiplos del índice dado.
   * @param {number} indice - Índice para determinar las posiciones a considerar.
   * @returns {number} - Media de los elementos.
   */
  buscarMedia: (indice: number) => number
  /**
   * Verifica si todos los elementos del array son iguales.
   * @returns {boolean} - Indica si todos los elementos son iguales.
   */
  verificarElementosIguales: () => boolean
  /**
   * Verifica si un segmento del array está ordenado de manera ascendente.
   * @param {number} a - Índice de inicio del segmento.
   * @param {number} b - Índice de fin del segmento.
   * @returns {boolean} - Indica si el segmento está ordenado.
   */
  verificarSegmentoOrdenado: (a: number, b: number) => boolean
  /**
   * Inserta un array en otro en una posición específica.
   * @param {number[]} v1 - Array a insertar.
   * @param {number[]} v2 - Array que contiene los elementos a insertar.
   * @param {number} posicion - Posición en la que se insertará el array.
   */
  insertarArrayPorPosicion: (
    v1: number[],
    v2: number[],
    posicion: number
  ) => void
  /**
   * Elimina los elementos de un array indicando dos posiciones (rango).
   * @param {number} a - Índice de inicio del rango.
   * @param {number} b - Índice de fin del rango.
   */
  eliminarElementosDelArrayIndicandoLasPosiciones: (
    a: number,
    b: number
  ) => void
  /**
   * Duplica los elementos del array.
   */
  duplicarElementos: () => void
  /**
   * Concatena dos arrayes al final del array actual.
   * @param {number[]} v1 - Array a concatenar.
   */
  concatenar: (v1: number[]) => void
  /**
   * Ordena los elementos de un segmento del array usando el método de burbuja.
   * @param {number} a - Índice de inicio del segmento.
   * @param {number} b - Índice de fin del segmento.
   */
  ordenarElementosDeUnSegmento: (a: number, b: number) => void
  /**
   * Busca el elemento menos repetido en el array.
   * @returns {number} - Elemento menos repetido.
   */
  buscarElementoMenosRepetido: () => number
  /**
   * Encuentra el elemento menos repetido entre un segmento del array.
   * @param {number} a - Índice de inicio del segmento.
   * @param {number} b - Índice de fin del segmento.
   * @returns {number} - Elemento menos repetido en el segmento.
   */
  encontrarElementoMenosRepetidoEntreUnSegmento: (
    a: number,
    b: number
  ) => number
  /**
   * Carga en un array la frecuencia de cómo aparece cada número del array actual en otro array.
   * @param {number[]} v3 - Array donde se carga la frecuencia.
   * @param {number[]} v2 - Array con los elementos cuya frecuencia se va a calcular.
   */
  cargarFrecuencia: (v3: number[], v2: number[]) => void
  /**
   * Encuentra la frecuencia de distribución de un segmento
   * @param {number[]} v2 objeto de la clase array
   * @param {number[]} v3 objeto de la clase array
   */
  encontrarLaFrecuenciaDeDistribucionEntreUnSegmento: (
    a: number,
    b: number,
    v2: number[],
    v3: number[]
  ) => void
  /**
   * Cuenta la cantidad de números si capicúas en el array.
   * @returns {number} - Número de elementos no capicúas en el array.
   */
  contarCapicuas: () => number
  /**
   * Cuenta la cantidad de números no capicúas en el array.
   * @returns {number} - Número de elementos no capicúas en el array.
   */
  contarNoCapicuas: () => number
  /**
   * Segmenta los capicuas y los no capicuas
   */
  segmentarCapicuaYNoCapicua: () => void
  /**
   * Intercala primos y no primos de un segmento.
   * @param {number} a primer Intervalo
   * @param {number} b segundo Intervalo
   */
  intercalarPrimoYNoPrimoDeUnSegmento: (a: number, b: number) => void
}

// Implementación del método 'cargar' para el prototipo de Array
// Implementa la función cargar en el prototipo de Array
(Array.prototype as any).cargar = function (
  numeroDeElementos: number,
  valorInicial: number,
  valorFinal: number
): void {
  this.length = numeroDeElementos;
  for (let i = 0; i < this.length; i++) {
    const numeroAleatorio =
      Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;
    this[i] = numeroAleatorio;
  }
};

(Array.prototype as any).cargarElementoXElemento = function (
  this: number[],
  numero: number
): void {
  this[this.length] = numero;
  this.length++;
};

(Array.prototype as any).descargar = function descargar(this: number[]): string {
  return '{' + this.toString() + '}'
}

(Array.prototype as any).cargarSerieAritmetica = function (
  this: number[],
  numeroDeElementos: number,
  valorInicial: number,
  razon: number
): void {
  this.length = numeroDeElementos;
  for (let i = 0; i < this.length; i++) {
    this[i] = valorInicial + i * razon;
  }
};

(Array.prototype as any).cargarSerieFibonacci = function cargarSerieFibonacci(
  numeroDeElementos
) {
  this.length = numeroDeElementos
  this[0] = 0
  this[1] = 1

  if (this.length <= 0) return

  if (this.length === 1) return

  for (let i = 2; i < this.length; i++) {
    this[i] = this[i - 1] + this[i - 2]
  }
}

(Array.prototype as any).seleccionarPorPosicion = function seleccionarPorPosicion(
  intervalo,
  v2
) {
  const numeroDePosiciones = this.length / intervalo
  for (let i = 0; i < numeroDePosiciones; i++) {
    v2.cargarElementoXElemento(this[i * intervalo])
  }
}

(Array.prototype as any).seleccionarPrimos = function seleccionarPrimos(v2) {
  const n1 = new NEnt()
  for (let i = 0; i < this.length; i++) {
    n1.cargar(this[i])
    n1
    if (n1.verificarPrimos()) {
      v2.cargarElementoXElemento(this[i])
    }
  }
}

(Array.prototype as any).seleccionarNoPrimos = function seleccionarNoPrimos(v3) {
  const n1 = new NEnt()
  for (let i = 0; i < this.length; i++) {
    n1.cargar(this[i])
    if (!n1.verificarPrimos()) {
      v3.cargarElementoXElemento(this[i])
    }
  }
}

(Array.prototype as any).seleccionarBuenos = function seleccionarBuenos(v2) {
  const media = this.promedio()
  const estandar = this.desviacionEstandar()
  const rango = media + estandar

  for (let i = 0; i < this.length; i++) {
    if (this[i] > rango) {
      v2.cargarElementoXElemento(this[i])
    }
  }
}

(Array.prototype as any).maximo = function maximo() {
  let dr = this[0]
  for (let i = 1; i < this.length; i++) {
    if (this[i] > dr) {
      dr = this[i]
    }
  }
  return dr
}

(Array.prototype as any).frecuencia = function frecuencia(elemento) {
  let c = 0
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === elemento) {
      c++
    }
  }
  return c
}

(Array.prototype as any).maximoYfrecuencia = function maximoYfrecuencia(objetoMaxYFrec) {
  objetoMaxYFrec.maximo = this.maximo()
  objetoMaxYFrec.frecuencia = this.frecuencia(objetoMaxYFrec.maximo)
}

(Array.prototype as any).promedio = function promedio() {
  let suma = 0
  for (let i = 0; i < this.length; i++) {
    suma += this[i]
  }
  return suma / this.length
}

(Array.prototype as any).desviacionMedia = function desviacionMedia() {
  const media = this.promedio()
  let suma = 0
  for (let i = 0; i < this.length; i++) {
    suma += Math.abs(this[i] - media)
  }
  return suma / this.length
}

(Array.prototype as any).desviacionEstandar = function desviacionEstandar() {
  const media = this.promedio()
  let suma = 0
  for (let i = 0; i < this.length; i++) {
    suma += Math.pow(this[i] - media, 2)
  }
  return Math.sqrt(suma / this.length)
}

(Array.prototype as any).busquedaBinaria = function busquedaBinaria(valorBuscado) {
  this.ordenamientoBurbujaAscendente()
  let izquierda = 0
  let derecha = this.length - 1

  while (izquierda <= derecha) {
    const medio = izquierda + Math.floor((derecha - izquierda) / 2)

    if (this[medio] === valorBuscado) {
      return true
    }

    if (this[medio] > valorBuscado) {
      derecha = medio - 1
    } else {
      izquierda = medio + 1
    }
  }
  return false
}

(Array.prototype as any).busquedaSecuencial = function (valorBuscado) {
  for (let i = 0; i < this.length; i++) {
    if (valorBuscado === this[i]) {
      return true
    }
  }

  return false
}

(Array.prototype as any).retornarDimension = function () {
  return this.length
}

(Array.prototype as any).retornarElemento = function (elemento) {
  return this[elemento]
}

(Array.prototype as any).retornarArray = function () {
  return this
}

(Array.prototype as any).eliminarDuplicados = function () {
  const arraySinDuplicados = Array.from(new Set(this))

  this.length = 0
  this.push(...arraySinDuplicados)
}

(Array.prototype as any).intercambiar = function (a, b) {
  const temp = this[a]
  this[a] = this[b]
  this[b] = temp
}

(Array.prototype as any).ordenamientoBurbujaAscendente =
  function ordenamientoBurbujaAscendente() {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this[j] > this[j + 1]) {
          this.intercambiar(j, j + 1)
        }
      }
    }
  }

(Array.prototype as any).ordenamientoBurbujaDescendente =
  function ordenamientoBurbujaDescendente() {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this[j] < this[j + 1]) {
          this.intercambiar(j, j + 1)
        }
      }
    }
  }

(Array.prototype as any).ordenamientoPorSeleccionAscendente = function () {
  for (let i = 0; i < this.length; i++) {
    let indiceMinimo = i
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[indiceMinimo]) {
        indiceMinimo = j
      }
    }
    const temp = this[i]
    this[i] = this[indiceMinimo]
    this[indiceMinimo] = temp
  }
}
(Array.prototype as any).ordenamientoBurbujaDescendente = function () {
  for (let i = 0; i < this.length; i++) {
    let indicemaximo = i
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] > this[indicemaximo]) {
        indicemaximo = j
      }
    }
    const temp = this[i]
    this[i] = this[indicemaximo]
    this[indicemaximo] = temp
  }
}
(Array.prototype as any).ordenamientoBurbujaAscendente = function () {
  let intercambio
  do {
    intercambio = false
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        const temp = this[i]
        this[i] = this[i + 1]
        this[i + 1] = temp
        intercambio = true
      }
    }
  } while (intercambio)
}
(Array.prototype as any).ordenamientoBurbujaDescendente = function () {
  let intercambio
  do {
    intercambio = false
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] < this[i + 1]) {
        const temp = this[i]
        this[i] = this[i + 1]
        this[i + 1] = temp
        intercambio = true
      }
    }
  } while (intercambio)
}
(Array.prototype as any).pertenencia = function (numero) {
  let pertenece = false
  for (let i = 0; i < this.length; i++) {
    if (this[i] === numero) {
      pertenece = true
      break
    }
  }
  return pertenece
}
(Array.prototype as any).interseccionDeConjuntos = function (v1, v2) {
  const longitudV1 = v1.retornarDimension()
  const longitudV2 = v2.retornarDimension()
  const array1 = v1.retornarArray()
  const array2 = v2.retornarArray()

  for (let i = 0; i < longitudV1; i++) {
    for (let j = 0; j < longitudV2; j++) {
      if (array1[i] === array2[j]) {
        this.cargarElementoXElemento(array1[i])
        break
      }
    }
  }
  this.eliminarDuplicados()
}
(Array.prototype as any).unionDeConjuntos = function (v1, v2) {
  const longitudV1 = v1.retornarDimension()
  const longitudV2 = v2.retornarDimension()
  const array1 = v1.retornarArray()
  const array2 = v2.retornarArray()

  for (let i = 0; i < longitudV1; i++) {
    this.cargarElementoXElemento(array1[i])
  }

  for (let j = 0; j < longitudV2; j++) {
    this.cargarElementoXElemento(array2[j])
  }

  this.eliminarDuplicados()
}
(Array.prototype as any).diferenciaDeConjuntosAB = function (v1, v2) {
  const longitudV1 = v1.retornarDimension()
  const array1 = v1.retornarArray()

  for (let i = 0; i < longitudV1; i++) {
    if (!v2.pertenencia(array1[i])) {
      this.cargarElementoXElemento(array1[i])
    }
  }

  this.eliminarDuplicados()
}
(Array.prototype as any).diferenciaDeConjuntosBA = function (v1, v2) {
  const longitudV2 = v2.retornarDimension()
  const array2 = v2.retornarArray()

  for (let i = 0; i < longitudV2; i++) {
    if (!v1.pertenencia(array2[i])) {
      this.cargarElementoXElemento(array2[i])
    }
  }

  this.eliminarDuplicados()
}
(Array.prototype as any).segmentarParYNoPar = function () {
  const n1 = new NEnt()
  const n2 = new NEnt()
  for (let p = 0; p < this.length - 1; p++) {
    for (let d = p + 1; d < this.length; d++) {
      n1.cargar(this[d])
      n2.cargar(this[p])
      if (
        (n1.verificarPar() && !n2.verificarPar()) ||
        (n1.verificarPar() && n2.verificarPar() && this[d] < this[p]) ||
        (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p])
      ) {
        this.intercambiar(d, p)
      }
    }
  }
}
(Array.prototype as any).segmentarPrimoYNoPrimo = function () {
  const n1 = new NEnt()
  const n2 = new NEnt()
  for (let p = 0; p < this.length - 1; p++) {
    for (let d = p + 1; d < this.length; d++) {
      n1.cargar(this[d])
      n2.cargar(this[p])
      if (
        (n1.verificarPrimos() && !n2.verificarPrimos()) ||
        (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p]) ||
        (!n1.verificarPrimos() && !n2.verificarPrimos() && this[d] < this[p])
      ) {
        this.intercambiar(d, p)
      }
    }
  }
}
(Array.prototype as any).intercalarParYNoPar = function () {
  let b = true
  const n1 = new NEnt()
  const n2 = new NEnt()

  for (let p = 0; p < this.length - 1; p++) {
    if (b) {
      for (let d = p + 1; d < this.length; d++) {
        n1.cargar(this[d])
        n2.cargar(this[p])

        if (
          (n1.verificarPar() && !n2.verificarPar()) ||
          (n1.verificarPar() && n2.verificarPar() && this[d] < this[p]) ||
          (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p])
        ) {
          this.intercambiar(d, p)
        }
      }
    } else {
      for (let d = p + 1; d < this.length; d++) {
        n1.cargar(this[d])
        n2.cargar(this[p])

        if (
          (!n1.verificarPar() && n2.verificarPar()) ||
          (!n1.verificarPar() && !n2.verificarPar() && this[d] < this[p]) ||
          (n1.verificarPar() && n2.verificarPar() && this[d] < this[p])
        ) {
          this.intercambiar(d, p)
        }
      }
    }
    b = !b
  }
}
(Array.prototype as any).intercalarPrimoYNoPrimo = function () {
  let b = true
  const n1 = new NEnt()
  const n2 = new NEnt()

  for (let p = 0; p < this.length - 1; p++) {
    if (b) {
      for (let d = p + 1; d < this.length; d++) {
        n1.cargar(this[d])
        n2.cargar(this[p])

        if (
          (n1.verificarPrimos() && !n2.verificarPrimos()) ||
          (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p]) ||
          (!n1.verificarPrimos() && !n2.verificarPrimos() && this[d] < this[p])
        ) {
          this.intercambiar(d, p)
        }
      }
    } else {
      for (let d = p + 1; d < this.length; d++) {
        n1.cargar(this[d])
        n2.cargar(this[p])
        n2.verificarPrimos()

        if (
          (!n1.verificarPrimos() && n2.verificarPrimos()) ||
          (!n1.verificarPrimos() &&
            !n2.verificarPrimos() &&
            this[d] < this[p]) ||
          (n1.verificarPrimos() && n2.verificarPrimos() && this[d] < this[p])
        ) {
          this.intercambiar(d, p)
        }
      }
    }
    b = !b
  }
}
(Array.prototype as any).invertir = function () {
  let inicio = 0
  let fin = this.length - 1
  while (inicio < fin) {
    this.intercambiar(inicio, fin)
    inicio++
    fin--
  }
}
(Array.prototype as any).contarSubmultiplos = function () {
  let contador = 0

  for (let i = 0; i < this.length; i++) {
    if (this[i] % (i + 1) === 0) {
      contador++
    }
  }
  return contador
}
(Array.prototype as any).buscarElementoMayor = function (indice) {
  let mayor = 0
  for (let i = 0; i < this.length; i++) {
    if (i % indice === 0 && mayor < this[i]) {
      mayor = this[i]
    }
  }
  return mayor
}
(Array.prototype as any).buscarMedia = function (indice) {
  let suma = 0
  let contador = 0
  for (let i = 0; i < this.length; i++) {
    if (i % indice === 0) {
      suma += this[i]
      contador++
    }
  }
  return suma / contador
}
(Array.prototype as any).verificarElementosIguales = function () {
  const inicial = this[0]
  for (let i = 0; i < this.length; i++) {
    if (inicial !== this[i]) {
      return false
    }
  }
  return true
}
(Array.prototype as any).verificarSegmentoOrdenado = function (a, b) {
  for (let i = a; i < b; i++) {
    if (this[i] > this[i + 1]) {
      return false
    }
  }
  return true
}
(Array.prototype as any).insertarArrayPorPosicion = function (v1, v2, posicion) {
  const n1 = v1.retornarDimension()
  const n2 = v2.retornarDimension()
  const vector1 = v1.retornarArray()
  const vector2 = v2.retornarArray()

  for (let i = 0; i < posicion; i++) {
    this.cargarElementoXElemento(vector1[i])
  }

  for (let i = 0; i < n2; i++) {
    this.cargarElementoXElemento(vector2[i])
  }

  for (let i = posicion; i < n1; i++) {
    this.cargarElementoXElemento(vector1[i])
  }
}
(Array.prototype as any).eliminarElementosDelArrayIndicandoLasPosiciones = function (
  a,
  b
) {
  const copia = new Array()

  for (let i = 0; i < this.length; i++) {
    if (i < a || i > b) {
      copia.cargarElementoXElemento(this[i])
    }
  }

  this.length = 0
  this.push(...copia)
}
(Array.prototype as any).duplicarElementos = function () {
  const copia = new Array()

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < 2; j++) {
      copia.cargarElementoXElemento(this[i])
    }
  }

  this.length = 0
  this.push(...copia)
  this.length = copia.length
}
(Array.prototype as any).concatenar = function (v1) {
  const n1 = v1.length
  for (let i = 0; i < n1; i++) {
    this.cargarElementoXElemento(v1[i])
  }
}
(Array.prototype as any).ordenarElementosDeUnSegmento = function (a, b) {
  const array1 = new Array()
  const array2 = new Array()
  const array3 = new Array()

  for (let i = 0; i < a; i++) {
    array1.cargarElementoXElemento(this[i])
  }

  for (let i = a; i <= b; i++) {
    array2.cargarElementoXElemento(this[i])
  }

  for (let i = b + 1; i < this.length; i++) {
    array3.cargarElementoXElemento(this[i])
  }

  array2.ordenamientoBurbujaAscendente()

  array1.concatenar(array2)
  array1.concatenar(array3)

  this.length = 0
  this.push(...array1)
  this.length = array1.length
}
(Array.prototype as any).buscarElementoMenosRepetido = function () {
  let leastFrequentNumber = 0
  let minCount = this.length + 1

  const array = [...this]

  for (let i = 0; i < this.length; i++) {
    let count = 0
    const currentNumber = array[i]

    if (currentNumber === Number.MIN_VALUE) {
      continue
    }

    for (let j = i; j < this.length; j++) {
      if (array[j] === currentNumber) {
        count++
        array[j] = Number.MIN_VALUE
      }
    }

    if (count < minCount) {
      minCount = count
      leastFrequentNumber = currentNumber
    }
  }

  return leastFrequentNumber
}
(Array.prototype as any).encontrarElementoMenosRepetidoEntreUnSegmento = function (
  a,
  b
) {
  const array1 = new Array()

  for (let i = a; i <= b; i++) {
    array1.cargarElementoXElemento(this[i])
  }

  const menosRepetido = array1.buscarElementoMenosRepetido()

  return menosRepetido
}
(Array.prototype as any).cargarFrecuencia = function (v3, v2) {
  for (let i = 0; i < v2.length; i++) {
    v3.cargarElementoXElemento(this.frecuencia(v2[i]))
  }
}
(Array.prototype as any).encontrarLaFrecuenciaDeDistribucionEntreUnSegmento = function (
  a,
  b,
  v2,
  v3
) {
  const v1 = new Array()

  for (let i = a; i <= b; i++) {
    v1.cargarElementoXElemento(this[i])
  }

  v1.ordenamientoBurbujaAscendente()

  for (let i = 0; i < v1.length; i++) {
    v2.cargarElementoXElemento(v1[i])
  }

  v2.eliminarDuplicados()

  v1.cargarFrecuencia(v3, v2)
}
(Array.prototype as any).contarCapicuas = function () {
  let contarCapicuas = 0
  const n1 = new NEnt()

  for (let i = 0; i < this.length; i++) {
    n1.cargar(this[i])
    if (!n1.verificarCapicua()) {
      break
    }

    contarCapicuas++
  }
  return contarCapicuas
}
(Array.prototype as any).contarNoCapicuas = function () {
  let contarNoCapicuas = 0
  const n1 = new NEnt()

  for (let i = 0; i < this.length; i++) {
    n1.cargar(this[i])
    if (n1.verificarCapicua()) {
      break
    }

    contarNoCapicuas++
  }
  return contarNoCapicuas
}
(Array.prototype as any).segmentarCapicuaYNoCapicua = function () {
  const n1 = new NEnt()
  const n2 = new NEnt()
  for (let p = 0; p < this.length - 1; p++) {
    for (let d = p + 1; d < this.length; d++) {
      n1.cargar(this[d])
      n2.cargar(this[p])
      if (
        (n1.verificarCapicua() && !n2.verificarCapicua()) ||
        (n1.verificarCapicua() && n2.verificarCapicua() && this[d] < this[p]) ||
        (!n1.verificarCapicua() && !n2.verificarCapicua() && this[d] < this[p])
      ) {
        this.intercambiar(d, p)
      }
    }
  }
}
(Array.prototype as any).intercalarPrimoYNoPrimoDeUnSegmento = function (a, b) {
  const array1 = new Array()
  const array2 = new Array()
  const array3 = new Array()

  for (let i = 0; i < a; i++) {
    array1.cargarElementoXElemento(this[i])
  }

  for (let i = a; i <= b; i++) {
    array2.cargarElementoXElemento(this[i])
  }

  for (let i = b + 1; i < this.length; i++) {
    array3.cargarElementoXElemento(this[i])
  }

  array2.ordenamientoBurbujaAscendente()
  array2.intercalarPrimoYNoPrimo()

  array1.concatenar(array2)
  array1.concatenar(array3)

  this.length = 0
  this.push(...array1)
  this.length = array1.length
}
