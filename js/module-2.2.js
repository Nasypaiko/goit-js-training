function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");

  return words.length * pricePerWord;
}



function slugify(title) {
  const normalizedTitle = title.toLowerCase();

  const words = normalizedTitle.split(" ");

  const slug = words.join("-");
}
