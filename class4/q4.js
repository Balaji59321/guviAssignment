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


// Task-3: Simple Programs todo for Condition , Looping and Arrays
// 1. Write a loop that makes seven calls to console.log to output the following triangle:
let str = "#"
for(let i=1;i<=7;i++){
    console.log("#".repeat(i));
}

// Output
//#
//##
//###
//####
//#####
//######
//#######

// 2. Iterate through the string array and print it contents


// Array
var myarray=[11,22,33,44,55];
let count = 0;
for(let i=0;typeof myarray[i]=== "number";i++){
    count++;
}
console.log(count);

// Output
// 5

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=["Idly","Dosa","Poori","Chapathi","Parota","Pongal","Rava","Semiya"];
console.log(foods);
console.log(foods[4]);
console.log(foods.length);

// Output
// [ 'Idly',
//   'Dosa',
//   'Poori',
//   'Chapathi',
//   'Parota',
//   'Pongal',
//   'Rava',
//   'Semiya' ]
// Parota
// 8

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
  if(input[i]=== "Mari"){
      input[i]="Munnabai";
  }
}
}
dataHandling(friends);
console.log(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
  if(input[i]==="CaptianAmerica"){
      break;
  }
  console.log(input[i]);
}
}
dataHandling(friends);

// Output
// Mari
// MaryJane

// Find the person is ur friend or not.
const friends = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
function dataHandling(input, name){
    let flag =0;
for (var i = 0; i < input.length; i++) {
  if(input[i]===name){
      flag++;
  }
}
 return flag;
}
let found = dataHandling(friends,"Jeff");
console.log(found ? "yes" : "no");

// Output
// yes

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran"
];
var friends2 = [
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
function dataHandling(){
 friends1 = friends1.concat(friends2);
 console.log(friends1.sort());
}
dataHandling();

// Output
// [ 'AAK chandran',
//   'CaptianAmerica',
//   'ET',
//   'Gabbar',
//   'Jeff',
//   'Jeff',
//   'Mari',
//   'MaryJane',
//   'Mass',
//   'Munnabai',
//   'Rajinikanth',
//   'Spiderman' ]


// Get the first item, the middle item and the last item of the array
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];
console.log(friends[0],friends[friends.length-1],friends[Math.floor(friends.length/2)]);

// Output
// Mari ET Gabbar


// Add your name to the end of the friends array, and add another name to beginning.
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

friends.splice(0,0,"Friend1");
console.log(friends);

friends.splice(friends.length,0,"Friendn");
console.log(friends);

// Ouput
// [ 'Friend1',
//   'Mari',
//   'MaryJane',
//   'CaptianAmerica',
//   'Munnabai',
//   'Jeff',
//   'AAK chandran',
//   'Gabbar',
//   'Rajinikanth',
//   'Mass',
//   'Spiderman',
//   'Jeff',
//   'ET' ]
// [ 'Friend1',
//   'Mari',
//   'MaryJane',
//   'CaptianAmerica',
//   'Munnabai',
//   'Jeff',
//   'AAK chandran',
//   'Gabbar',
//   'Rajinikanth',
//   'Mass',
//   'Spiderman',
//   'Jeff',
//   'ET',
//   'Friendn' ]

var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

for(let i in friends){
   friends[i] = "Mr." + friends[i];
}

console.log(friends);

// output
// [ 'Mr.Mari',
//   'Mr.MaryJane',
//   'Mr.CaptianAmerica',
//   'Mr.Munnabai',
//   'Mr.Jeff',
//   'Mr.AAK chandran',
//   'Mr.Gabbar',
//   'Mr.Rajinikanth',
//   'Mr.Mass',
//   'Mr.Spiderman',
//   'Mr.Jeff',
//   'Mr.ET' ]


// Concat all the names the friends array and return as comma “,” seperated string.
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

console.log(friends.join(','));

// output
// Mari,MaryJane,CaptianAmerica,Munnabai,Jeff,AAK chandran,Gabbar,Rajinikanth,Mass,Spiderman,Jeff,ET

// Find the friends names who has letter ‘a’ and return the list.
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

for(let i of friends){
    i.includes('a') ? console.log(i): "";
}

// Output
// Mari
// MaryJane
// CaptianAmerica
// Munnabai
// AAK chandran
// Gabbar
// Rajinikanth
// Mass
// Spiderman

// Find the avg length of all the friends names. Get the individual length of the names and do the avg.
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

let ans = [];
console.log(friends.map(ele=> ans.push(ele.length)).reduce((acc,ele) => acc+ele)/friends.length);

// Output
// 6.5

// Find the names and return the list starting with letter M.
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

let ans = [];
friends.map(ele => ele.match(/^M/) ? console.log(ele) : "");

// Output
// Mari
// MaryJane
// Munnabai
// Mass

// Find the name with max/min characters and return the name
var friends =[
"Mari",
"MaryJane",
"CaptianAmerica",
"Munnabai",
"Jeff",
"AAK chandran",
"Gabbar",
"Rajinikanth",
"Mass",
"Spiderman",
"Jeff",
"ET"
];

let ans = {};
friends.map(ele => ans[ele] = ele.length);
ans = Object.entries(ans).sort((a,b)=> (+b[1] - +a[1]));

console.log(ans[0].join(' '));
console.log(ans[ans.length-1].join(' '));

// Output
// CaptianAmerica 14
// ET 2

// Find the average in the array below. 
// Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
let flag = 0;
let sum = 0;
for(let i of friendsInfo){
    if(+i && typeof i!== "boolean"){sum +=(+i);flag++;}
}
console.log(sum/flag);

// Output
// 39.5

// Print the contents of the input variable

var input = [
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
function dataHandling(input){
for (var i = 0; i < input.length; i++) {
  console.log(input[i][0] + input[i][1] + input[i][2] +input[i][3] +input[i][4])
}
}
dataHandling(input);

// Output
// 0001Roman AlamsyahBandar Lampung21/05/1989Membaca
// 0002Dika SembiringMedan10/10/1992Bermain Gitar
// 0003WinonaAmbon25/12/1965Memasak
// 0004Bintang SenjayaMartapura6/4/1970Berkebun

// Objects
let myobject = {"1":"one","11":1,"name":"arun"}
console.log(myobject["11"]); 
console.log(myobject.name);

myobject[10] = 10;
console.log(myobject);

// Output
// 1
// arun
// { '1': 'one', '10': 10, '11': 1, name: 'arun' }

// How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
let obj = {
  "company" : {
    "name":"Guvi",
    "parent_company": "Geek"
   },
   "location": {"address":"IIT-M RP","city":"Chennai"}
}

console.log(obj);
