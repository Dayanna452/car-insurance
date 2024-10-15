import RimacLogo from "@/assets/images/rimac-logo.svg";
import { Telephone } from "../../icons/Telephone";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${className ? className : ""} header__container`}>
      <div className="container py-14 d-flex justify-content-between align-items-center">
        <img
          className="header__logo"
          src={RimacLogo}
          alt="rimac logo"
          height={16}
          width={92}
        />
        <div className="contact d-flex align-items-center gap-16">
          <h2 className="contact__title">¿Tienes alguna duda?</h2>
          <div className="telephone d-inline-flex align-items-center gap-4">
            <i className="telephone__icon d-inline-flex align-items-center">
              <Telephone />
            </i>
            <h5 className="telephone__text telephone_mobile">Llámanos</h5>
            <h5 className="telephone__text telephone_desktop">(01) 411 6001</h5>
          </div>
        </div>
      </div>
    </header>
  );
};
