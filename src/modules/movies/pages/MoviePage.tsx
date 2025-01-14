import { MovieCard, MovieInfoCard, Navbar } from "../../../shared/components";
import { HomeLayout } from "../../../shared/layouts";
import "./styles/MoviePage.css";
import movies from "../../../data/data.json";

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
          <MovieInfoCard />
        </section>
        <section className="movies-section">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </section>
      </main>
    </HomeLayout>
  );
};
