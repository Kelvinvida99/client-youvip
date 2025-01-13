import { useEffect } from "react";
import './styles/SalaMoviePage.css';

export const SalaMoviePage = () => {
  useEffect(() => {
    // Crear y añadir el script dinámicamente
    const script = document.createElement("script");
    script.src = "https://embed.voomly.com/embed/embed-build.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpieza del script al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="movie-container">
      <div
        className="voomly-embed"
        data-id="Bo3sXsozPj1gOi1gb1NZi4huAWxmImDDlB2JFWYSYNEmZgBer"
        data-ratio="1.777778"
        data-type="v"
        data-skin-color="#008EFF"
        data-shadow=""
        style={{
          width: "100%",
          aspectRatio: "1.77778 / 1",
          background:
            "linear-gradient(45deg, rgb(142, 150, 164) 0%, rgb(201, 208, 222) 100%)",
          borderRadius: "10px",
        }}
      ></div>
    </div>
  );
};
