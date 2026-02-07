import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import Booking from "./pages/Booking";
import Banner from "./components/Banner";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<PackageDetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
