// function calculateEngravingPrice(message, pricePerWord) {
//   let words = message.split(" ");

//   return words.length * pricePerWord;
// }



// function slugify(title) {
//   const normalizedTitle = title.toLowerCase();

//   const words = normalizedTitle.split(" ");

//   const slug = words.join("-");

//   // const slug = title.toLowerCase().split(' ').join('-');

//   return slug;
// }


// function calculateTotal(number) {

// let sum = 0;
//   for (let i = 0; i <= number; i += 1) {

//       sum += i 
//   }

//   return sum
// }


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { 
//   const fruit = fruits[i]; 
//   console.log(fruit);
// }


// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach"
// fruits[3] = "banana"

// console.log(fruits)



// const fruits = ["apple", "peach", "pear", "banana", "plum"];

// const fruitsArrayLength = fruits.length

// console.log(fruitsArrayLength)


// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1
// const lastElement = fruits[lastElementIndex]

// console.log(lastElement)




// function getExtremeElements(array) {
//     const result = [];
//     result.push(array[0], array[array.length - 1]);
//     return result;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]))



// function makeArray(firstArray, secondArray, maxLength) {

// return firstArray.concat(secondArray).length > maxLength ?
//   firstArray.concat(secondArray).slice(0,maxLength) :
//   firstArray.concat(secondArray);

// }
  
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags.slice(0);
// const lastTag = apartment.tags.slice(2);

// console.log(apartment)




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key])
// }




// function add(...args) {
//   let sum = 0
//   for (const arg of args) {
//     sum += arg
//   }
//   return sum
// }

// ------ Сложение только тех чисел которые больше перового

// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > args[0])
//     total += arg;
//   }

//   return total;
// }



