import * as React from "react";

interface IStepProps {
  number: number;
  text: string;
}

const Step: React.FunctionComponent<IStepProps> = (props) => {
  return (
    <div className="border-b border-current divide-x divide-current flex">
      <div className="w-12 flex items-center justify-center">
        <strong>{props.number}</strong>
      </div>
      <div className="flex-1 p-2">{props.text}</div>
    </div>
  );
};

export default Step;
