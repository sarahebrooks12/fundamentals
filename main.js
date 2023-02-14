const myName = "Sarah";
let myHobbies = "Reading";
let myAge = 33;
let likesToTravel = true;
let aNumber = 12;
myAge = 34;
// myName = "Elizabeth";
let tacoIngredients = ["Cheese", "Sour Cream", "Salsa", "Lettuce", "Fish"]

let tacoDairy = "Cheese"
let tacoOtherDairy = "Sour Cream"
let tacoTopping = "Salsa"
let tacoVeggie = "Lettuce"
let tacoProtein = "Fish"

// console.log(tacoIngredients[2])

let taco = {
    protein: "Fish",
    dairy: ["Cheese", "Sour Cream"],
    topping: "Salsa",
    veggie: "Lettuce"
}

// console.log(taco.dairy[0], taco.dairy[1])

for (let singleIngredient = 0; singleIngredient < tacoIngredients.length; singleIngredient++)
{
    console.log(tacoIngredients[singleIngredient])
}
