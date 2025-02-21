function getValue(val:string | number) : string | number{
    if (typeof val === "string"){
        return val.toLowerCase()
    }
    return val
}

// Type narrowing -- to double check the type of pararmeter using typeof keyword
// This is used when your function returns two or more types
// or the parameter has two or more type for single variable

// Example of type narrowing to avoid error such as null is not iterable
function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }


// Instamceof Narrowing -- useful for most values that can be constructed with new
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());                
  } else {
    console.log(x.toUpperCase());                 
  }
}

// Type predicate

type Fish = {swim():void}
type Bird = {fly: () => void}

function isFish(pet:Fish|Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

function getFood(pet:Fish|Bird){
  if (isFish(pet)) {
      pet
      return "Fish food"
  }
  else{
      pet
      return "Bird food"
  }
}
