const id : Array<number> = [] // Another method to define array
const names : Array<string> = []

function identityOne(val:boolean|number) : boolean|number{
    return val
}

function identityTwo(val:any):any{
    return val // the problem here is that if you are giving val as number then it can be returned as any type it can be string also
}


// Generic Type -- Here it will take parameter of type "Type" and return result of tpye "Type"
function identityThree<Type>(val:Type):Type{
    return val
}

function identityFour<T>(val:T):T{
    return val
}

interface Bottle{
    brand:string,
    type:number
}

identityFour<Bottle>({brand:"Milton",type:1}) // Here you can give type as interface also using generic

// Use of generic type in normal functions
function getProductById<T>(products:T[]):T{
    const index = 3
    return products[index]
}


// Use of generic type in arrow functions -- <T,> to differentiate it from react and html tags we use "," after T
const geAllProducts = <T,>(products:T[]) : T[] => {
    return products
    
}













