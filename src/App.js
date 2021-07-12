import React, { useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [query, setQuery] = useState("");
  const [Recipe1, setRecipe1] = useState([]);

  const link = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

  const recieveData = async () => {
    try {
      const outcome = await Axios.get(link);
      /*  if(outcome.data.meals===null) */
      setRecipe1(outcome.data.meals);

      console.log(outcome.data);
      setQuery("");
    } catch (error) {
      console.error();
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    recieveData();
  };
  const Change = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="Head1">
      <style>{"body { background-color: rgb(173, 230, 227); }"}</style>
      <form onSubmit={Submit}>
        <div className="Head2">
          <h1 class="edit1">Recipe Finder</h1> <br />
        </div>
        <input
          class="edit"
          type="text"
          placeholder="Enter the Name of the Dish "
          autoComplete="off"
          onChange={Change}
          value={query}
        />

        <input class="button" type="submit" value="Get Recipe" />
      </form>
      <h2>
        {Recipe1 !== null
          ? "Type a Dish Name to Search for it's Ingredient"
          : "No Data Found"}
      </h2>

      <div className="Recipes">
        {Recipe1 !== null &&
          Recipe1?.map((recipe) => <Recipe key={uuidv4} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
