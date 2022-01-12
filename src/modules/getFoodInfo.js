const renderMeal = (meal) => {
    let arrayKeys = [
        'strIngredient1',
        'strIngredient2',
        'strIngredient3',
        'strIngredient4',
        'strIngredient5',
        'strIngredient6',
        'strIngredient7',
        'strIngredient8',
        'strIngredient9',
        'strIngredient10',
        'strIngredient11',
        'strIngredient12',
        'strIngredient13',
        'strIngredient14',
        'strIngredient15',
        'strIngredient16',
        'strIngredient17',
        'strIngredient18',
        'strIngredient19',
        'strIngredient20'
    ]
    let rows = [];
    arrayKeys.forEach((value) => {
        if (meal[value] !== "") {
            rows.push(`<li>${meal[value]}</li>`)
        }
    })
    return rows.join('');
}
const renderImage = ({strMeal, strMealThumb}) => {
    return `<img alt=${strMeal} src=${strMealThumb} class="img-fluid rounded-start">`;
}

const render = (meal) => {
    let tableTemplate = `
    <div class="card mb-3 mx-auto shadow-lg col" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                ${renderImage({strMeal: meal.strMeal, strMealThumb: meal.strMealThumb})}
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text"><ol>${renderMeal(meal)}</ol></p>
                    <p class="card-text"><small class="text-muted">${meal.strTags}</small></p>
                </div>
            </div>
        </div>
    </div>`;
    let resultsDiv = document.getElementById('ingredients');
    resultsDiv.innerHTML = tableTemplate;
};

export default render;