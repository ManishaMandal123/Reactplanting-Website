import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/planntt.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Potting Green </h1>
        <p> Get Your Home Some Plant As Your Introverted
        Friend🌱</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;