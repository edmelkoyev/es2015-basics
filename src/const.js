const MATH = {
    PI: 3.14159
}

// Propety value can be changed
MATH.PI = 3.14;

// Following code fires error
/*
const MATH = {
    PI: 3.5
}
*/ 

console.log(MATH.PI);