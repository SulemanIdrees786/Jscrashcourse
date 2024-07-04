// alert("hello world");
// console.log("hello world");
// console.error("error");
// console.warn("warning");
// const name='john';
// const age = 30;
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

//console.log(typeof x);

// const name = "john";
// const age = 30;

// console.log("my name is " + name + "and i am" + age);
// const helllo = "my name is ${name} and i am ${age }";

// console.log(helllo);

// const s = "helllo";
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(""));
//Arrays = varriables that hold multiple values
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// const fruits = ["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangoes");
// fruits.unshift("strawberries");
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("oranges"));
// console.log(fruits);

//object literals

// const person = {
//   firstname: "john",
//   lastname: "doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "buston",
//     state: "ma",
//   },
// };

// console.log(person);

// console.log(person.firstname, person.lastname);
// // const { firstname, lastname } = person;
// // console.log(firstname);
// const {
//   firstname,
//   lastname,
//   address: { city },
// } = person;
// console.log(city);
// person.email = "h12@gmail.com";

// const todos = [
//   { id: 1, text: "takeout", iscompleted: true },
//   { id: 2, text: "takeout", iscompleted: true },
//   { id: 3, text: "takeout", iscompleted: false },
// ];
// console.log(todos[1]);
// // json
// const todojson = JSON.stringify(todos);
// console.log(todojson);

// // for
// for (let i = 0; i < 10; i++) {
//   console.log(`For loop numbr : ${i}`);
// }

// // // while
// // let i = 0;
// // while (i < 10) {
// //   console.log(`while loop number ${i}`);
// //   i++;
// // }
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let t of todos) {
//   console.log(t.id);
// }
// //forEach,map,filter
// const todocomp = todos
//   .map(function (t1) {
//     return t1.iscompleted === true;
//   })
//   .map(function (t1) {
//     return t1.text;
//   });
// console.log(todocomp);
// const x = 10;
// const y = 4

// if (x > 10 || y < 5)  {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is not 10");
// }
// terninary operator

// const x = 11;
// // const color = x > 10 ? "red" : "blue";
// // console.log(color);
// const color = "green";
// switch (color) {
//   case "red":
//     console.log("red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   case "green":
//     console.log("color is green");
//     break;
// }

// function addnums(num1 = 1, num2 = 2) {
//   return num1 + num2;
// }
// console.log(addnums(5, 4));

// const addnums = (num1 = 1, num2 = 2) => console.log(num1 + num2);

// addnums(5, 4);
//todos.forEach((t1) => console.log(t1));
// function person(firstname, lastname, dob) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
//   //   this.getBirthYear = function () {
//   //     return this.dob.getFullYear();
//   //   };
//   //   this.getFullname = function () {
//   //     return `${this.firstname} ${this.lastname}`;
//   //   };
// }

// person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// person.prototype.getFullname = function () {
//   return `${this.firstname} ${this.lastname}`;
// };

// class person {
//   constructor(firstname, lastname, dob) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//   }
//   getbirthyear() {
//     return this.dob.getFullYear();
//   }
//   getFullname() {
//     return `${this.firstname} ${this.lastname}`;
//   }
// }

// const person1 = new person("john", "doe", "2-3-1300");
// const person2 = new person("oyyye", "dwe", "2-3-2000");
// const person3 = new person("marry", "rre", "2-5-2000");

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullname());

// console.log(person1);
// console.log(person3.getFullname());

// object.create()
//

// Encapsulation example
// class person {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }

//   add_Address(add) {
//     this.add = add;
//   }
//   getdetails() {
//     console.log(`name is ${this.name}, Address is: ${this.add}`);
//   }
// }

// let p1 = new person("micheal", "12");
// p1.add_Address("Delhi");
// p1.getdetails();

// Abstraction Example
// function person(fname, lname) {
//   let firstname = fname;
//   let lastname = lname;

//   let getdetails_noaccess = function () {
//     return `${firstname}  , ${lastname}`;
//   };

