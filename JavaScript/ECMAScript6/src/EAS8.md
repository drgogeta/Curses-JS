# EAS8

## Object.entries

Nos permite volver un objeto en un arreglo

```JavaScript
const data = {
    data1: 'value 1',
    data2: 'value 2',
    data3: 'value 3'
}
const entries = Object.entries(data)
console.log(entries)
```

## Object.values

Nos devuelve u arreglo de string con los valores del objeto original

```JavaScript
const data = {
    data1: 'value 1',
    data2: 'value 2',
    data3: 'value 3'
}
const entries = Object.values(data)
console.log(entries)
```

## Padding

son utlidades al momento de armar cadenas de texto

```JavaScript
const value = 'Hello'
console.log(value.padStart(7, 'hi ')) 
console.log(value.padEnd(12, '--------- ')) 
```

## async await

Es una alternativa para manejar el asycronismo en JavaScript
 [ejemplo](EAS8/async.js)