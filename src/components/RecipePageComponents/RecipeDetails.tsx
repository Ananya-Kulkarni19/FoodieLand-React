import React from "react";
import "../../styles/RecipePageComponents/RecipeDetails.css";
import CookingStep from "./CookingStep";

interface OtherRecipe {
  image: string;
  title: string;
  author: string;
}

const RecipeDetails: React.FC = () => {
  const otherRecipes: OtherRecipe[] = [
    {
      image: "images/recipes/burger.png",
      title: "Chicken Meatball with Creamy Chees...",
      author: "By Andreas Paula",
    },
  ];

  return (
    <div className="RecipeDetails-recipe-details">
      <div className="RecipeDetails-ingredients">
        <h2>Ingredients</h2>
        <h3></h3>
        <ul>
          {[...Array(4)].map((_, index) => (
            <li key={`main-${index}`}></li>
          ))}
        </ul>
        <h3></h3>
        <ul>
          {[...Array(3)].map((_, index) => (
            <li key={`sauce-${index}`}></li>
          ))}
        </ul>

        <CookingStep />
      </div>
      <div className="RecipeDetails-other-recipes">
        <h2>Other Recipe</h2>
        {otherRecipes.map((recipe, index) => (
          <div key={index} className="RecipeDetails-recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <div>
              <h4>{recipe.title}</h4>
              <p>{recipe.author}</p>
            </div>
          </div>
        ))}
        <div>
          <img
            className="RecipeDetails-healthy-food-ad"
            src="images/Ads.png"
            alt="Healthy food"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
