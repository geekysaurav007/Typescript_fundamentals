//An object is an instance which contains set of key value pairs
const person1:any={
    fname:"Sneha",
    lname:"Mathur",
    address:"South Delhi",
    email:"xyz@gmail.com",
    phone:12345678
}
console.log("Without any Type",person1) 

// O/P:-Without any Type
// {
//     fname: 'Sneha',
//     lname: 'Mathur',
//     address: 'South Delhi',
//     email: 'xyz@gmail.com',
//     phone: 12345678
//   }

//An Interface is a structure which acts as a contract in our application
//The TypeScript compiler uses interface for type-checking
interface personDataType{
    fname:string,
    lname:string,
    address:string,
    email:string,
    phone:number
}
const person:personDataType={ //we are defining object a type of personDataType
    fname:"Sneha",
    lname:"Mathur",
    address:"South Delhi",
    email:"xyz@gmail.com",
    phone:12345678
}
console.log('Interfaced data',person)
//O/P:-
// Interfaced data {
//     fname: 'Sneha',
//     lname: 'Mathur',
//     address: 'South Delhi',
//     email: 'xyz@gmail.com',
//     phone: 12345678
//   }