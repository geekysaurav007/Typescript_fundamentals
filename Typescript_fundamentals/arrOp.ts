let myArr1:number[]=[1,10,20,30]
let myArr2:number[]=[1,10,20,30]
// 1.PUSH OPERATION
myArr2.push(40)
console.log(myArr2) // O/P:- [ 1, 10, 20, 30, 40 ]
//2.POP OPERATION
let poppedItem:number |undefined=myArr2.pop()
console.log(poppedItem) // O/P:-40
//3.SORT Operation ascending order 
console.log(myArr2.sort((x:number,y:number):number=> x-y )); // [ 1, 10, 20, 30 ]
//4.SORT Operation decending order
console.log(myArr2.sort((x:number,y:number):number=> y-x )); // [ 30, 20, 10, 1 ]
//as array is passed by refference it modifies the original array
console.log(myArr2) //O/P:- [ 30, 20, 10, 1 ]
//Shift Operation->remove element at first
console.log(myArr1) // before array [ 1, 10, 20, 30 ]
const shiftedNumber=myArr1.shift() 
console.log(shiftedNumber) // shifted number 1
console.log(myArr1) //O/P:- [ 10, 20, 30 ]
//Unshifted Operation -> adds an element at first
myArr1.unshift(60) 
console.log(myArr1) // o/P:- [ 60, 10, 20, 30 ]
