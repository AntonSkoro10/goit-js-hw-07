const categoriesList = document.getElementById('categories')
const categoriesItem = document.querySelectorAll('li.item')

console.log(`Number of categories: ${categoriesItem.length}`)

categoriesItem.forEach(item => {
    const categoryName = item.querySelector('h2').textContent
    const categoryItemsCount = item.querySelectorAll('li').length
    console.log(`Category: ${categoryName}, Elements: ${categoryItemsCount}`)
})