import React from "react";
import "./MainImage.css";
import MainHomeImage from "../../assets/MainImageHomePage/WhatsApp Image 2022-12-22 at 11.05.45 AM.jpeg";

function MainImage() {
  return (
    <div>
      <section>
        <img className="main-image" src={MainHomeImage} alt="" id="logo" />
        <section className="about-us-image">
          <h3 className="quote-text">What is Elegance? Soap and Water!</h3>
          <h4 className="quote">--Cecil Beaton--</h4>
        </section>
      </section>
    </div>
  );
}

export default MainImage;
