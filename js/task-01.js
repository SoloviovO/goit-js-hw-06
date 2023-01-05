const listCategoriesEl = document.querySelector('#categories');
const itemCategoriesEl = listCategoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemCategoriesEl.length}`);

for (const element of itemCategoriesEl) {
  const titleCategoryEl = element.querySelector('h2');
  console.log(`Category: ${titleCategoryEl.textContent}`);

  const itemOfCategoryEl = element.querySelectorAll('li');
  console.log(`Elements: ${itemOfCategoryEl.length}`);
}
