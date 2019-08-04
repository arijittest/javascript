const titleElement=document.querySelector('#recipe-title');
const summaryElement=document.querySelector('#recipe-Summary');
const buttonElement = document.querySelector('#add-recipe');

const recipeId=location.hash.substring(1);
const recipes=getRecipeArray();

const recipe=recipes.find((recipe) => recipe.id===recipeId );

if(recipe===undefined){
    location.assign('/index.html');
}

titleElement.value = recipe.title;
summaryElement.value = recipe.summary;

titleElement.addEventListener('input',(e)=>{
    recipe.title=e.target.value;
    saveRecipes(recipes);
})

summaryElement.addEventListener('input',(e)=>{
    recipe.summary=e.target.value;
    saveRecipes(recipes);
})

buttonElement.addEventListener('click',(e)=>{
    //recipe.title=e.target.value;
    saveRecipes(recipes);
    location.assign('/index.html');
})
 