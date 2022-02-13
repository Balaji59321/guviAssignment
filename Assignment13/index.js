var all_Users = [];

document.addEventListener("DOMContentLoaded", async () => {
  let res = await fetch("https://620737a992dd6600171c0d1c.mockapi.io/users");
  res = await res.json();
  all_Users = res;
  console.log(res);
  let table = document.querySelector(".tbody");

  // let cell = row.insertCell();
  res.map((ele) => {
    let row = table.insertRow();
    Object.keys(ele).map((elem) => {
      let td = document.createElement("td");
      if (elem === "courses") {
        let list = document.createElement("ul");
        ele[elem].split(",").map((ele) => {
          let lis = document.createElement("li");
          lis.innerHTML = ele;
          list.append(lis);
        });
        td.appendChild(list);
      } else {
        td.innerHTML = ele[elem];
      }
      row.append(td);
    });
    let but = document.createElement("button");
    but.innerHTML = `Edit`;
    but.setAttribute("data-action", `Edit`);
    but.setAttribute("data-id", `${ele.id}`);
    let but1 = document.createElement("button");
    but1.innerHTML = `Delete`;
    but1.setAttribute("data-action", `Delete`);
    but1.setAttribute("data-id", `${ele.id}`);
    // console.log(but, but1);
    let table_data = document.createElement("td");
    table_data.append(but, but1);
    row.append(table_data);
  });
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  let body = {
    name: document.querySelector("#name").value,
    age: +document.querySelector("#age").value,
    email: document.querySelector("#email").value,
    courses: document.querySelector("#courses").value,
  };
  console.log(body);
  if (body["name"].trim().length === 0) {
    let name = document.querySelector(".span-name");
    name.innerHTML = "Please enter any valid name";
    name.style.display = "block";
  }
  if (body["age"] === 0) {
    let age = document.querySelector(".span-age");
    age.innerHTML = "Please enter age/greater than 0";
    age.style.display = "block";
  }
  if (body["email"].trim().length === 0) {
    let email = document.querySelector(".span-email");
    email.innerHTML = "Please enter email";
    email.style.display = "block";
  }
  if (body["courses"].trim().length === 0) {
    let courses = document.querySelector(".span-courses");
    courses.innerHTML = "Please enter any course";
    courses.style.display = "block";
  }

  if (body["name"].trim().length !== 0) {
    let name = document.querySelector(".span-name");
    name.style.display = "none";
  }
  if (body["age"] > 0) {
    let age = document.querySelector(".span-age");
    age.style.display = "none";
  }
  if (body["email"].trim().length !== 0) {
    let email = document.querySelector(".span-email");
    email.style.display = "none";
  }
  if (body["courses"].trim().length !== 0) {
    let courses = document.querySelector(".span-courses");
    courses.style.display = "none";
  }

  // alert("Please t VPass Values/Correcalues to All Input");
  let id = document.querySelector("#id").value;
  if (id) {
    let req = await fetch(
      `https://620737a992dd6600171c0d1c.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
    let res = await req.json();
  } else {
    let req = await fetch("https://620737a992dd6600171c0d1c.mockapi.io/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    let res = await req.json();
  }
  window.location.reload();
});

document
  .getElementsByTagName("table")[0]
  .addEventListener("click", async (event) => {
    console.log(event.target.dataset);
    let filter_data = all_Users.filter(
      (ele) => ele.id === event.target.dataset.id
    )[0];
    // console.log(filter_data);
    if (event.target.dataset["action"] === "Edit") {
      document.querySelector("#name").value = filter_data["name"];
      document.querySelector("#age").value = filter_data["age"];
      document.querySelector("#email").value = filter_data["email"];
      document.querySelector("#courses").value = filter_data["courses"];
      document.querySelector("#id").value = filter_data["id"];
    }
    if (event.target.dataset["action"] === "Delete") {
      let req = await fetch(
        `https://620737a992dd6600171c0d1c.mockapi.io/users/${filter_data["id"]}`,
        {
          method: "DELETE",
          "Content-Type": "application/json",
        }
      );
      let ans = await req.json();
      console.log(ans);
      window.location.reload();
    }
  });
