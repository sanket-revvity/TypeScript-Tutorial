// class User{
//     public email : string
//     private name:string
//     readonly city : string = "Mumbai"
//     constructor(email:string,name:string){
//         this.email = email
//         this.name = name
//     }
// }

// You can also write above class in another way that is mostly prefered by coders
// You can also use getter and setter to put some restrictions and extra logic when aceesing the variable inside the class

class User{
    protected _courseCount:number = 1
    readonly city : string = "Mumbai"
    constructor(
        public email:string,
        public name:string
    ){}

    private deleteUser(){
        console.log("User deleted....");
        
    }

    get courseCount():number{
        return this._courseCount
    }

    set courseCount(num){  // you can not give any return type to setter method not even void as it gives error you do 
        if (num <= 1){
            throw new Error("Course num should be more than 1.")
        }
        this._courseCount = num
    }
}


class SubUser extends User{ // whenever you are going to create an object of sub user it will inherit all the methods and variable from user
// But cannot acquire property as private so you can use protected acess modifier so that the variable can only be accessed within class and derived/child class
    isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const user = new User("example@gmail.com","sanket")
// user.city // we can still access the city variable of class even if we can't edit it 
// to restrict it from aceesing use private keyword then you can only access the variable inside that class only 

// There is another access modifier which is by default for all the variable in class -- public



export {}