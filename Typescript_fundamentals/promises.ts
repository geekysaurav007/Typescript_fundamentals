async function fetchData1(){
    let response=await fetch('https://dog.ceo/api/breeds/list/all')
    let result=await response.json()
    return result
}
async function fetchData2(){
    let response=await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
    let result=await response.json()
    return result
}
async function fetchData3(){
    let response=await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json')
    let result=await response.json()
    return result
}
console.time("promise all settled time taken")
const[r1,r2,r3]=await Promise.allSettled([fetchData1,fetchData2,fetchData3])
console.timeEnd("promise all settled time taken")


export { }

