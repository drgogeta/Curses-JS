export class calculator {

    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator()
console.log(calc.sum(10, 20))


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
const daniel = new Person('DAniel', 'Ricardo', 'Castellanos')
console.log(daniel.whatIsYourName())
