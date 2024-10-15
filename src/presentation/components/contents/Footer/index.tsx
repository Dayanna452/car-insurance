import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <img
          src="/images/rimac-black-white.svg"
          alt="rimac-black-white"
          width={138}
          height={20}
          className="footer-content__logo"
        />
        <hr className="footer-content__divider" />
        <p className="footer-content__copyright">
          © 2023 RIMAC Seguros y Reaseguros.
        </p>
      </div>
    </div>
  );
};
