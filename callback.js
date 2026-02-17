// function welcome (name, callback){
//   console.log("hello", name);
//   callback();
// }



// function later (){
//   console.log("welcome to our house");

// }
// welcome("Piyush", later)

// function main (callback){
//   console.log("I am running first");

//   callback();
// }

// function second (){
//   setTimeout(()=>{
//     console.log("i am running in the second ");

//   }, 2000);
// }

// main(second);

// function main (callback){
//   console.log("Run 2 sec later..");

// setTimeout(callback, 2000);

// }

// function tain (){
//   console.log("i am running later");

// }
// main(tain);

// function fetchData(callback) {

//   setTimeout(() => {
//     callback("Data received")
//   }, 2000);

// }

// fetchData(function(Data){
//   console.log("Data Recived");
// });
// =========================================================================================

// 1.
// function greet (greet){
//   console.log("Hello bro");
//   greet();
// }
// function second (){
//    console.log("callback executed");

// }
// greet(second);

// ===========================================================

// 2.
// function processUser (name, callback){
//   console.log(`User: ${name}`);
//   callback();

// }
// function greet (){
//   console.log("Welcome Piyush");

// }

// processUser("Piyush", greet)

// ==================================================================
// 3.
// function getNumber (getnum){
//   setTimeout(() => {
//     console.log("Number is 10");

//   }, 2000);

// }

// getNumber();

// ======================================================

// Question 4 (Medium)

// function createbutton (callback){
// document.querySelector("btn")
//   btn.innerText = "loading..."
//   callback();
// }

// function changetext (){
//   document.querySelector("btn");
//   setTimeout(()=>{
//    btn.innerText = "Completed"
//   },2000)

// }
// createbutton(changetext);

// =====================================================

// Question 5 (Real-world level)

// function fetchData(callback) { 
//   setTimeout(() => {
//     callback("Users revied data");
//   }, 3000);
// }
// fetchData(function(returndata){
//   console.log(returndata);
// });
//  ================================================================ 

// Create function:

// calculate(a, b, callback)


// Callback should print multiplication result after 2 seconds.

// Expected output:

// Result is 20


// function fetchData(callback) { 
//   setTimeout(() => {
//     callback("User data received");
//   }, 3000);
// }

// fetchData(function(data){
//   console.log(data);
// });



// Now your small practice question (very easy)

// Create function:

// getNumber(callback)


function getNumber(callback){

  setTimeout(()=>{
    callback(50)
  },2000)
}

getNumber(function(data){
  console.log("Number is", data);
})