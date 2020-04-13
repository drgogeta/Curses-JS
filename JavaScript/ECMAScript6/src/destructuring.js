const person = {
    name: 'Daniel',
    age: 23,
    country: 'Colombia'
}
console.log(person.name, person.age, person.country)

const {name, age, country} = person
console.log(name, age, country)

const persons = [
    {
        name: 'Daniel',
        age: 23,
        country: 'Colombia'
    },
    {
        name: 'Richard',
        age: 25,
        country: 'Colombia'
    }
]
const [daniel, richard] = persons
console.log(daniel, richard)