import * as React from "react";
import Step from "./Step";

interface IStepsProps {}

const Steps: React.FunctionComponent<IStepsProps> = (props) => {
  return (
    <>
      <div className="h-16 flex items-center justify-center border-b border-current">
        <h2 className="text-lg font-bold">Étapes</h2>
      </div>
      <Step
        number={1}
        text="Mettre le récipient pour monter les blancs au réfrigérateur, ainsi que le fouet"
      />
      <Step
        number={2}
        text="Commencer à monter les blancs en neige, avec le fouet électrique en vitesse lente (1/3 du max)"
      />
      <Step
        number={3}
        text="Lorsque la mousse apparaît, verser la moitié du sucre blanc, en pluie, tout en continuant à fouetter. Augmenter la vitesse du fouet aux 2/3 du max"
      />
      <Step
        number={4}
        text="Ajouter le colorant. Forcer sur la couleur, qui se ternit à la cuisson"
      />
      <Step number={5} text="Fouetter jusqu'à obtenir une belle meringue" />
      <Step
        number={6}
        text="Augmenter les vitesse du fouet au maximum. Verser l'autre moitié du sucre blanc, en pluie"
      />
      <Step
        number={7}
        text="Dans un autre récipient, tamiser la poudre d'amande avec le sucre glace"
      />
      <Step
        number={8}
        text="Verser progressivement ce mélange de poudre dans la meringue, en mélangeant doucement à la maryse"
      />
      <Step
        number={9}
        text='"Macaroner" la préparation à la maryse en effectuant des mouvements du haut vers le bas, de manière à former un ruban dense et ininterrompu'
      />
      <Step
        number={10}
        text="Mettre la préparation dans une poche à douille, et pocher les macarons"
      />
      <Step
        number={11}
        text="Laisser croûter 30 minutes, les macarons ne doivent plus coller au doigt"
      />
      <Step number={12} text="Cuire 14 minutes dans un four ventilé à 160°C" />
    </>
  );
};

export default Steps;
