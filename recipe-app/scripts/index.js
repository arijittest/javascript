
let recipes=getRecipeArray();

renderRecipes(recipes,filterText);

document.querySelector('#searchText').addEventListener('input',(e)=>{

    filterText.searchText=e.target.value;
    renderRecipes(recipes,filterText);

})

document.querySelector('#add-recipe').addEventListener('click',(e)=>{

    //location.assign('/recipe.html');

    recipes.push({
        title: 'This is a dummy recipe added',
        summary: 'Dummy ingredients'
    })

    saveRecipes(recipes);
    renderRecipes(recipes,filterText);

})






//const recipesStorage = JSON.stringify(recipes);

//localStorage.setItem('recipes',recipesStorage);


//console.log(recipeString);

