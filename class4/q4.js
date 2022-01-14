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


// Task 2 : Simple Programs using todo for Operators
// power of a number
let sq =2;
console.log(Math.pow(sq,2));

// swap pf numbers
let [a,b] = [1,2];
[b,a] = [a,b];
console.log(a,b);

// sum of numbers
let sum = [1,2,3];
console.log(sum.reduce((acc,ele) => acc+ele))

// celsius to fahrenheit
let cel = 35;
let fah = cel*(9/5)+32;
console.log(fah);

// meter to mile
let m = 2;
console.log(m* 0.0006213);

// pounds to kg
let pound = 1;
console.log(pound/2.2046)

// batting average
let balls_faced = 10;
let runs_scored = 60;
console.log(balls_faced * runs_scored);

// test scores and average
let scores = [123,130,145];
console.log(scores.reduce((acc,ele)=> acc+ele)/3);

// power of a number
let pow =5;
console.log(pow**2);

// simple interest
console.log((2000*3.5*2)/100);

// area of equilaeral triangle
console.log(Math.sqrt(3)/4*(12**2));

// area of isocelous triangle
console.log(10*10/2);

// volume of sphere
let rad =12;
console.log((4/3)*Math.PI*(rad**2));

// volumns of prism
let base = 3;
let height = 5;
console.log(base * height);

// area of triangle
let ba = 5;
let he = 10;
console.log(ba * he/2);

// actual and sold cost;
let actual_cost = 100;
let sold_cost = 90;
console.log((actual_cost-sold_cost)/actual_cost*100);

// cirucm,area,dia of a circle
let r = 5;
console.log(2*Math.PI*r,Math.PI*(r*r),r*2);

// given 2 num perform all arithmetic operation
let num1 = 2;
let num2 = 4;
console.log(num1+num2,num1-num2,num1/num2,num1%num2,num1*num2,num1**num2);

// asterisk pattern
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

// e.b bill
let con = 100;
let day =30;
let amo =10;
console.log(amo/(1000/con)*24*30);

// cgpa calculator

