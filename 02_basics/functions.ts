// Giving type to parameter
function addTwo(num:number){
    return num + 2
}

function getUpper(val:string){
    return val.toUpperCase()
}

console.log(addTwo(5))
console.log(getUpper("sanket"));

// Giving default value to parameter
function foodPayment(name:string,email:string,isPaid:boolean = false){

}

foodPayment("sanket","sanket@example.com")

// Ensuring that the function is intending what it was intended to return
function addFour(num:number):number{
    return num + 4
}

let addThree = (num:number) : number => {
    return num + 3
}

// there maybe a situation when you are returning to different types of type
// function getValue(myVal:number):string{
//     if (myVal > 5)
//         return true // you will get error we will see this in further tutorials
//     return "200 OK"
// } 


// Some function never return a value -- specially made for handling error here we are intentionally crashing our program
function handleError(err:string):never{         // never type represents values which are never observed.
    throw new Error(err)                        // In a return type, this means that the function throws an exception
}                                               // or terminates execution of the program.
export {}