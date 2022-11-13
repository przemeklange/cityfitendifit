import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Gallery from "../../components/Gallery/Gallery";
import HeaderSection from "../../components/Header-section/HeaderSection";
import Navigation from "../../components/Nav/Navigation";
import Slider from "../../components/Slider/Slider";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <HeaderSection />
        <AboutMe
          h2="Andrzej Czysz"
          about="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          orange="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          years="5 lat"
          yearstext="doświadczenia"
          cetyficated="certyfikowany"
          cetyficatedtrainer="trener personalny"
          percent="100%"
          percenttext="zadowolonych podopiecznych"
        />
        <Slider />
        <Gallery />
        <Contact />
      </div>
    </>
  );
};

export default Home;
