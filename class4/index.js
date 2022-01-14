const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
  var obj1 = { name: "Person 1", age: 5 };
  var obj2 = { age: 5, name: "Person 1" };

  let flag = 0;
  for (let i in obj1) {
    obj2[i] === obj1[i] ? flag++ : flag;
  }

  document.getElementsByClassName("q1")[0].innerHTML =
    flag.length === obj2.length ? "Both are Equal" : "Not Equal";

  let response = JSON.parse(this.response);
  let ans = [];
  response.filter((ele) => ans.push(ele["flag"]));
  document.getElementsByClassName("q2")[0].innerHTML = ans.join(" ");

  response.filter((ele) => {
    let temp = document.createElement("li");
    temp.innerText =
      ele["name"]["common"] +
      " - " +
      ele["region"] +
      " - " +
      ele["subregion"] +
      " - " +
      ele["population"];
    document.getElementsByClassName("q3")[0].append(temp);
  });
};
