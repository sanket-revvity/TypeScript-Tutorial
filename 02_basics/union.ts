// Union Type
// if you are not sure wther a function will one return type or another so you can use union type by specifying return types
// that can be returned by function or a viariable can have

let score: number | string = 3
score ="3"

function getNum(num: number | string){
    console.log(`Number is ${num}.`)
}

function getValue(myVal:number):string | boolean{
    if (myVal > 5)
        return true // To avoid error use union type
    return "200 OK"
} 

function getVal(val:number | string){
    // if you try to perform any string operation in it or number operation it will give you an error
    // val.toLowerCase()
    // val.toFixed()
    // so to avoid error you have to type check before performing those operation
    if (typeof val === "string"){
        val.toLowerCase()
    }
    // same for number
}


// array

const arr : number[] = [1,2,3]
const strArr : string[] = ["1","2","3"]

// But when you want multiple types 
// const valArr : number | string[] =[1,2,"3"] // This will give error
// const valArr : number[] | string[] = [1,2,"3"] // this will also give error
// to solve this you wrap the type in parenthesis
const valArr : (number | string)[] = [1,2,"3"]

export {}