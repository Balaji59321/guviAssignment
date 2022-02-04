let but = document.createElement("button");
but.style.display = "block";
but.innerHTML = "Get Image";

document.getElementsByTagName("body")[0].appendChild(but);

let img = document.createElement("img");
img.style.width = "50%";
img.style.heigth = "auto";
document.getElementsByTagName("body")[0].append(img);
but.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => data.json())
    .then((data) => img.setAttribute("src", data["message"]))
    .catch((err) => console.warn(err));
});

const func1 = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((data) => res(data))
    .catch((err) => rej(err));
});

const func2 = new Promise((res, rej) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => res(data))
    .catch((err) => rej(err));
});

Promise.all([func1, func2])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.warn(err));
