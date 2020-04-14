# EAS9

## lazy operator

Puede extraer las propiedades de un objeto que no sea construido.

```JavaScript
const person = {
    name: 'Daniel',
    middleName: 'Ricardo',
    surname: 'Castellanos'
}
const {name, ...rest} = person
console.log(name, rest)
```
Tambien nos sirve para crear nuevos objetos
```JavaScript
const person = {
    name: 'Daniel',
    middleName: 'Ricardo',
    surname: 'Castellanos'
}
const {name, ...rest} = person
const newPerson = {
    ...rest,
    name: 'Reinaldo'
}
console.log(person, newPerson)
```
[ejemplo](EAS9/lazyOperator.js)

## Promise.finally

Nos indica cuando el llamado de una promesa termino.
```JavaScript
const validatePromise = value => (
    new Promise((resolve, reject) =>
        value ? 
        setTimeout(() => resolve('Successful'), 3000) : 
        reject('Error') 
    )
)

validatePromise(true)
    .then(console.log)
    .catch(console.error)
    .finally(() => console.log('finally'))
```

## regex

Se han añadido diferentes features para trabajar con regex o expresiones regulares, lo cual a facilitado el uso de las mismas en el lenguaje, como por ejemplo:

```JavaScript
const regexDAta = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDAta.exec('2018-04-20')
const year = match[1]
const mounts = match[2]
const day = match[3]
console.log(year, mounts, day)
```

Validamos el fomato de una fecha y despues accedimos a cada una de las coincidencia.