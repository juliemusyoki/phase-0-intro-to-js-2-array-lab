let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = cats.slice(); // Create a shallow copy
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  const newCats = cats.slice(); // Create a shallow copy
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(); // Create a shallow copy
  newCats.pop();
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(); // Create a shallow copy
  newCats.shift();
  return newCats;
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};




  
