import React from "react";
import Product from "../components/Product/Product";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__contianer">
        <img
          className="home__img"
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3740_.jpg"
          alt="highlight-img"
        />
        <div className="home__row">
          <Product
            id="98756"
            title="The Power of Discipline: How to Use Self Control and Mental Toughness to Achieve Your Goals "
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41GkJXGHOhL._SX322_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="81346"
            title="Smart Watch 2022(Call Receive/Dial), 1.70 in HD Full Touch Screen Smartwatch Fitness Tracker with Call/Text/Heart Rate (Black)"
            price={65}
            image="	https://m.media-amazon.com/images/I/61YYNEvkCzL._AC_SX425_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="27546"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price={44.99}
            image="	https://m.media-amazon.com/images/I/71yEX4ugtJL._AC_SX569_.jpg"
            rating={4}
          />
          <Product
            id="95678"
            title="2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)"
            price={639.0}
            image="https://m.media-amazon.com/images/I/71FePRgkiZL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="34575"
            title="Stand Mixer, 7.5QT Kitchen Electric Stand Mixer, 6+1Speed Tilt-Head Dough Mixer with Bowl, Dough Hook, Whisk, Beater, Egg Separator(Black) 660W"
            price={139.0}
            image="https://m.media-amazon.com/images/I/71znqAhCNuL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="34534"
            title="Samsung UN78KS9500 Curved 78-Inch 4K Ultra HD Smart LED TV (2016 Model)"
            price={289.0}
            image="https://m.media-amazon.com/images/I/91f2b+oH3YL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
