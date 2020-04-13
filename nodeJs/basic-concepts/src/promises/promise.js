function hello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hello', name)
            resolve(name)
        }, 1000);
    })
}

function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla')
            resolve(name)
        }, 1000)
    })
}

function bye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bye', name)
            resolve(name)
        }, 1000)
    })
}

console.log('start process')
hello('Daniel')
    .then(bye)
    .then(bye)
    .then(bye)