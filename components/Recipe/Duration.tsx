import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHourglass } from "@fortawesome/free-regular-svg-icons";

interface IDurationProps {}

const Duration: React.FunctionComponent<IDurationProps> = (props) => {
  return (
    <div className="border-b border-current flex divide-x divide-current">
      <div className="flex flex-col flex-1 items-center py-4">
        <FontAwesomeIcon icon={faClock} className="h-8 mb-2" />
        <span>
          <strong>Préparation :</strong> 45 minutes
        </span>
      </div>
      <div className="flex flex-col flex-1 items-center py-4">
        <FontAwesomeIcon icon={faHourglass} className="h-8 mb-2" />
        <span>
          <strong>Durée totale :</strong> 2 jours
        </span>
      </div>
    </div>
  );
};

export default Duration;
