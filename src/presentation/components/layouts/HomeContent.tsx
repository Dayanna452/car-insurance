//Components
import { Header } from "../contents/Header";
import { HomeForm } from "../contents/HomeForm";
//Assets
import HomePhoto from "@/assets/images/home-photo.svg";
import HomePhoto2 from "@/assets/images/home-photo-2.svg";

export const HomeContent = () => {
  return (
    <>
      <Header className="header__container-home border-none" />
      <div className="home">
        <main className="row col-12">
          <section className="home-info col-12 col-md-6 col-lg-5 col-xl-4">
            <div className="col-7 home-container">
              <div className="home__instructions">
                <h2 className="home__title">¡NUEVO!</h2>
                <h2 className="home__insurance">
                  Seguro Vehicular <span>Tracking</span>
                </h2>
                <p className="home__subtitle">
                  Cuentanos donde le haras seguimiento a tu seguro
                </p>
                <span className="copyright">
                  © 2020 RIMAC Seguros y Reaseguros.
                </span>
              </div>
              <div className="home__image-container">
                <img
                  className="home__image image-desktop"
                  src={HomePhoto2}
                  alt="Home photo"
                />
                <img
                  className="home__image image-mobile"
                  src={HomePhoto}
                  alt="Home photo"
                />
              </div>
            </div>
          </section>
          <section className="home__form-section col-12 col-md-6 col-lg-7 col-xl-8 mt-40">
            <HomeForm />
          </section>
        </main>
      </div>
    </>
  );
};
