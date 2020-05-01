import * as React from "react";

interface IIngredientProps {
  name: string;
  quantifier?: string;
}

const Ingredient: React.FunctionComponent<IIngredientProps> = (props) => {
  return (
    <div className="p-2 border-b border-current">
      <span>
        <strong>
          {props.name}
          {props.quantifier && " :"}
        </strong>{" "}
        {props.quantifier}
      </span>
    </div>
  );
};

export default Ingredient;
