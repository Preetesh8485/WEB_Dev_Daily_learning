//print statement
console.log("hello world");

//arithmatic operator
let a = 12;
let b = 13;
console.log(a,b);
console.log("a+b= ",a+b);
console.log("a*b= ",a*b);
console.log("a-b= ",a-b);
console.log("a/b= ",a/b);
console.log("a to the power b= ",a**b);
console.log("a/b remainder ",a%b);
//unary operator incriment and decriment
console.log("++a = ",++a,"--b = ",--b);

// conditional operator
let c ="67";
console.log("is a = c ?" ,a==c)
console.log("is a = c ?" ,a!=c)
console.log("is a = c ?" ,a===c)
console.log("is a = c ?" ,a!==c)

/* LOGICAL OPERATORS

and: &&

or: ||

not : !

*/
//conditional statements

if (typeof c==="string"){
    console.log("true if this prints")
}else{
    console.log("i have my logic incorret or the condtion is false")
}

// switch case
const expr = "Papayas";
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $2.79 a pound.");
    break;
  case "Papayas":
    console.log("papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
