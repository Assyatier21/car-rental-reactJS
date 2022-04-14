import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light static-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
            alt="Logo"
            height="36"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto d-flex">
            <Link to="/our-services" className="nav-item">
              <span className="nav-link text-dark">Our Service</span>
            </Link>
            <Link to="/why-us" className="nav-item">
              <span className="nav-link text-dark">Why Us</span>
            </Link>
            <Link to="/testimonial" className="nav-item">
              <span className="nav-link text-dark">Testimonial</span>
            </Link>
            <Link to="/faq" className="nav-item">
              <span className="nav-link text-dark">FAQ</span>
            </Link>
            <Link to="/register" className="nav-item ">
              <button
                className="btn btn-success nav-link w-100"
                style={{ color: `white` }}
              >
                Register
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
