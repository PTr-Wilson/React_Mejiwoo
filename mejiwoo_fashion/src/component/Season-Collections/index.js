import React from "react";
const SeasonCollections = () => {
  return (
    <section className="Season-Collections">
      <div className="Season__container">
        <div className="row">
          <div className="Season__heading text-center">
            <h1 style={{ margin: "60px 0px 0px 0px" }}>Season Collections</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="Season__single-product-area">
              {/* <!-- Nội dung sản phẩm thứ 1 --> */}
              <div className="Season__product-img">
                <img src="/assets/public/frame-4@2x.png" alt="" />
              </div>
              <div className="Season__product-info mt-15 text-center">
                <h2>SPRING</h2>
              </div>
            </div>
            <button className="btn-more">MORE</button>
          </div>
          <div className="col-md-4">
            <div className="Season__single-product-area">
              <div className="Season__product-img">
                <img src="/assets/public/frame-5@2x.png" alt="" />
              </div>
              <div className="Season__product-info mt-15 text-center">
                <h2>SUMMER</h2>
              </div>
            </div>
            <button className="btn-more">MORE</button>
          </div>
          <div className="col-md-4">
            <div className="Season__single-product-area">
              <div className="Season__product-img">
                <img src="/assets/public/frame-6@2x.png" alt="" />
              </div>
              <div className="Season__product-info mt-15 text-center">
                <h2>WINTER</h2>
              </div>
            </div>
            <button className="btn-more">MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SeasonCollections;
