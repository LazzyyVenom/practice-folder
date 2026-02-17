// async function getUseData (){

//     try {
//     console.log("wait.... data are coming");

//     let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     let data = await response.json();

//     console.log("User Name Is:", data.name);

//     } catch (error){
//       console.log("net band hai api fail", error);

//     }

// }

// getUseData()

// async function getdata() {

//   try{
//     console.log("Data are trying to load.....");
//     let response = await fetch ('https://jsonplaceholder.typicode.com/users/1');
//     let data = await response.json()

//     console.log("Data has been recived");

//   } catch (error) {
//    console.log("Your network has been disconnnect", error);

//   }

// };

// getdata();

// async function practice() {
//   try {
//     console.log("Data load ho rha hai..");
//     let data = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let convert = await data.json();

//     console.log("Users Name :", convert.name);
//     console.log("Users Email :", convert.email);
//     console.log("Users Add :", convert.address);
//     console.log("Users city :", convert.city);
//   } catch (error) {
//     console.log("network connection has been lost", error);
//   }
// }
// practice();

// // Step 1: Function ke pehle 'async' likho
// async function checkData() {

//     try {

//         console.log("Data laya ja raha hai...");
//         let response = await fetch('https://jsonplaceholder.typicode.com/users/1');

//         let data = await response.json();

//         console.log("User ka naam hai: ", data.name);

//     } catch (error) {
//         console.log("Bhai error aa gaya: ", error);
//     }
// }

// checkData();

// function stationjanekawada() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("I am Waiting for that train");
//     }, 3000);
//   });
// }

// async function travel() {
//   let result = await stationjanekawada();
//   console.log("Train Has been come");
// }

// stationjanekawada();

// function stationjanekawada() {
//   return new Promise((resolve, reject) => {
//     let trainCancelled = true; // Isse false karoge toh 'resolve' chalega

//     setTimeout(() => {
//       if (!trainCancelled) {
//         resolve("Mubarak ho! Train aa gayi.");
//       } else {
//         reject("Afsos! Train cancel ho gayi hai."); // Ye reject hai
//       }
//     }, 3000);
//   });
// }

// async function travel() {
//   try {
//     console.log("Station par intezaar shuru...");

//     // Agar promise reject hua, toh control seedha 'catch' mein chala jayega
//     let result = await stationjanekawada();

//     console.log(result);
//     console.log("Chalo boarding shuru karte hain!");
//   } catch (error) {
//     // Ye block tab chalega jab reject() call hoga
//     console.log("Error Alert: " + error);
//     console.log("Ghar wapas jao, aaj koi train nahi hai.");
//   }
// }

// travel();

// function stationjana() {
//   return new Promise((resolve, reject) => {
//     let traincalledhotihaito = true;
//     setTimeout(() => {
//       if (traincalledhotihaito) {
//         resolve("You train are coming Congrats");
//       } else {
//         reject("your train has been cancalled");
//       }
//     }, 3000);
//   });
// }

// async function travelguru() {
//   try {
//     console.log("Looking for your train wait.....");

//     let resultss = await stationjana();

//     console.log(resultss);
//     console.log("Your train are coming ");
//   } catch (error) {
//     console.log("Train has been cancalled due to some resaon", error);
//   }
// }
// travelguru();
