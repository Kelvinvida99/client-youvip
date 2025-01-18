import { Link } from "react-router-dom";
import { MovieCardProps } from "../../../types";

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

  return (
    <div
      className="movie-card"
      style={{
        background: `url(${movie.posterUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-info">
        <h4>{movie.title}</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="btn-container">
          <a href="#">Learn more</a>
          <Link className="link" to="/movie/theater" state={{ movie }}>
            <i className="bi bi-play-fill"></i> Play
          </Link>
        </div>
      </div>
    </div>
  );
};
