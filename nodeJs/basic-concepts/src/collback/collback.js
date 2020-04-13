console.log('initial process')
const async = (collback) => {
    console.log('.l. .l.')
    setTimeout(() => {
        console.log('.l. .l. .l.')
        collback()
    }, 1000)
}
const collback = () => {
    setTimeout(() => {
        console.log('.l. .l. .l. .l.')
    }, 2000);
    console.log('end process')
}
async(collback)

