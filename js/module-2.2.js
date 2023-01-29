function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");

  return words.length * pricePerWord;
}



function slugify(title) {
  const normalizedTitle = title.toLowerCase();

  const words = normalizedTitle.split(" ");

  const slug = words.join("-");

  // const slug = title.toLowerCase().split(' ').join('-');

  return slug;
}


function calculateTotal(number) {

let sum = 0;
  for (let i = 0; i <= number; i += 1) {

      sum += i 
  }

  return sum
}


const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { 
  const fruit = fruits[i]; 
  console.log(fruit);
}


