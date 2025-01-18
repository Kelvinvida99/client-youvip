import { useEffect } from "react";
import { getEnvVariables } from "../../../shared/utils";
import { MovieTheaterLayout } from "../../../shared/layouts";
import "./styles/MovieTheaterPage.css";
import "./styles/VoomlyEmbed.css";
import { Navbar } from "../../../shared/components/Navbar";
import { useLocation } from "react-router-dom";

const { VITE_SECRET_VOOMLY } = getEnvVariables();

export const MovieTheaterPage = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  useEffect(() => {
    if (!VITE_SECRET_VOOMLY) {
      console.error("SECRET_VOOMLY no está definida");
      return;
    }

    const script = document.createElement("script");
    script.src = VITE_SECRET_VOOMLY;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MovieTheaterLayout>
      <nav className="navbar-container">
        <Navbar />
      </nav>
      <section className="movie-post-section">
        <div className="movie-post">
          <img src={movie.posterUrl} alt="post" />
        </div>
      </section>
      <section className="movie-section">
        <div
          className="movie-container"
          dangerouslySetInnerHTML={{ __html: movie.movieUrl }}
        ></div>
      </section>
      <section className="movie-description-section">
        <div className="title-container">
          <div className="title-info-container">
            <h3>{movie.title}</h3>
            <span>{movie.rating}</span>
          </div>
          <p>Duration: {movie.runtime} min</p>
          <p>
            {movie.genre?.map((genders: string) => (
              <span key={movie.id}>{genders} </span>
            ))}
          </p>
        </div>
        <div className="description-container">
          <h3>Description:</h3>
          <p>{movie.description}</p>
        </div>
        <div className="actors-container">
            <h3>Actors:</h3>
            <ul>{movie.cast?.map((actor: string) => (<li key={movie.id}>{actor}</li>))}</ul>
        </div>
        <div className="directors-container">
            <h3>Directors:</h3>
            <ul>{movie.directors?.map((director: string) => (<li key={movie.id}>{director}</li>))}</ul>
        </div>
      </section>
      <section className="movie-list-section">
        <div className="list-container"></div>
      </section>
      <section className="abs-section">
        <div className="abs-container"></div>
      </section>
    </MovieTheaterLayout>
  );
};
