// const user : (string | number)[] = ["sanket",1]
// In this above example you can observe that if you interchange the position of string 
// and number it is still valid but somethimes there some special cases when this order matters
// and you want specific thing into your array to be pushed on such as in api calls
// becuase api structure is always in a very specific format if something comed in first positon
// it should be in 0th positon so put this type of restriction we use tuple

// Tuples
const user : [string,number,boolean] = ["sanket",1,true]
// so if you interchange the positon of above array values it will give you an error
// const user : [string,number,boolean] = ["sanket",true,1]


// This is very helpful in api calls

type User = [number,string]
const employee : User = [122,"example@google.com"]

employee.push("sanket") // it should have thrown error but it doesn't so using tuple frequently is not relaible
