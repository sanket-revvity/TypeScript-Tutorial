// parameter type as object
// function createUser({user:string,isPaid:boolean}){}

// createUser({user:"Sanket",isPaid:false})

// return type as object -- you can also specify what the object can contain when function is returning
function createCourse():{name:string,price:number}{
    return {name:"TypeScript",price:423}
}

createCourse()

// function createUser({ name: string, price: number }) { }

// createUser({ name: "Sanket", price: 230, email: "S@S.com" }); // ERROR -- When you pass an object literal directly as an argument, TypeScript performs strict property checking.

// But below code doesn't give error evenif the object you are passing has extra properties
// to see how to handle this better we can use optional keyword
// function createUser({name:string,price:number}){}
// let newUser = {name:"Sanket",price:230,email:"S@S.com"}
// createUser(newUser)


// If you are using same property as parameter for many functions so 
// it is convenient to use a common/single name instaed of writing it fully
// So we can use Type Aliases
// type User = {name:string,email:string,isActive:boolean}

// function createUser(user : User):User{
//     return {name:user.name,email:user.email,isActive:user.isActive}
// }

// createUser({name:"Sanket",email:"sanket@test.com",isActive:false})



type User = {
    readonly _id:string, //readonly property
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetials?:string  //Optional property
}

const user : User ={
    _id:"1414",
    name:"Sanket",
    email:"Sanket@test.com",
    isActive:false
    // creditCardDetails is Optional 
}

user.email = "sanket@gmail.com"
// user._id = "1314" //Cannot assign value as it is read noly property

type cardNumber ={
    cardnumber : number
}

type cardDate = {
    carddate : string
}

// You can create a new type by using existing type in program or projects
type CardDetails = cardNumber & cardDate





export {}