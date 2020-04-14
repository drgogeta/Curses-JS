function* helloWord() {
    if (true)
        yield 'Hello word'
}
const hello = helloWord()
console.log(hello.next().value)