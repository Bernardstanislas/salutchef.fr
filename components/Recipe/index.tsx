import * as React from "react";
import Duration from "./Duration";
import Ingredients from "./Ingedients";
import Steps from "./Steps";

interface IRecipeProps {}

const Recipe: React.FunctionComponent<IRecipeProps> = (props) => {
  return (
    <>
      <img src="/dogs.jpg" alt="Dogs" className="border-b border-current" />
      <div className="h-16 flex items-center justify-center border-b border-current">
        <h1 className="text-xl font-bold">Macarons</h1>
      </div>
      <Duration />
      <Ingredients />
      <Steps />
    </>
  );
};

export default Recipe;
