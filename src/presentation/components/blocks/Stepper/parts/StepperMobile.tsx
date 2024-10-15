import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export const StepperMobile: FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="d-flex align-items-center gap-16">
      <IoChevronBackCircleOutline
        onClick={goBack}
        className="stepper-mobile__icon"
      />
      <span className="stepper-mobile__text">PASO 1 DE 2</span>
      <div className="stepper-mobile__progress" />
    </div>
  );
};
