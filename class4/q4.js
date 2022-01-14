console.log("Question 1");
console.log("Declare four variables without assigning values and print them in console");
let a,b,c,d;
console.log("***************")
console.log(a,b,c,d);

// Output
// Question 1
// Declare four variables without assigning values and print them in console
// ***************
// undefined undefined undefined undefined


console.log("Question 2");
console.log("How to get value of the variable myvar as output");
var myvar= 1;
console.log(myvar);

// Output
// Question 2
// How to get value of the variable myvar as output
// 1

console.log("Question 3");
console.log("Declare variables to store your first name, last name, marital status, country and age in multiple lines");
let first_name = "Balaji";
let last_name = "Narasimhan";
let marital_status = "Single";
let country = "India";
let age = 23;
console.log(first_name,last_name,marital_status,country,age);

// Output
// Question 3
// Declare variables to store your first name, last name, marital status, country and age in multiple lines
// Balaji Narasimhan Single India 23

console.log("Question 4");
console.log("Declare variables to store your first name, last name, marital status, country and age in single line");
let obj = {"first_name": "Balaji","last_name":"Narasimhan",
"marital_status":"Single","country":"India",
"age":23 }
console.log(obj);

// Output
// Question 4
// Declare variables to store your first name, last name, marital status, country and age in single line
// { first_name: 'Balaji',
//   last_name: 'Narasimhan',
//   marital_status: 'Single',
//   country: 'India',
//   age: 23 }

console.log("Question 5");
console.log("Declare variables and assign string, boolean, undefined and null data types");
let str = "string";
let bool = false;
let undef;
let nul = null;
console.log(str,bool,undef,nul);

//Output
// Question 5
// Declare variables and assign string, boolean, undefined and null data types
// string false undefined null

console.log("Question 6");
console.log("Convert the string to integer");
// parseInt()
// Number()
// Plus sign(+)
let a = "1000";
console.log(parseInt(a),Number(a),+a);

// Output
// Question 6
// Convert the string to integer
// 1000 1000 1000

console.log("Question 7");
console.log("Write 6 statement which provide truthy & falsey values");
let a = "";
let b = null;
let c;
console.log(!!a,!!b,!!c);
console.log(a,b,c);

// Output
// Question 7
// Write 6 statement which provide truthy & falsey values
// false false false
//  null undefined


