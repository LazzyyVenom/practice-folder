// const batch1 = ["Piyush", "Rahul"];
// const batch2 = ["Amit", "Sumit"];

// const fullbatch = [...batch1, ...batch2, "new student"];

// console.log(fullbatch);


// const user = {
//     name: "Piyush",
//     college: "SNB Patna",
//     skills: "JS"
// };

// const updateuser = {
//    ...user, skills : "react"
// };

// console.log(updateuser);

// Spread operator ka use karke ek nayi array newCart banao jisme "Watch" add karo bina purani array ko chhede.
const cart = ["Laptop", "Mobile"];

const newcart = [...cart, "watch"]

console.log(newcart);


//customer object mein status: "VIP" add karo spread operator ka use karke.

const customer = {
    id: 101,
    city: "Patna"
};

const newcustomer = {
    ...customer, status : "VIP"
};

console.log(newcustomer)





// javascript has been completed