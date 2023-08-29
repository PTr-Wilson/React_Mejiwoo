import React from "react";
import Slider from "react-slick";
import ItemSeller from "./item-seller/ItemSeller";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { IonIcon } from "@ionic/react";
// import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import "./index.css"; 

     
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg style={{
              zIndex: 1,
              position: 'absolute',
              bottom: '-45%',
              left: '-40px',
              transform: 'translateY(-50%)',
              // padding: '10px'
          }} xmlns="http://www.w3.org/2000/svg" width="27" height="45" viewBox="0 0 27 45" fill="none">
          <path d="M1 2L24.5611 20.9412C25.5569 21.7418 25.5569 23.2582 24.5611 24.0588L1 43" stroke="white" stroke-width="3"/>
      </svg>
    </div> 
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      // style={{
      //   ...style,
      //   display: "block",
      //   background: "grey",
      //   left: "-50px",
      //   top: "24%",
      // }}
      // onClick={onClick}
      className={className}
      style={style}
      onClick={onClick}
    />
    
  );
}

export default function SimpleSlider() {
  const data = [
    {
      imageUrl: "../../assets/public/slide_1.jpg",
      title: "Venus Halter Dress",
      price: "Rp. 125.000",
    },
    {
      imageUrl: "../../assets/public/slide_2 1.png",
      title: "Snap Pure Blouse",
      price: "Rp. 180.000",
    },
    {
      imageUrl: "../../assets/public/slide_31.png",
      title: "Euphoria Crop Blouse",
      price: "Rp. 129.000",
    },
    {
      imageUrl: "../../assets/public/slide_1.jpg",
      title: "Euphoria Crop Blouse",
      price: "Rp. 190.000",
    },
    {
      imageUrl: "../../assets/public/slide_31.png",
      title: "Venus Halter Dress",
      price: "Rp. 125.000",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="next-button" />,
    prevArrow: <SamplePrevArrow className="prev-button" />,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <ItemSeller
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
        />
      ))}
    </Slider>
  );
}
