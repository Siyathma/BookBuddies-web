import React from "react";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import UserSteps from "../../components/userSteps/UserSteps";
import Features from "../../components/features/Features";
import AboutHero from "../../components/aboutHero/AboutHero";

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <AboutHero/>
      <UserSteps/>
      <Features/>
      <Testimonial />
      <Footer />
    </>
  );
};

export default AboutUs;
