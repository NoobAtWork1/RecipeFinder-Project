import React from "react";

const foodItems = ({ recipe, itemNames, countCheck }) => {
  const recieveItems = () => {
    const item1 = [];

    for (let i = 1; i <= 20; ++i) {
      let old = JSON.stringify(recipe.recipe[`${itemNames[i - 1]}`]);
      old = old.substr(1, old.length - 2);
      const count = JSON.stringify(recipe.recipe[`${countCheck[i - 1]}`]);
      console.log(typeof old, old);

      old.length !== 0 &&
        old !== "ul" &&
        item1.push(
          <li>
            {old} --- {count}
          </li>
        );
    }
    return item1;
  };

  return <ul>{recieveItems()}</ul>;
};

export default foodItems;
