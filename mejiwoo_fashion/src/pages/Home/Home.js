import React from "react";
import BannerMejiwoo from "../../component/banner-area-Mejiwoo/index";
import SimpleSlider from "../../component/our-best-seller";
import SeasonCollections from "../../component/Season-Collections/index";
// import ImageSlider from "../../component/our-best-seller";
import Bannergetoff from "../../component/banner-area-getoff";
import Ourproduct from "../../component/Our-Products";
import Contact from "../../component/Contact-form";

import SlideDetail from "../../component/Slide-detail";

class Home extends React.Component {
  render() {
    return ( 
      <div className="Main">
        <BannerMejiwoo />
        <SeasonCollections />
        <section className="Our-Best-Seller section-seller">
          <div className="container-our ">
            <div className="row">
              <div className="Season__heading text-center">
                <h1>Our Best Seller</h1>
              </div>
            </div>
          </div>
          <div className="image-slider">
            <SimpleSlider />
          </div>
        </section>
        <Bannergetoff />
        <Ourproduct />
        <SlideDetail />
        <Contact />
      </div>
    );
  }
}
export default Home;
