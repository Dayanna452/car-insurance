import { FC } from "react";

interface SteperProps {
  steps: { title: string; active: boolean }[];
}

export const Stepper: FC<SteperProps> = ({ steps }) => {
  return (
    <div className="d-flex flex-column gap-48">
      {steps.map((step, index) => (
        <div
          key={`stepper-${index}`}
          className="stepper-container inline-flex-center gap-16"
          data-active={step.active}
        >
          <div className="stepper-container__number inline-flex-center">
            {index + 1}
          </div>
          <span className="stepper-container__text">{step.title}</span>
        </div>
      ))}
    </div>
  );
};
