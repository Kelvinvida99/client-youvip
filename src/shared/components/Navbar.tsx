import './styles/Navbar.css'

export const Navbar = () => {
  return (
    <section className="nav-section">
      <nav className="navbar">
        <div className="search-container">
          <i className="bi bi-search"></i>
          <input placeholder="Search" type="text" />
        </div>

        <ul className="navbar-container">
          <li className="active">For you</li>
          <li >Movies</li>
          <li>TV Shows</li>
          <li>TATA IPL</li>
          <li >New Release</li>
        </ul>

        <div className="notification-container">
          <i className="bi bi-bell"></i>
        </div>

        <div className="user-container">
          <img src="https://imageplaceholder.net/100" alt="user-image" />
          <p>Annie John</p>
        </div>
      </nav>
    </section>
  )
}
