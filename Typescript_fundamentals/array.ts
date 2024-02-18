const myArr1: number[] = [12, 90, 71]; //Array of type number
console.log(myArr1) // O/P:- [ 12, 90, 71 ]
// another way of creating array
const myArr2: Array<number> = [12, 90, 71];
console.log(myArr2) //O/P:- [ 12, 90, 71 ]
let myArr3: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
console.log(myArr3) // O/P:-[ 'Apple', 2, 'Orange', 3, 4, 'Banana' ]