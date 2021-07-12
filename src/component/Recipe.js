import React from "react";
import Ingredient from "./foodItems";
import "./Recipe.css";
//import Axios from 'axios';
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const Recipe = (recipe) => {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strSource,
  } = recipe.recipe;
  console.log(recipe);

  let itemNames = [];
  let countCheck = [];

  for (let i = 1; i <= 20; ++i) {
    itemNames[i - 1] = `strIngredient${i}`;
    countCheck[i - 1] = `strMeasure${i}`;
  }

  return (
    <div className="process">
      <div className="head">
        {/* <h1 >{strMeal}<span className="like"><button aria-hidden="true" className="like-btn"><FavoriteBorderOutlinedIcon/></button>
						 </span></h1> */}
        <h1>
          <a href={strSource} target="_blank" rel="noreferrer">
            {strMeal}
            <span className="like">
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorderOutlinedIcon fontSize="large" />}
                    checkedIcon={<FavoriteBorder fontSize="large" />}
                    name="checkedH"
                  />
                }
              />
            </span>
          </a>
        </h1>
      </div>
      <img src={strMealThumb} alt={strMealThumb} />
      <div className="group">
        <h3>
          Category of meal : {strCategory} <br /> Type of the meal : {strArea}
        </h3>
      </div>
      <h3 className="details1">Ingredients :</h3>
      <div class="details">
        <Ingredient
          recipe={recipe}
          itemNames={itemNames}
          countCheck={countCheck}
        />
      </div>
      <h3 className="types">Recipe : </h3>
      <div className="guidelines">
        <h3>{strInstructions}</h3>
      </div>
    </div>
  );
};

export default Recipe;
