
let recipes=getRecipeArray();

renderRecipes(recipes,filterText);

document.querySelector('#searchText').addEventListener('input',(e)=>{

    filterText.searchText=e.target.value;
    renderRecipes(recipes,filterText);

})

document.querySelector('#add-recipe').addEventListener('click',(e)=>{

    const id=uuidv4();

    recipes.push({
        id: id,
        title: '',
        summary: ''
    })

    saveRecipes(recipes);
    renderRecipes(recipes,filterText);

    location.assign(`/recipe.html#${id}`);

})






//const recipesStorage = JSON.stringify(recipes);

//localStorage.setItem('recipes',recipesStorage);


//console.log(recipeString);

