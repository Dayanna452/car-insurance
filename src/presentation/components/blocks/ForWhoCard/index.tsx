import { FC } from "react";
import { GiCircle } from "react-icons/gi";
import { FaCircleCheck } from "react-icons/fa6";

interface ForWhoProps {
  title: string;
  checked?: boolean;
  icon: JSX.Element;
  description: string;
  onChecked?: (checked?: boolean) => void;
}

export const ForWhoCard: FC<ForWhoProps> = ({
  icon,
  title,
  checked,
  description,
  onChecked,
}) => {
  return (
    <div
      className="forwho-card"
      data-checked={checked}
      onClick={() => onChecked?.(checked)}
    >
      <div className="d-flex justify-content-end">
        <i className="forwho-card-radio" data-checked={checked}>
          {checked ? <FaCircleCheck /> : <GiCircle />}
        </i>
      </div>
      <div className="forwho-card-content mb-8">
        <i className="forwho-card-content__icon">{icon}</i>
        <p className="forwho-card-content__title">{title}</p>
      </div>
      <p className="forwho-card__description">{description}</p>
    </div>
  );
};
