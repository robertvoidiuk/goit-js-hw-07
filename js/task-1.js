// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// - порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item;
// - для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

for (let i = 0; i < categoryItems.length; i++) {
  const categoryItem = categoryItems[i];
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('ul > li');
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
}
