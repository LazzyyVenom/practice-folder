// Rivision of yesterday study

// Accessing arrays

// let names = ["Push", "pop", "where"];
// console.log( names[1]);

// Finding the length

// let names = ["Push", "pop", "where"];
// console.log(names.length);

// changing their value 

// let names = ["Push", "pop", "where"];
// names[0] = "why"; // always remeber when you change the arryas value you need to change thier value by her index number
// console.log(names);

// arrays mehtod 
// 1. tostring  

// let names = ["Push", "pop", "where"];
// names = names.toString();
// console.log(names);

// 2. join() 
// let names = ["Push", "pop", "where"];
//   names = names.join(" love ");
//   console.log(names);

// 3. pop() 
// let names = ["Push", "pop", "where"];
// names = names.pop(); // pop is used to remove the last elemet and update the orinigal value
// console.log(names);  // where

// 4. push();
//  let names = ["Push", "pop", "where"];
//  console.log(names.push("find"));

// 5. shift()

// let names = ["Push", "pop", "where"];
// names = names.shift(); // 
// console.log(names);

// 6. unshift()

// let names = ["Push", "pop", "where"];
// names = names.unshift("mew");
// console.log(names);

// -------------------------------------------------------------------------------

// map()


// 1. create an arrays usingn original arrays 

// let arr = [1, 2, 33, 4, 5, 66];
// let newarr = []
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];              //this will ok but its take to much line
//     newarr.push(element**2)

// }
// console.log(arr);

//  now we are creating arryas using original aarys

// let arr = [1, 3, 5, 6,]

// let newarr = arr.map(e=>{
//     return e**2 
// })
// console.log(newarr);


// let names = ["piyush", "mausham"]
// let upperm = names.map(names=> names.toUpperCase());
// console.log(upperm);

// const products = [
//   {name: "Phone", price: 10000},
//   {name: "Laptop", price: 50000}
// ];

// let product = products.map(p=>{
//     return p.price})
// console.log(product);

// q1. [1, 2, 3, 4] dobule the arrys

// let arr = [1, 2, 3, 4]
// let newarr = arr.map(a=>{
//           return a**2})
// console.log(newarr);


// q2. ["piyush", "mausham", "love"] convert this words into uppercase

// let arr = ["piyush", "mausham", "love"]

// let newarr = arr.map(arr=>(arr.toUpperCase()));
// console.log(newarr);


// q3. [10, 20, 30] add 5 to all

// let add = [10, 20, 30]
// console.log(add.map(add => add + 5));
// // both will work
// console.log(add.map(add => {
//   return add + 5
// }));


// q4. [
// { name: "Phone", price: 10000 },
// { name: "Laptop", price: 50000 }
// ]  get only names from objects

// let getnamesfromthisobj = [
//   {name: "Phone", price: 10000},
//   {name: "Laptop", price: 50000}
// ]

// console.log(getnamesfromthisobj.map(getnamesfromthisobj=> getnamesfromthisobj.name));
// console.log(getnamesfromthisobj.map(getnamesfromthisobj=> getnamesfromthisobj.price));


// q5. mulitply price by 2 [
//   {name: "Phone", price: 20000},
//   {name: "Laptop", price: 100000}
// ]

let mulitplypriceby2 = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 100000 }
]

// console.log(mulitplypriceby2.map(mulitplypriceby2=>mulitplypriceby2.price*2));

// let wearemulitplying =  mulitplypriceby2.map(mulitplypriceby2=>{
//   return mulitplypriceby2.price*2
// })
// console.log(wearemulitplying);

// both method are works properly

// q6. [1, 2, 3]  convert this numbver to string 

// let num = [1, 2, 3]
// num = num.toString()
// console.log( num);

// let num = [1, 2, 3]
// console.log(num.map(num=>num.toString()));

// both method are also work here

//  q7. ["Rahul", "Amit"]  add mr before name

// let addmr = ["Rahul", "Amit"]
// console.log(addmr.map(addmr=>`mr ${addmr}`)) //here i cheted cause i don't know how to add mr i used concat but this add in the last so i failed in this question

// q8. [2, 3, 4]  square the number 

// let square = [2, 3, 4]
// console.log(square.map(square=>square**2));


//  q9. [5, 12, 8] check boolean

// let chk = [5, 12, 8];
// let booleanchk = chk.map(chk=>{
//   if (chk > 10) {
//     console.log(true);

//   } else {
//     console.log(false);   
//   }
// })

// finally i did it in this question i almost spend 10+ min but finally

// ======================================================================

// now we are moving to filter 

// const a = [1, 2, 3, 4, 5, 6, 7]
//  a1 = a.filter(a=> a > 5)
//  console.log(a1);



// let users = [
//   { name: "piyush", age: 18 },
//   { name: "amit", age: 17 },
//   { name: "shivham", age: 23 }
// ];

// let adult = users.filter(users=> users.age >= 18)

// console.log(adult);


// FILTER PRACTICE SET (No Easy Ones)

// q1. Get only odd numbers [1,2,3,4,5,6]
// let num = [1,2,3,4,5,6];
// let oddnum = num.filter(num => num % 2)
// console.log(oddnum);

// q2. get only greter than 100 [50, 200, 150, 20, 300]
// let num = [50, 200, 150, 20, 300]
// console.log(num.filter(num=> num>100));

// q3. ["hi", "", "hello", "", "bye"] remove empty String

// let empty = ["hi", "", "hello", "", "bye"]
// console.log(empty.filter(empty=> empty.slice("")));

// q4. Get users older than 21 

// let users =  [
//   {name: "A", age: 18},
//   {name: "B", age: 25},
//   {name: "C", age: 30}
// ]

// console.log(users.filter(users=> users.age > 21))

// q5. get product chepar then 1000

// let product =[
//   {name: "Phone", price: 10000},
//   {name: "Mouse", price: 500},
//   {name: "Keyboard", price: 800}
// ]

// console.log(product.filter(product=> product.price < 1000));

// q6. get words longer than 4 letter

// let words = ["cat", "banana", "dog", "elephant"];
// console.log(words.filter(words=> words.length >= 4));

// q7. remove boplean value

//  let falsy = [0, 1, false, 2, "", 3]
//  let remove1 = falsy.filter(Boolean)
//  console.log(remove1);

// q8. Get even numbers and multiply them by 2 

// let e = [1, 2, 3, 4, 5, 6]
// console.log(e.filter(e=> e % 2 === 0));
// console.log(e.map(e=> e * 2));

// let numbers = [100, 250, 400, 50];

// console.log(numbers.find(numbers=> numbers<200));


// // bro i tried but i didn't solve it sorrybro
// const a = [1, 2, 3, 4, 5,]

// const red = (a, b)=>{
//     return a + b
// }
// console.log(a.reduce(red));


// ==========================================

// arrays are Complted

// question set by codewithharry\

// 1.
// let num = [1, 2, 3, 4, 5, 6]
// let users = []

// let inp = users.push(num);
//  console.log(inp);
//  console.log(users);
 


