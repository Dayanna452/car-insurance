import { Badge } from "../blocks/Badge";
import { Header } from "../contents/Header";
import { Footer } from "../contents/Footer";
import { Wrapper } from "../contents/Wrapper";
import { HomeForm } from "../contents/HomeForm";
import HomePhoto from "../../../assets/images/home-photo.svg";

export const HomeContent = () => {
  return (
    <Wrapper blur>
      <Header />
      <div className="container wrapper-container__content">
        <main className="row">
          <section className="col-12 col-md-6">
            <div className="row align-items-center home-container">
              <div className="home-info_mobile col-6 col-md-12">
                <Badge
                  className="badge_gradient"
                  text="Seguro Salud Flexible"
                />
                <p className="home__title">Creado para ti y tu familia</p>
              </div>
              <div className="col-6 col-md-12">
                <div className="home__image-container">
                  <img
                    className="home__image"
                    src={HomePhoto}
                    alt="Home photo"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="col-12 col-md-6 home-info__form">
            <div className="home-info gap-16 col-6 col-md-12">
              <Badge className="badge_gradient" text="Seguro Salud Flexible" />
              <p className="home__title">Creado para ti y tu familia</p>
              <span>
                Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </span>
            </div>
            <HomeForm />
          </section>
        </main>
      </div>
      <Footer />
    </Wrapper>
  );
};
