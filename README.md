# Librería Array

La librería **Array** es una implementación en JavaScript de una clase para manipular listas. 
Esta clase proporciona diversas funcionalidades para realizar operaciones comunes en vectores, 
como intersección, unión, ordenamiento, estadísticas y más.

## Contenido

- [Librería Array](#librería-array)
  - [Contenido](#contenido)
  - [Instalación](#instalación)
  - [Uso básico](#uso-básico)
  - [Métodos](#métodos)
  - [Ejemplos](#ejemplos)
    - [Ejemplo 1: Crear un vector y cargar elementos](#ejemplo-1-crear-un-vector-y-cargar-elementos)
    - [Ejemplo 2: Realizar la intersección de conjuntos](#ejemplo-2-realizar-la-intersección-de-conjuntos)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)

## Instalación

La librería puede ser utilizada directamente en un navegador o incorporada en proyectos Node.js. 
Si estás utilizando Node.js, puedes instalarla usando npm:

```bash
npm install array-methods-utils
```

## Uso básico

Para utilizar la librería en tu proyecto, importa la clase `Vector` con modulos ES6:

```javascript
// Importar ESC6
import "array-methods-utils"

// Importar CommonJs
require("array-methods-utils")
```

## Métodos

La clase `Array` proporciona una variedad de métodos para manipular vectores. Algunos de los métodos más comunes incluyen:

- `cargarElementoXElemento(elemento)`: Carga un elemento en el vector.
- `eliminarDuplicados()`: Elimina elementos duplicados del vector.
- `interseccionDeConjuntos(v1, v2)`: Realiza la intersección de dos conjuntos representados por vectores.

## Ejemplos

A continuación, se presentan algunos ejemplos de cómo utilizar la librería `Vector`:

### Ejemplo 1: Crear un vector y cargar elementos

```javascript
const myArray = [];
v1.cargarElementoXElemento(5);
v1.cargarElementoXElemento(8);
v1.cargarElementoXElemento(5);
console.log(v1.retornarArray()); // Resultado: [5, 8]
```

### Ejemplo 2: Realizar la intersección de conjuntos

```javascript
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const resultado = [];
resultado.interseccionDeConjuntos(array1, array2);
console.log(resultado.retornarVector()); // Resultado: [3, 4]
```

## Contribuciones

Si deseas contribuir a esta librería, por favor eres libre de mandarme una pull request, yo la revisare y la incorporare a la libreria si veo que aporta valor.

## Licencia

Esta librería está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más detalles.