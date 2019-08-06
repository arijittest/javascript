const titleElement=document.querySelector('#recipe-title');
const summaryElement=document.querySelector('#recipe-Summary');
const addButtonElement = document.querySelector('#add-ingredient');
const ingredientElement = document.querySelector('#ingredient-name');
const divIngredientElement = document.querySelector('#ingredients');

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

// buttonElement.addEventListener('click',(e)=>{
//     //recipe.title=e.target.value;
//     saveRecipes(recipes);
//     location.assign('/index.html');
// })
 
addButtonElement.addEventListener('click',(e)=>{

    //console.log(ingredientElement.value);
    const inputElem = document.createElement('input');
    const spanElem = document.createElement('span');
    const buttonElem = document.createElement('button');

    inputElem.setAttribute("type","checkbox");
    spanElem.textContent=ingredientElement.value;
    buttonElem.textContent='x';

    divIngredientElement.appendChild(inputElem);
    divIngredientElement.appendChild(spanElem);
    divIngredientElement.appendChild(buttonElem);

})