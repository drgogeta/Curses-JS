// older 
function templateLiteral1() {
    const hello = 'Hello'
    const word = 'Word'
    const epicPhrase = hello + ' ' + word
    console.log(epicPhrase)
}
// new
function templateLiteral2() {
    const hello = 'Hello'
    const word = 'Word'
    const epicPhrase = `${hello} ${word}`
    console.log(epicPhrase)
}
templateLiteral1()
templateLiteral2()