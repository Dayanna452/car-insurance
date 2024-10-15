//Components
import { Header } from "../contents/Header";
import { HomeForm } from "../contents/HomeForm";
//Assets
import HomePhoto from "@/assets/images/home-photo.svg";

export const HomeContent = () => {
  return (
    <>
      <Header className="header__container-home" />
      <div className="home">
        <main className="row col-12">
          <section className="home-info_mobile">
            <div className="pl-32 col-8">
              <h2 className="home__title">¡NUEVO!</h2>
              <h2 className="home__insurance">
                Seguro Vehicular <span>Tracking</span>
              </h2>
              <p className="home__subtitle">
                Cuentanos donde le haras seguimiento a tu seguro
              </p>
              <div className="home__image-container">
                <img className="home__image" src={HomePhoto} alt="Home photo" />
              </div>
            </div>
          </section>
          <section className="col-12 mt-40">
            <HomeForm />
          </section>
        </main>
      </div>
    </>
  );
};
