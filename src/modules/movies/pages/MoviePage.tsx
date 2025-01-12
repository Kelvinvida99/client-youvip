import { Navbar } from "../../../shared/components";
import { HomeLayout } from "../../../shared/layouts";
import "./styles/MoviePage.css";

export const MoviePage = () => {
  return (
    <HomeLayout>
      <main className="main-home-container">
        <section className="navbar-section">
          <Navbar />
        </section>
        <section className="abs-section">
          <div className="abs"></div>
        </section>
        <section className="banner-section">
          <div className="movie-banner-container">
            <div className="movie-info-container">
              <div className="info-container">
                <h3>The Dark Knight</h3>
                <p className="duration-info">2008 | 3h 312min | 5 Languages</p>
                <p className="text-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                  ipsam id nam eius maxime tempora delectus ear.
                </p>
                <p className="gender-info">Action | Drama | Comic</p>
                <button type="button">
                  <i className="bi bi-play-fill"></i> Play now
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="movies-section">
          <div className="movie-card">
            <div className="card-info">
              <h4>El Hombre De Acero</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="btn-container">
                <a href="#">Learn more</a>
                <button type="button">
                  <i className="bi bi-play-fill"></i> Play
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </HomeLayout>
  );
};
