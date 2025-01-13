export const MovieInfoCard = () => {
  return (
    <div className="movie-banner-container">
      <div className="movie-info-container">
        <div className="info-container">
          <h3>The Dark Knight</h3>
          <p className="duration-info">2008 | 3h 312min | 5 Languages</p>
          <p className="text-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit ipsam
            id nam eius maxime tempora delectus ear.
          </p>
          <p className="gender-info">Action | Drama | Comic</p>
          <button type="button">
            <i className="bi bi-play-fill"></i> Play now
          </button>
        </div>
      </div>
    </div>
  );
};
