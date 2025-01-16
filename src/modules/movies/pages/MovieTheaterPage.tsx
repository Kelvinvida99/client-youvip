import { useEffect } from "react";
import { getEnvVariables } from "../../../shared/utils";
import { MovieTheaterLayout } from "../../../shared/layouts";
import "./styles/MovieTheaterPage.css";
import "./styles/VoomlyEmbed.css";
import { Navbar } from "../../../shared/components/Navbar";

const { VITE_SECRET_VOOMLY } = getEnvVariables();

export const MovieTheaterPage = () => {
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
          <img
            src="https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
            alt="post"
          />
        </div>
      </section>
      <section className="movie-section">
        <div className="movie-container">
          <div
            className="voomly-embed"
            data-id="Bo3sXsozPj1gOi1gb1NZi4huAWxmImDDlB2JFWYSYNEmZgBer"
            data-ratio="1.777778"
            data-type="v"
            data-skin-color="#008EFF"
            data-shadow=""
          ></div>
        </div>
      </section>
      <section className="movie-description-section">
        <div className="description-container">
          <h3>Description:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            consectetur magnam vero minima error doloribus deleniti similique
            harum, pariatur ducimus, quaerat aut eius distinctio et, commodi ab
            animi itaque id!
          </p>
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
