// Find the culprit

<!DOCTYPE html>
<html>
<body>
  <script>
    alert("I’m JavaScript!");
  </script>
  Whats the error in this ?
</body>
</html>


// Find the culprit and invoke the alert
// index.html
<!DOCTYPE html>
<html>
<body>
  <script src="script.js"></script>
</body>
</html>

// script.js
alert("I’m invoked!");


// Explain the below how it works
alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

Answer:
Alerts are generated one by one and if they are multiline surrounded with string literals they are rendered in the lines as mentioned in the file and on the case of number in mutiple line they are summed up.


// Fix the below to alert Guvi geek
let admin = 9,
let fname = 10.5;
fname = "Guvi";
lname = "geek";
admin = fname + lname;
alert(admin);


// Fix the below to alert hello Guvi geek
let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + " " + lname;
alert(`hello ${name}`);


// Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);


// Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(+a + +b);


// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = "2" > "12";
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

Answer:
the string comparison works on the approach by comparing the first digit here it compares 2 and 1.the result of it is true hence if is executed.Similarly if we pass values as "11" or "10".the else part will be executed.


// How to get the success in console.
let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

Answer: If we dont pass any value in prompt then else pasrt will be executed.


// How to get the correct score in console.
let value = prompt("How many runs you scored in this ball");
if (+value === 4) {
  console.log("You hit a Four");
} else if (+value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}


// Fix the code to welcome the Employee
let login = "Employee";
let message =
  login == "Employee"
    ? "Greetings"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
console.log(message);


// Fix the code to welcome the boss
let message;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);


// Fix the code to welcome the boss
let message;
let lock = NaN;
//Dont change any code below this
if (null || lock || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);


// Fix the code to welcome the boss
let message;
let lock = false;
//Dont change any code below this
if ((lock && " ") || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);


// Change the code to print
let i = 3;
while (i) {
  console.log(i--);
}

// Change the code to print 1 to 10 in 4 lines
let num = 1;
for (let i = num; i <= 10; i++) {
  console.log(num++);
}


// Change the code to print even numbers
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}


// Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}


// Fix the code to disarm the bomb.
let countdown = 100;
while (countdown > 1) {
  countdown--;
  if (countdown == 0) {
    console.log("bomb triggered");
  }
}


// Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
  msg += "hi";
}
if (lemeout) {
  msg += "Hello";
}
console.log(msg);

Answer: Hi will be printed since if(" ") (the empty gap - space will be treated as the true value and Hi will be printed)

