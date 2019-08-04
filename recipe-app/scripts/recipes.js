let filterText = {
    searchText: '',
};


const getRecipeArray = ()=>{
    
    const recipeString=localStorage.getItem('recipes');
    const recipes=JSON.parse(recipeString);

    if(!recipes){
        return []
    }else{
        return recipes;
    }

}

const generateDOM = (recipe)=>{
    let newRecipeElem=document.createElement('textarea');
   
    newRecipeElem.setAttribute("columns","5");
    newRecipeElem.setAttribute("rows","6");
    newRecipeElem.setAttribute("class","recipeClass");
    newRecipeElem.value=recipe.title+"\n"+recipe.summary;

    newRecipeElem.addEventListener('click',(e)=>{

        //console.log(recipe);
        location.assign(`/recipe.html#${recipe.id}`);

    })

    return newRecipeElem;

}

const renderRecipes=(recipes,filterText)=>{

    const filteredRecipes=recipes.filter( recipe => recipe.title.toLowerCase().includes(filterText.searchText.toLowerCase()) )
    const dispRecipeElem=document.querySelector('#display-recipe');

    dispRecipeElem.innerHTML='';

    for(let recipe of filteredRecipes){

        let brElem=document.createElement('br');

    
        let recipeDom=generateDOM(recipe);
    
        dispRecipeElem.appendChild(recipeDom);
        dispRecipeElem.appendChild(brElem);
    
    }

}

const saveRecipes = (recipes)=>{

    const recipesStorage = JSON.stringify(recipes);
    localStorage.setItem('recipes',recipesStorage);

}