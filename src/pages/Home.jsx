import React from "react";
import Banner from "../components/Banner";
import Intro from "../components/Intro";
import TrekCard from "../components/TrekCard";
import Footer from "../components/Footer";
import Subscription from "../components/Subscription";
import FAQ from "../components/FAQ";
import Sustainability from "../components/Sustainability";
import Menu from "../components/Menu";
import Departure from "../components/Departure";
import Gallery from "../components/Gallery";
import Peak from "../components/Peak";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return (
    <>
      <Menu />
      <Intro />
      <TrekCard />
      <Peak />
      <Upcoming />
      <Departure />
      <Gallery />
      <Sustainability />
      <Subscription />
      <FAQ />
    </>
  );
};

export default Home;
