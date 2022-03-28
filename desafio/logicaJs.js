// desafio 3 questoes
// questao 1

 input = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let inputSorted = input.sort((a,b)=>a-b);

let groupSame = [];
let orderedGroups = [];

function answer(array){
    for (let i=0;i<=inputSorted.length; i++) {
        if (i===0||inputSorted[i] === inputSorted[i -1]){
            groupSame.push(inputSorted[i]);
        }else {
            orderedGroups.push(groupSame);
            groupSame = [];
            groupSame.push(inputSorted[i]);
        }
    } return orderedGroups;
}

console.log(answer(input));

//questao 2

let numbers = [1,2,3];

function sumTarget(array, target) {
    let arrayNumbers = [];
    for (let i=0; i<=array.length; i++){
        for(let j=i+1; j<=array.length;j++){    
            if (array[i] + array[j] === target){
                arrayNumbers.push(array[i],array[j]);
            }
        }
    } console.log(arrayNumbers);
}
console.log(sumTarget(numbers,4));

