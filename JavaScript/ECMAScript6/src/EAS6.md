# EAS6

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

[ejemplo](EAS6/params-concat.js)

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
[ejemplo](EAS6/template-literal.js)

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

[ejemplo](EAS6/declarations.js)

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

[ejemplo](EAS6/multiline.js)

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

[ejemplo](EAS6/destructuring.js)

## spreadOperator 

[ejemplo](EAS6/spreadOperator.js)

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

[ejemplo](EAS6/destructuring.js)

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

[ejemplo](EAS6/arrowFunctions.js)
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

[ejemplo](EAS6/promises.js)

## Clases

Es una azucar sintavtica que es añadida para tener la programacion orientada a objetos en JavaScript. Se usa una palabra reservada class y la variables definidas dentro de la clase toman un scope global.

```JavaScript
class Person {
    name
    lastName
    middleName

    constructor(name, lastName, middleName) {
        this.name = name
        this.lastName = lastName
        this.middleName = middleName
    }

    whatIsYourName() {
        return `${this.name} ${this.lastName} ${this.middleName}`
    }
}
const daniel = new Person('DAniel', 'Ricardo', 'Castellanos')
console.log(daniel.whatIsYourName())
```

[ejemplo](EAS6/clases.js)

## Módulos

En la nueva version de ECMACSript añadieron los imports y exports, lo cual es una manera de trabajar con modulos dentro de nuestro aplicativo y tambien de acceder a las propiedades de un archivo desde algun llamado externo.

```JavaScript

export class Person {
    name
    lastName
    middleName

    constructor(name, lastName, middleName) {
        this.name = name
        this.lastName = lastName
        this.middleName = middleName
    }

    whatIsYourName() {
        return `${this.name} ${this.lastName} ${this.middleName}`
    }
}

import { Person } from './clases'

const daniel = new Person('DAniel', 'Ricardo', 'Castellanos')
console.log(daniel.whatIsYourName())

```
## Generators

[ejemplo](EAS6/generators.js)