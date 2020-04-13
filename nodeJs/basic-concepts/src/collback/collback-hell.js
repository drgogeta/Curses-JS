const hello = (name, meCallback) => {
    setTimeout(() => {
        console.log('Hello:' + name)
        meCallback()
    }, 1000);
}
const speak = (meCallback) => {
    setTimeout(() => {
        console.log('bla bla bla bla')
        meCallback()
    }, 1000);
} 

const bye = (name, meCallback) => {
    setTimeout(() => {
        console.log('God bye:' + name)
        meCallback()
    }, 1000);
} 


console.log('bitch')
hello('Daniel', (name) => {
    speak(() => {
        speak(() => {
            speak(() => {
                bye('Daniel', () => {
                    console.log('bitch')
                })
            })
        })
    })
})
