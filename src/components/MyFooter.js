import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const MyFooter = () => {
  return (
    <footer className="footer mt-4">
      <div className="footer-body d-flex justify-content-center">
        <div className="col-lg-4 d-flex flex-column">
          <label className="details mb-3">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </label>
          <label className="details mb-3">binarcarrental@gmail.com</label>
          <label className="details">081-233-334-808</label>
        </div>
        <div className="col-lg-2 ms-4 d-flex flex-column justify-content-center">
          <Link to="/our-services" className="footer-item">
            <label className="details link mb-2 text-start">Our Service</label>
          </Link>
          <Link to="/why-us" className="footer-item">
            <label className="details link mb-2">Why Us</label>
          </Link>
          <Link to="/testimonial" className="footer-item">
            <label className="details link mb-2">Testimonial</label>
          </Link>
          <Link to="/faq" className="footer-item">
            <label className="details link ">FAQ</label>
          </Link>
        </div>
        <div className="col-lg-3">
          <div>
            <label>Connect with us</label>
            <div className="social-media mt-2">
              <SocialIcon
                url="https://facebook.com/jaketrent"
                className="me-2"
                bgColor="#0D28A6"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://instagram.com/jaketrent"
                className="me-2"
                bgColor="#0D28A6"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://twitter.com/jaketrent"
                className="me-2"
                bgColor="#0D28A6"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://email.com/jaketrent"
                className="me-2"
                bgColor="#0D28A6"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://twitch.com/jaketrent"
                className="me-2"
                bgColor="#0D28A6"
                style={{ height: 35, width: 35 }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-flex flex-column align-items-start">
          <label>Copyright Binar 2022</label>
          <div>
            <img
              src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
              alt="Logo"
              height="36"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
