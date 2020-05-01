import * as React from "react";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="h-16 flex items-center justify-center border-b border-current fixed w-full bg-white">
      <div className="text-xl">
        <strong>🍥SALUTCHEF</strong>
      </div>
    </div>
  );
};

export default Header;
