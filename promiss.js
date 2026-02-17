// let promiss =  new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("Proble solve")
//     }, 2000);

// });

// promiss.then(function(data){
//     console.log(data);

// });

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("User data received");
//   }, 3000);
// }
// fetchData(function (data) {
//   console.log(data);
// });

// function fetchData(callback){
//     setTimeout(() => {
//       callback();
//     }, 2000);
// }
// function data (){
//     console.log("Data revied");

// }
// fetchData(data)

// Your first practice question

// Create function:

// getName()

// It should return promise and resolve "Piyush" after 2 seconds.

// Expected output:

// Name is Piyush

// function getname(){
//     return new Promise(resolve => setTimeout(()=> resolve("Piyush is coming"),2000)
// )};
// getname().then(data => console.log(data));

// function getname(){
//     return new Promise(resolve =>
//         setTimeout(() => resolve("Name is Piyush"), 2000)
//     )
// }

// getname().then(data => console.log(data))

// const getProfileData = new Promise((resolve, reject) => {
//     let success = false; // Maan lo server sahi chal raha hai

//     setTimeout(() => {
//         if (success) {
//             resolve({ name: "Piyush", role: "Developer" });
//         } else {
//             reject("Error: Data nahi mil paya!");
//         }
//     }, 2000); // 2 second ka delay
// });

// // Use kaise karein:
// getProfileData
//     .then((data) => console.log("Data mil gaya:", data))
//     .catch((err) => console.error(err));

// let mypromise = new Promise((resolve, reject) => {
//   let serverrunning = true;

//   if (serverrunning) {
//     resolve("work done");
//   } else {
//     reject("work reject by server");
//   }

// });
  
//     mypromise.then((message) => {
//     // Ye tab chalega jab upar 'resolve' call hoga
//     console.log("Success Message: " + message);
//   })

//   mypromise.catch((error) => {
//     // Ye tab chalega jab upar 'reject' call hoga
//     console.log("Error Message: " + error);
//   })
//   mypromise.finally(() => {
//     // Ye hamesha chalega, chahe success ho ya error
//     console.log("Process khatam ho gayi.");
//   });


// Scenario: Tumhe ek Promise banana hai jo check karega ki "Roll Number" valid hai ya nahi.
// Agar rollNumber 10 se bada hai, to resolve karo: "Roll number valid hai".
// Agar chota hai, to reject karo: "Invalid Roll Number".
// Phir .then() aur .catch() se message print karo.

// let rollnuber = new Promise ((resolve, reject)=>{

//      let number = 15;

//       setTimeout(() => {
//         if (number > 10) {
//         resolve("Roll Number Is Vaild");
//       } else {
//         reject ("Invaild Number")
//       }}, 2000);
      

//       });

//       rollnuber.then((Message) => {
//         console.log("succes", Message);
//       })
//       rollnuber.catch((Error) => {
//         console.log("error", Error);
        
//       })




//       let checkRollInDB = new Promise((resolve, reject) => {
//     console.log("Database mein check kar raha hoon... wait karo...");
    
//     let roll = 15;

//     setTimeout(() => {
//         if (roll > 10) {
//             resolve("Mil gaya! Roll no " + roll + " valid hai.");
//         } else {
//             reject("Nahi mila! Roll no galat hai.");
//         }
//     }, 3000); // 3 second ka delay
// });

// checkRollInDB
//     .then((res) => console.log("Result:", res))
//     .catch((err) => console.log("Error:", err));


// 1. Fetch function ko URL diya (Ye ek Promise return karta hai)
// 



