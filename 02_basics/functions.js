"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Giving type to parameter
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(addTwo(5));
console.log(getUpper("sanket"));
// Giving default value to parameter
function foodPayment(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
foodPayment("sanket", "sanket@example.com");
// Ensuring that the function is intending what it was intended to return
function addFour(num) {
    return num + 4;
}
var addThree = function (num) {
    return num + 3;
};
// there maybe a situation when you are returning to different types of type
// function getValue(myVal:number):string{
//     if (myVal > 5)
//         return true // you will get error we will see this in further tutorials
//     return "200 OK"
// } 
// Some function never return a value -- specially made for handling error here we are intentionally crashing our program
function handleError(err) {
    throw new Error(err); // In a return type, this means that the function throws an exception
} // or terminates execution of the program.
