import React from "react";
import CareerSection from "./CareerSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import GridSection from "./GridSection";
import PricingSection from "./PricingSection";
import ScreenSection from "./ScreenSection";
import VideoSection from "./VideoSection";
import WhoWeAreSection from "./WhoWeAreSection";
import WhyJoinSection from "./WhyJoinSection";

const Home = () => {
  return (
    <>
      <HomeSection />
      <WhoWeAreSection />
      <VideoSection />
      <WhyJoinSection />
      <ScreenSection />
      <GridSection />
      <PricingSection />
      <CareerSection />
      <ContactSection />
    </>
  );
};

export default Home;
