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
console.time("one by one execution of promises")
let r1=await fetchData1();
let r2=await fetchData2()
let r3=await fetchData3()
console.timeEnd("one by one execution of promises")


export { }

