const person = {
    name: 'Daniel',
    middleName: 'Ricardo',
    surname: 'Castellanos'
}
const {name, ...rest} = person
console.log(name, rest)
const newPerson = {
    ...rest,
    name: 'Reinaldo'
}
console.log(newPerson)

