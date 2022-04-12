const urls =[
    'https://jasonplaceholder.typicode.com/users',
    'https://jasonplaceholder.typicode.com/posts',
    'https://jasonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))