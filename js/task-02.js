const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const makeItemIngredients = ingredient => {
  return ingredient.map(ingred => {
    const itemIngredientsEl = document.createElement('li');
    itemIngredientsEl.textContent = ingred;
    itemIngredientsEl.classList.add('item');
    return itemIngredientsEl;
  });
};

const listIngredients = document.querySelector('#ingredients');
const itemElementsArray = makeItemIngredients(ingredients);
listIngredients.append(...itemElementsArray);

// New shcool

// const itemElementsArray = ingredients.map(ingredient => {
//   const itemIngredientsEl = document.createElement('li');
//   itemIngredientsEl.textContent = ingredient;
//   itemIngredientsEl.classList.add('item');
//   return itemIngredientsEl;
// });

// const listIngredients = document.querySelector('#ingredients');
// listIngredients.append(...itemElementsArray);

// Old shcool

// const itemElementsArray = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemIngredientsEl = document.createElement('li');
//   itemIngredientsEl.textContent = ingredients[i];
//   itemIngredientsEl.classList.add('item');

//   itemElementsArray.push(itemIngredientsEl);
// }

// const listIngredients = document.querySelector('#ingredients');
// listIngredients.append(...itemElementsArray);
