import React from "react";
import "./index.css"
const Contact = () => {
  return (
    <div className="contact-form-area">
      <div className="container-contact">
        <div className="left-content">
          <h1>
            Get more benefits
            <br /> by Sign Up & Join <br />
            Mejiwoo Community!
          </h1>
          <ul className="custom-list">
            <li>FREE Special Gift to a new member</li>
            <li>Get 2x JIWOO Points to purchase items</li>
            <li>Get special voucher code every month </li>
            <li>Claim Voucher Disc. Up To 50% </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="right-content">
          <div className="right-content-form">
            <ul>
              <li>
                <form>
                  <input type="fullname" placeholder="Full Name"class="input-field" />
                </form>
              </li>
              <li>
                <form>
                  <input type="email" placeholder="Email Adress " class="input-field" />
                </form>
              </li>
              <li>
                <form>
                  <input type="password" placeholder="Password" class="input-field" />
                </form>
              </li>
              <li className="check">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                />
                <label for="myCheckbox">
                  I agree to all the <strong> Terms</strong> and{" "}
                  <strong>Privacy Policy</strong>{" "}
                </label>
              </li>
            </ul>
          </div>
          <button className="btn-signup">SIGN UP</button>

          <div className="line-with-text">
            <hr className="left-line" />
            <span className="text">Or</span>
            <hr className="right-line" />
          </div>
          <div className="button-container">
            <button className="button GG-button">
              <img
                src="/assets/public/icons_google.svg"
                alt="Google Logo"
                className="button-icon"
              />
              SIGN UP WITH GOOGLE
            </button>

            <button className="button FB-button">
              <img
                src="/assets/public/logos_facebook.svg"
                alt="Facebook Logo"
                className="button-icon"
              />
              SIGN UP WITH FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
