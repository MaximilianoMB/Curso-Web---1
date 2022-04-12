const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Worked');
    }else {
        reject('Broke')
    } 
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'cookie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'is it me?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => { 
        console.log(values)
    })

promise
    .then(results => results + '!')
    .then(results2 => results2 + '?')
    .catch(()=>console.log('error'))
    .then(results3 => {
        console.log(results3 + '!')
    })
