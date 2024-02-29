// const originalArray:Array<number> = [1, 2, 3];
// const copiedArray:Array<number>  = [...originalArray];

// console.log(copiedArray); // Output: [1, 2, 3]

// const array1:Array<number>  = [1, 2, 3];
// const array2:Array<number>  = [4, 5, 6];
// const combinedArray:Array<number> = [...array1, ...array2];

// console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// const originalArray:Array<number>  = [1, 2, 3];
// const newArray:Array<number>  = [...originalArray, 4, 5];
// console.log(newArray); // Output: [1, 2, 3, 4, 5]
function sum(...args: number[]):number {
    return args.reduce((acc, current) => acc + current, 0);
}
const numbers:Array<number> = [1, 2, 3];
const result :number= sum(...numbers);

console.log(result); // Output: 6
