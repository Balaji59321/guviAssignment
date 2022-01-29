// // let sel = document.querySelector("#drop");

// // sel.addEventListener("change", () => {
// //   document.getElementById("selected").innerHTML = sel.value;
// //   console.log(document.getElementById("selected").innerHTML);
// // });

// let temp = document.getElementById("inp");
// temp.addEventListener("keypress", () => {
//   document.getElementById("ans").innerHTML = temp.value;
//   console.log(ans.value);
// });

// setInterval(() => {
//   // console.log("Hello");
//   // console.log(new Date().toLocaleTimeString());
//   document.getElementById("ans").innerHTML = new Date().toLocaleString(
//     "en-US",
//     {}
//   );
// }, 1000);

// let add = (num1, num2) => {
//   console.log("exec add");
//   return num1 + num2;
// };
// let div = (num1, num2) => {
//   console.log("exec div");
//   return num1 / num2;
// };
// let func1 = (num1, num2, callback, callback1) => {
//   let c = num1 + num2;
//   let b = callback1(num1, c);
//   let a = callback(num1, c);
//   return [a, b];
// };

// // console.log(func1(10, 20, add, div));

// function test() {
//   console.log("Test");
//   function func1(callback) {
//     console.log(callback(10, 20));
//   }
//   function func2(callback) {
//     console.log(callback(12, 20));
//   }
//   func1(add);
//   func2(add);
// }

// // test();

// // let a = test();
// // let b = test();
// const call_hell = () => {
//   setInterval(() => {
//     setInterval(() => {
//       console.log(new Date());
//     }, 1000);
//     console.log("First");
//   }, 1000);
// };
// // call_hell();

// // const prom = new Promise((resolve, reject) => {
// //   let arr = [1, 2, 3, 4, 5];
// //   console.warn("re");
// //   return "helo";
// //   reject(resolve(arr));
// // });

// // console.log(prom.then((data) => console.log(data)));

// // let a = setInterval(() => {
// //   alert("Hello");
// // }, 1000);

// // setInterval(() => {
// //   console.log("clear");
// //   clearInterval(a);
// // }, 1000);

// // const num = (param) => {
// //   return new Promise((res, rej) => {
// //     +param > 30 ? res(+param) : rej("Number is less than 30");
// //   })
// //     .then((num) => {
// //       console.log("Number is Greater than 30 and Passed Number is " + num);
// //       // return "Promise Resolved";
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //       return "Promise Rejected";
// //     });
// // };

// // console.log(num(10));
// // console.log(num(35));

// // var prom = () => {
// //   return new Promise((res, rej) => {
// //     let data = {
// //       name: "Test",
// //       age: 20,
// //       services: [{ service1: "$12" }, { service2: "$25" }, { service3: "$50" }],
// //     };
// //     if (data.length === 0) {
// //       rej("No data Found");
// //     } else {
// //       res(data);
// //     }
// //   })
// //     .then((ele) => {
// //       console.log(ele["name"]);
// //       return ele["services"];
// //     })
// //     .then((ele) => {
// //       console.log(ele);
// //       let ans = ele.map((ele) => Object.values(ele));
// //       return ans;
// //     })
// //     .then((ele) => console.log(ele))
// //     .catch((err) => console.log(err))
// //     .finally(console.log("Promise has been completed"));
// // };
// // prom();

// var prom = () => {
//   return new Promise((res, rej) => {
//     let data = {
//       name: "Test",
//     };
//     if (data.length === 0) {
//       rej("No data Found");
//     } else {
//       res(data);
//     }
//   });
// };
// var prom1 = (res) => {
//   return new Promise((res, rej) => {
//     console.log(res);
//     res(["temp", "AWS"]);
//   });
// };
// var prom2 = (ser) => {
//   return new Promise((res, rej) => {
//     res(["12,13"]);
//   });
// };
// prom()
//   .then((ele) => {
//     console.log(ele["name"]);
//     return prom1(ele["name"]);
//   })
//   .then((ele) => {
//     return prom2(ele);
//   })
//   .then((ele) => console.log(ele.then((data) => console.log(data))))
//   .catch((err) => console.log(err))
//   .finally(console.log("Promise has been completed"));

setTimeout(() => {
  document.getElementsByClassName("p")[0].innerHTML = 10;
  setTimeout(() => {
    document.getElementsByClassName("p")[0].innerHTML = 9;
    setTimeout(() => {
      document.getElementsByClassName("p")[0].innerHTML = 8;
      setTimeout(() => {
        document.getElementsByClassName("p")[0].innerHTML = 7;
        setTimeout(() => {
          document.getElementsByClassName("p")[0].innerHTML = 6;
          setTimeout(() => {
            document.getElementsByClassName("p")[0].innerHTML = 5;
            setTimeout(() => {
              document.getElementsByClassName("p")[0].innerHTML = 4;
              setTimeout(() => {
                document.getElementsByClassName("p")[0].innerHTML = 3;
                setTimeout(() => {
                  document.getElementsByClassName("p")[0].innerHTML = 2;
                  setTimeout(() => {
                    document.getElementsByClassName("p")[0].innerHTML = 1;
                    setTimeout(() => {
                      document.getElementsByClassName("p")[0].innerHTML = 0;
                      setTimeout(() => {
                        document.getElementsByClassName("p")[0].innerHTML =
                          "Happy Independance Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
