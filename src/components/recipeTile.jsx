import React from "react";

function RecipeTile({recipe}) {
  return (
    <div className="recipeTile">
      <h1>{recipe["recipe"]["label"]}</h1>
      <img
        src={recipe["recipe"]["image"]}
        alt={`logo-${recipe["recipe"]["label"]}`}
      />
    </div>
  );
}

export default RecipeTile;