//   this.getdetails_access = function () {
//     return `${firstname}  , ${lastname}`;
//   };
// }
// let p1 = new person("mukul", "latiyar");
// console.log(p1.firstname);
// console.log(p1.getdetails_noaccess);
// console.log(p1.getdetails_access());

// function person(fname, lname) {
//   let firstname = fname;
//   let lastname = lname;

//   let getDetails_noaccess = function () {
//     return `First name is: ${firstname} Last
//             name is: ${lastname}`;
//   };

//   this.getDetails_access = function () {
//     return `First name is: ${firstname}, Last
//             name is: ${lastname}`;
//   };
// }
// let person1 = new person("Mukul", "Latiyan");
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());

// polymorphism and inheritance example

// class person {
//   constructor(name) {
//     this.name = name;
//   }
//   // method to return string
//   toString() {
//     return `name of person :${this.name}`;
//   }
// }

// class student extends person {
//   constructor(name, id) {
//     // super keyword is used to call above class constructor
//     super(name);
//     this.id = id;
//   }
//   toString() {
//     return `${super.toString()} , student id : ${this.id}`;
//   }
// }
// let s1 = new student("saad", 22);
// console.log(s1.toString());

//  DoM
// const ul = document.querySelector(".items");

// ul.firstElementChild.textContent = "h";
// ul.children[1].innerText = "br11";
// ul.children[2].innerHTML = "<h1>br</h1>";

// const b = document.querySelector(".btn");
// b.style.background = "red";
const b = document.querySelector(".btn");

// b.addEventListener("click", (e) => {
//   e.preventDefault(), console.log(e.target.id);
// });

// b.addEventListener("click", (e) => {
//   e.preventDefault();
//   const a = document.querySelector("#my-form");
//   a.style.background = "blue";
//   document.querySelector(".container").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1> heeello </h1>";
// });

// b.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   const a = document.querySelector("#my-form");
//   a.style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1> heeello </h1>";
// });

// form  script
// const myform = document.querySelector("#my-form");
// const nameinput = document.querySelector("#name");
// const emailinput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");
// const del = document.getElementById("delete");

// console.log(del);

// myform.addEventListener("submit", onSubmit);

// function onSubmit(e) {
//   e.preventDefault();

//   if (nameinput.value === "" || emailinput.value === "") {
//     // alert("please enter fields");
//     msg.classList.add("error");

//     msg.innerHTML = "please enter all fields";
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // console.log("success");
//     const li = document.createElement("li");
//     li.appendChild(
//       document.createTextNode(
//         `name : ${nameinput.value} , Email : ${emailinput.value}`
//       )
//     );

//     userList.appendChild(li);

//     nameinput.value = "";
//     emailinput.value = "";
//   }
// }

// const q = document.getElementById("myBtn");

// // q.addEventListener("click", displaydate);
// // function displaydate() {
// //   document.getElementById("demo").innerHTML = Date();
// // }
// q.addEventListener("click", (e) => {
//   e.preventDefault;
//   document.getElementById("demo").innerHTML = Date();
//   document.querySelector("#demo").classList.add("bg-dark");
// });

const myform = document.querySelector("#my-form");
const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");
const del = document.querySelector("#delete");

console.log(del);

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameinput.value === "" || emailinput.value === "") {
    // alert("please enter fields");
    msg.classList.add("error");

    msg.innerHTML = "please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `name : ${nameinput.value} , Email : ${emailinput.value}`
      )
    );

    userList.appendChild(li);

    nameinput.value = "";
    emailinput.value = "";
  }
}

del.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  if (nameinput.value === "" || emailinput.value === "") {
    // alert("please enter fields");
    msg.classList.add("error");

    msg.innerHTML = "please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(
        `name : ${nameinput.value} , Email : ${emailinput.value}`
      )
    );

    userList.appendChild(li);

    nameinput.value = "";
    emailinput.value = "";
  }
}
