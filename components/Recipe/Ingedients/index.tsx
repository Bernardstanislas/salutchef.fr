import * as React from "react";
import Ingredient from "./Ingredient";

interface IIngredientsProps {}

const Ingredients: React.FunctionComponent<IIngredientsProps> = (props) => {
  return (
    <>
      <div className="h-16 flex items-center justify-center border-b border-current">
        <h2 className="text-lg font-bold">Ingrédients</h2>
      </div>
      <Ingredient name="Poudre d'amande fine" quantifier="80g" />
      <Ingredient name="Sucre glace" quantifier="80g" />
      <Ingredient name="Sucre blanc" quantifier="90g" />
      <Ingredient name="Blancs d'oeufs" quantifier="2" />
    </>
  );
};

export default Ingredients;
