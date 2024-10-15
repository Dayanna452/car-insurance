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
        <section className="quotation-layout__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, animi accusantium. Quae excepturi quam incidunt aliquam soluta, necessitatibus sequi eum, repellendus eligendi fuga officia eos enim ad error iure dignissimos!</section>
      </main>
    </div>
  );
};
