// 20. In the following shopping cart add, remove, edit items

// add Meat
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add sugar
shoppingCart.push("Sugar");
console.log(shoppingCart);

//remove honey

const index = shoppingCart.indexOf("Honey");
console.log(index);
if (index > -1) {
  shoppingCart.splice(index, 1);
}

console.log(shoppingCart)

// modify tea to green tea

shoppingCart[3] = 'Green Tea';
console.log(shoppingCart)