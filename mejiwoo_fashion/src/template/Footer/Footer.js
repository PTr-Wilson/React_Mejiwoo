import React from "react";
import "./footer.css"
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="row-footer">
          <div className="footer-logo ">
            <h2>MEJIWOO</h2>
            <h3>미지우</h3>
          </div>
          <div className="footer-col">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Official Store</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Payment </a>
              </li>
              <li>
                <a href="#">Returns </a>
              </li>
              <li>
                <a href="#">Contact Us </a>
              </li>
            </ul>
          </div>
          <div className="footer-col-ikon">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <img src="/assets/public/logos_facebook.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img
                  src="/assets/public/skill-icons_instagram.svg"
                  alt="Twitter"
                />
              </a>
              <a href="#">
                <img src="/assets/public/devicon_twitter.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img
                  src="/assets/public/logos_youtube-icon.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="footer-col-texter">
            <ul className="footer-links">
              <li>
                <a href="#" >Guide</a>
              </li>
              <li>
                <a href="#" >Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-footer-bottom">
          <div className="footer-bottom text-center">
            <img src="./public/ic_baseline-copyright.svg" alt="" />
            <p>2023 MEJIWOO. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
