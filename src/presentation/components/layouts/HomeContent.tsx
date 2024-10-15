import { Badge } from "../blocks/Badge";
import { Header } from "../contents/Header";
//import { Footer } from "../contents/Footer";
import { HomeForm } from "../contents/HomeForm";
import HomePhoto from "../../../assets/images/home-photo.svg";

export const HomeContent = () => {
  return (
    <>
      <Header className="header__container-home" />
      <div className="home">
        <main className="row">
          <section className="home-info_mobile">
            <div className="pl-32 col-8">
              <h2 className="home__title">¡NUEVO!</h2>
              <h2 className="3">Seguro Vehicular Tracking</h2>
              <p className="home__title">
                Cuentanos donde le haras seguimiento a tu seguro
              </p>
              <div className="home__image-container">
                <img className="home__image" src={HomePhoto} alt="Home photo" />
              </div>
            </div>
          </section>
        </main>

        {/* <section className="col-12 col-md-6 row home-first__section">
            <div className="row align-items-center pl-32 home-container">
              <div className="home-info_mobile col-12">
                <h2 className="home__title">¡NUEVO!</h2>
                <h2 className="3">Seguro Vehicular Tracking</h2>
                <p className="home__title">
                  Cuentanos donde le haras seguimiento a tu seguro
                </p>
              </div>
             
            </div>
          </section>
          <section className="col-12 col-md-6 px-32">
            <div className="home-info gap-16 col-6 col-md-12">
              <Badge className="badge_gradient" text="Seguro Salud Flexible" />
              <p className="home__title">Creado para ti y tu familia</p>
              <span>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </span>
            </div>
            <HomeForm />
          </section> */}
      </div>
    </>
  );
};
