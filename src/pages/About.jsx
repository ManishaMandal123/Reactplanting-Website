import React from "react";
import Banner from "../assets/banner.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        A panting interior is a great way to get more oxygen into your home. This is because when you pant, you breathe in more air than you would normally. This extra air contains more oxygen, which can be beneficial for your health. In addition to this, panting can also help to reduce stress and anxiety levels, as it encourages deep breathing and relaxation.

There are many ways to create a panting interior in your home. One of the easiest ways is to open up your windows and let in some fresh air. You can also use plants to help purify the air and increase oxygen levels. Some of the best plants for this purpose include snake plants, spider plants, and peace lilies.

Another way to create a panting interior is to use an air purifier. These devices work by removing pollutants from the air and increasing oxygen levels. They are especially useful if you live in an area with high levels of pollution or if you suffer from allergies or asthma.

Overall, there are many benefits to creating a panting interior in your home. Not only can it help to improve your health and wellbeing, but it can also make your home feel more comfortable and inviting.
        </p>
      </div>
    </div>
  );
}

export default About;