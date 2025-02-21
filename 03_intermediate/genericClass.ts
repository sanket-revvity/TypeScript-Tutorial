interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

// Now there may be a class that can work for both Quiz and Course
class Sellable<T>{
    public cart : T[] = []
    addToCart(product:T){
        this.cart.push(product)
    }
}

// with the help of generic classes you can define a class that can handle many interfaces or used for other interfaces



