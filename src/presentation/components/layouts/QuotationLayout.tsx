import { FC } from "react";

import { Header } from "../contents/Header";
import { Stepper } from "../blocks/Stepper";
import { StepperMobile } from "../blocks/Stepper/parts/StepperMobile";

const steps = [
  { title: "Datos del auto", active: true },
  { title: "Arma tu plan", active: false },
];

export const QuotationLayout: FC = () => {
  return (
    <div className="template">
      <Header />
      <main className="quotation-layout">
        <StepperMobile />
        <section className="quotation-layout__sidebar">
          <Stepper steps={steps} />
        </section>
        <section className="quotation-layout__content">2</section>
      </main>
    </div>
  );
};
