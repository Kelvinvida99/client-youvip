import { ChildrenProp } from "../../types";
import "./styles/MovieTheaterLayout.css";

export const MovieTheaterLayout = ({ children }: ChildrenProp) => {
  return (
    <div className="movie-theater-container">
      <div className="filter-movie-theater">{children}</div>
    </div>
  );
};
