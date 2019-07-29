// Generate the DOM structure for a recipe
const generateRecipeDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the recipe title text
    if (recipe.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // // Setup the link
    // recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)
    // recipeEl.classList.add('list-item')

    // // Setup the status message
    // statusEl.textContent = generateLastEdited(note.updatedAt)
    // statusEl.classList.add('list-item__subtitle')
    // recipeEl.appendChild(statusEl)

    return recipeEl
}

const renderRecipes=(recipes,filters)=>{

    const recipeElements=document.querySelector('#display-recipe');
    const filteredRecipes = recipes.filter((recipe) => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    recipeElements.innerHTML='';
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach((recipe) => {
            const recipeEl = generateRecipeDOM(recipe)
            recipeEl.appendChild(recipeEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No recipe to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }


}