interface User{
    readonly dbId: number,
    email:string,
    userID:number,
    googleId?:number,
    // greetings : () => string, // can be used to specify that greeting is method that returns string
    greetings():string // this method can also be used to do the same thing as above
    getCoupon(couponName : string) : string
}

// You can also reopen the interface to inject/add more property to existing one without editing or touching it
interface User{
    githubId:number
}

// Now if you haven't added githubId to the variable of User type it will give you an error
let user : User = {
    dbId : 123,
    githubId:242,
    email : "example@google.com",
    userID : 3241,
    greetings : () => {
        return "hello"
    },
    getCoupon(name: "Sanket131") {  // Here it is not neccessary to use the same name for parameter that used in interface
        return `Coupon Code is ${name}`
    }
}

// One more advantage of interface is inheritance

interface Admin extends User{ // You can inherit multiple interfaces
    role:"admin" | "ta" | "learner"
}

let admin : Admin = {
    dbId : 123,
    role : "admin",
    githubId:242,
    email : "example@google.com",
    userID : 3241,
    greetings : () => {
        return "hello"
    },
    getCoupon(name: "Sanket131") {  // Here it is not neccessary to use the same name for parameter that used in interface
        return `Coupon Code is ${name}`
    }
}

// Difference between type aliases and interfaces
// both are very similar and in many cases you can choose between them freely.
// Differences
// (1) Interfaces can be extended using extends keyword and type can be extended via intersections(&)
// (2) Adding new fields to an exixting interface is possible by reopening it but a type cannot be changed after being created
