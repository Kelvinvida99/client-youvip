import { useState } from "react";
import "./styles/Sidebar.css";
import { Navbar } from "./Navbar";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="sidebar-main">
      <section className="navbar">
        <div className="navbar-container">
          <i className="bi bi-list" onClick={toggleMenu}></i>
          <p>YouVip</p>
        </div>
      </section>

      <section className={` ${isOpen ? 'sidebar' : ''}`}>
        <div className="nav-container">
          <Navbar />
          <i className="bi bi-arrow-left-circle-fill" onClick={toggleMenu}></i>
        </div>
      </section>
    </main>
  );
};
