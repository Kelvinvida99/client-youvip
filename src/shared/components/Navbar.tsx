import { useState } from "react";
import "./styles/Navbar.css";
import { useDispatch } from "react-redux";
import { onLogout } from "../../modules/auth/authSlice";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();

  return (
    <section className="nav-section">
      <nav className="navbar">
        <div className="search-container">
          <i className="bi bi-search"></i>
          <input placeholder="Search" type="text" />
        </div>

        <ul className="navbar-container">
          <li className="active">For you</li>
          <li>Movies</li>
          <li>Series</li>
          <li>TATA IPL</li>
          <li>New Release</li>
        </ul>

        <div className="notification-container">
          <i className="bi bi-bell"></i>
        </div>

        <div onClick={toggleDropdown} className="user-container">
          <div className="user">
            <img src="https://imageplaceholder.net/100" alt="user-image" />
            <p>Annie John</p>
          </div>
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </nav>

      {isOpen && (
        <div className="user-menu">
          <div className="user-menu-btn">
            <button type="button">Profile</button>
            <button type="button">Configurate</button>
            <button onClick={() => dispatch(onLogout())} type="button">
              Logout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
