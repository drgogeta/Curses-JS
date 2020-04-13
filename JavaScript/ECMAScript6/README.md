# ECMAScript  6^
## Que es?

Es un conjunto de normas y estandares que establecio la netscape para los diferentes motores de JavaScript y apartir del 2015 comensaron a trabajar en un conjunto de funcionalidades que se han venido agregando al lenguaje.

wikipedia lo define como:
```
ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar ISO/IEC 22275:2018.
```

## Params

En la version anterior de EcmacScript para podimos asignar valores por defecto de la siguiente manera:

``` javaScript
const value = value || 'default value'
console.log(value)
```

Con la nueva versio de EcmacScript se puede asignar un valor por defecto al momento de declarar la funcion, como por ejemplo

``` javaScript
 function test(param1 = '', param = 2) {
     console.log(param1, param2)
 }
```

[ejemplo](src/params-concat.js)

## Concat

Para concatenar grandes cadenas de strings podiamos hacelo de la siguiente manera: 

``` JavaScript
const hello = 'Hello'
const word = 'Word'
const epicPhrase = hello + word
console.log(epicPhrase)
```

En las nuevas opciones se añadio el uso de la comilla francesa o template literal para hacer ese tipo de concatenacion:

``` JavaScript
const hello = 'Hello'
const word = 'Word'
const epicPhrase = `${hello} ${word}`
console.log(epicPhrase)
```

Lo que nos ayuda mucho al momento de concatenar grandes volumenes de informacion
[ejemplo](src/template-literal.js)

## Declarations

al momento que yo declaro una variable con var su scope es globlal

``` JavaScript
{
    var globalVar = 'global var'
}
console.log(globalVar)
```

con let el scope no mas se limita al contexto en el cual fue declarada

``` JavaScript
{
    let globalLet = 'global let'
    console.log(globalLet)
}
console.log(globalLet)
```

Con const el scope funciona igual que con let, pero la declaracion es inmutable

``` JavaScript
{
    const globalConst = 'global let'
    console.log(globalConst)
    globalConst = 'dalsdkjkla'
}
console.log(globalConst)
```

## Multiline

En la anteriores vesiones EcmaScript para realizar un salto de linea al momento de declrar un estring lo haciamos de la siguiente manera 

``` JavaScript
const lorem = 'i like hamburger \n' 
+ 'because is delicious'
console.log(lorem)
```

Con la nueva especificasion podemos hacer esto con la comilla francesa y sin la necesidad de usar *\n* o *+* :

``` JavaScript
const lorem1 = `i like hamburger 
because is delicious`
console.log(lorem1)
``` 

[ejemplo](src/multiline.js)

## Destructuring

En la version anterior para acceder a la propiedad nos tocaba hacer algo parecido a esto: 

``` JavaScript
const person = {
    name: 'Daniel',
    age: 23,
    country: 'Colombia'
}
console.log(person.name, person.age)
```

En la nueva espacificasion del lenguaje podemos hacer una destructuracion y no mas optener las propiedades que necesitemos del objeto, como por ejemplo:

```JavaScript
const person = {
    name: 'Daniel',
    age: 23,
    country: 'Colombia'
}
const {name, age} = person
console.log(name, age)
```

[ejemplo](src/destructuring.js)

## spreadOperator 

[ejemplo](src/spreadOperator.js)

## Parameters in objects

``` JavaScript
const name = 'Daniel'
const age = 23
const person = {
    name: name,
    age: age
}
console.log(person)
```

``` JavaScript
const name = 'Daniel'
const age = 23
const person = { name, age }
console.log(person)
```

## Arrow Functions

Un arrow funtion tambien puede ser llamada como una funcion anonima

A parecieron con el objetivo de tener una Sintacxis mas reducida y un dist no vinculable

``` JavaScript
const sum = (a, b) => {
    return a + b
}
console.log(sum(5,5))
```

Tambien se pueden hacer con una sintacsis mas resumida o haciendo un retorno explicito

``` JavaScript
const sum = (a, b) => a + b
console.log(sum(5,5))
```

Tambien se pueden usar en diferentes list funtions

``` JavaScript
const persons = [
    {name: 'Daniel', age: 23},
    {name: 'Richard', age: 25}
]
persons.forEach(person => console.log(person) )
```

## Promesas

La promesas fueron creadas como otra alternativa para manejar la asyncronidad en JavaScript, con las ventajas de que una promesa tiene un estado y un alternativa para madularizar los callBacks:

``` JavaScript
const validatePromise = value => (
    new Promise((resolve, reject) =>
        value ? 
        resolve('Successful') : 
        reject('Error') 
    )
)
validatePromise(true)
    .then(console.log)
    .catch(console.error)
    
validatePromise(false)
    .then(console.log)
    .catch(console.error)
```
En el ejemplo anterior se creo una funcion que devueve una promesa y segun el parametro que se le pase se va a resolver de manera exitosa o fallida

Las promesas tambien tienen otra particularidad y es que se ejecutan en un task diferente y tienen un nivel de prioridad mayor que otros llamados asyncronos

[ejemplo](src/promises.js)

## Clases

