// const user = {
//     name: "Piyush",
//     college: "SNB Patna",
//     year: "Final"
// };

// const {name, college, year} = user

// // Baar-baar 'user.' likhna pad raha hai (Time waste)
// console.log(name, college, year);


// const user = {
//    name:"Piyush"
// }

// const {name, email = "Email are not provided"} = user;

// console.log(email);


/*
const job = {
    title: "Frontend Engineer",
    salary: "12 LPA",
    location: "Remote"
};
Task:

title aur salary ko destructure karke print karo.

location ko rename karke workFrom naam se print ka */

// const job = {
//     title: "Frontend Engineer",
//     salary: "12 LPA",
//     location: "Remote"
// };


// const {location : workform, salary, title} = job;

// console.log(salary, title, workform);


// const user = {
//     id: 1,
//     fullname: {
//         first: "Piyush",
//         last: "Kumar"
//     },
//     location: "Patna"
// };

// const {fullname : {last}} = user;
// console.log(last);


// const colors = ["Red", "Green", "Blue", "Yellow"];

// const [first, , third] = colors;

// console.log(first);



 //=============

//  function welcome({ name, city }) {
//     console.log("Hello " + name + " from " + city);
// }

// const myUser = { name: "Piyush", city: "Patna", age: 21 };
// welcome(myUser);



// Sawal 1 (Array):
// Ek array hai const marks = [80, 90, 75, 95];.
// Destructuring ka use karke sirf pehla (80) aur aakhri (95) number nikal kar dikhao.

const marks = [80, 90, 75, 95];

 const [first, , , fourth] = marks;

 console.log(first, fourth);
 
 // ============================================

//  Task: specs ke andar se ram ko destructure karke dikhao aur use rename karke laptopRam bol do.
 const laptop = {
    brand: "Apple",
    specs: {
        ram: "16GB",
        storage: "512GB"
    }
};

const {specs : { ram : laptopRam }} = laptop;
console.log(laptopRam);
 