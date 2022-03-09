//loops primarios
const basket = ['maca', 'laranja', 'uva'];
const detailedBasket = {
    maca: 5,
    laranja: 8,
    uva: 12,
}

for (let i=0; i< basket.length; i++) {
    console.log(basket[i]);
    
}
console.log('xxxxxxxxxxxxx');
// 2

basket.forEach(item => {
    console.log(item);
    
})
console.log('xxxxxxxxxxxxx');
//for of
for (item of basket){
    console.log(item);
    
}
console.log('xxxxxxxxxxxxx')
//for in
//enumaerando
for (item in detailedBasket) {
    console.log(item);
}