const validatePromise = boom => (
    new Promise((resolve, reject) =>
        boom ? 
        resolve('Successful') : 
        reject('Error') 
    )
)

validatePromise(true)
    .then(console.log)
    .catch(console.error)
    
validatePromise(false)
    .then(console.log)
    .catch(console.error)