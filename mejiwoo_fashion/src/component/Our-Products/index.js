import React from "react";
import"./index.css"
const Ourproduct = () => {
  return (
    <section className="section-product">
      <div className="Season__container">
        <div className="row">
          <div className="Season__heading text-center">
            <h1>Our Products</h1>
          </div>
        </div>
      </div>
      <div className="centered-ul">
        <ul>
          <li className="list active current-page" data-filter="top">
              <p> Top</p>
              {/* <br className="Br_black" /> */}
          </li>
          <li className="list" data-filter="bottom">
            Bottom
          </li>
          <li className="list" data-filter="dress">
            Dress
          </li>
          <li className="list" data-filter="set">
            Set
          </li>
          <li className="list" data-filter="knit">
            Knit
          </li>
          <li className="list " data-filter="outer">
            Outer
          </li>
        </ul>
      </div>
      <div className="product">
        <div className="product-sub">
          <div className="itemBox top">
            <div className="image-top">
              <img src="/assets/public/frame-41@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
          <div className="itemBox bottom">
            <div className="image-top">
              <img src="/assets/public/frame-17@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
          <div className="itemBox dress">
            <div className="image-top">
              <img src="/assets/public/frame-18@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
          <div className="itemBox set">
            <div className="image-top">
              <img src="/assets/public/frame-19@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
          <div className="itemBox knit">
            <div className="image-top">
              <img src="/assets/public/frame-20@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
          <div className="itemBox outer">
            <div className="image-top">
              <img src="/assets/public/frame-21@2x.png" />
            </div>
            <div className="text-container">
              <h3>Euphoria Crop Blouse</h3>
              <h4>Rp. 125.000</h4>
            </div>
          </div>
        </div>
        <div className="btn-seemore">
          {" "}
          SEE MORE{" "}
          <img src="/assets/public/grommet-icons_link-next.svg " alt="" />
        </div>
      </div>
    </section>
  );
};
export default Ourproduct;
