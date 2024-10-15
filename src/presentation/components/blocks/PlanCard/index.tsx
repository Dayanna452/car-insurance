import { FC, useMemo } from "react";
import { Button } from "../Button";
import { HomeLight } from "../../icons/HomeLight";

interface PlanCardProps {
  title: string;
  price: number;
  discount?: boolean;
  descriptions: string[];
  handleSelectPlan: () => void;
}

export const PlanCard: FC<PlanCardProps> = ({
  title,
  price,
  discount,
  descriptions,
  handleSelectPlan,
}) => {
  const newPrice = useMemo(() => price - price * 0.05, [price]);

  return (
    <div className="plan-card d-flex flex-column">
      <div className="plan-card__header">
        <h3 className="header__title">{title}</h3>
        <i className="header__icon">
          <HomeLight />
        </i>
      </div>
      <h6 className="subheader__text">COSTO DEL PLAN</h6>
      {discount ? (
        <span className="subheader__discount my-4">${price} antes</span>
      ) : null}
      <b className="subheader__price">${discount ? newPrice : price} al mes</b>
      <hr className="plan-card__divider" />
      <ul className="plan-card__descriptions d-flex flex-column gap-24">
        {descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        className="mt-auto"
        onClick={handleSelectPlan}
      >
        Seleccionar Plan
      </Button>
    </div>
  );
};
