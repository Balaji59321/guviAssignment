const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

req.onload = function () {
  // since there is no value with less than 2 lakhs population using greater than
  let response = JSON.parse(this.response);
  let ans = [];
  response.filter((ele) => ans.push(ele["name"]["common"]));
  document.getElementsByClassName("q1")[0].innerHTML = ans.join(" ");

  ans = [];
  response.filter((ele) =>
    ele["population"] > 200000 ? ans.push(ele["name"]["common"]) : ""
  );
  let ele = document.getElementsByClassName("q2")[0];
  ele.innerHTML = ans.join(" ");

  response.forEach((element) => {
    var tem = document.createElement("li");
    tem.innerHTML =
      element["name"]["common"] +
      " <-> " +
      element["capital"] +
      " <-> " +
      element["flag"];
    document.getElementsByClassName("list")[0].append(tem);
  });

  document.getElementsByClassName("q4")[0].innerHTML = response.reduce(
    (acc, ele) => ele["population"] + acc,
    0
  );

  ans = [];
  response.forEach((ele) => {
    for (let i in ele["currencies"]) {
      i === "USD" ? ans.push(ele["name"]["common"]) : "";
    }
  });
  document.getElementsByClassName("q5")[0].innerHTML = ans;
};
