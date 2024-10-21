const categoriesElement = document.querySelector(".categories")
const categoriesArray = document.querySelectorAll(".item")

console.log(`Number of categories: ${categoriesArray.length}`)

categoriesArray.forEach(cat => {
    const catName = cat.querySelector('h2')
    console.log(`Category: ${catName.textContent}`)
    const catSize = cat.querySelectorAll('li').length
    console.log(`Elements: ${catSize}`)
})