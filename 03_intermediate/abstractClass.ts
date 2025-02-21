abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getValue():void

    getReelTime() : number{
        return 8
    }
}

// Abstract class provide blueprint for other classes and used to define some common behaviour that 
// multiple derived classes can share if there is a abstarct method in the inherited class 
// then it is compulsory to give implemetation for these method
class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getValue(): void {
        console.log("Value")
    }
}

// const user = new TakePhoto("test","test") // you cannot create object of abstarct class

// const user = new Instagram("test","test") // you can directly access the abstact class construcotr 

const user = new Instagram("test","test",1)

user.getReelTime()

