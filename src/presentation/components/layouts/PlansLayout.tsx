import { FC } from "react";

import { Header } from "../contents/Header";
import { StepperPlans } from "../contents/StepperPlans";
import { PlanOptions } from "../contents/PlanOptions";

export const PlansLayout: FC = () => {
  const steps = [
    { title: "Planes y coberturas", active: true },
    { title: "Resumen", active: false },
  ];

  return (
    <div className="template">
      <Header />
      <main>
        <StepperPlans steps={steps} />
        <PlanOptions />
      </main>
    </div>
  );
};
