console.log('hello')

const validatePromise = value => (
    new Promise((resolve, reject) =>
        value ? 
        setTimeout(() => resolve('Successful'), 10000) : 
        reject('Error') 
    )
)

const helloAsync = async () => {
    const res = await validatePromise(true)
    console.log(`helloAsync ${res}`)
}

helloAsync()

const anotherFunction = async (value) => {
    try {
        const res = await validatePromise(value)
        console.log(res)    
    } catch (e) {
        console.error(`anotherFunction ${e}`)
    } 
} 

anotherFunction(true)
anotherFunction(false)

validatePromise(false)
    .then(console.log)
    .catch(console.error)

console.log('Finish')