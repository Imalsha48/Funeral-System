import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";  // ✅ Corrected Home Import
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FuneralProcedures from "./pages/FuneralProcedures";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <Router>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />  {/* ✅ Home is now the default */}
          <Route path="/home" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:name" element={<PackageDetails />} /> 
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/funeral-procedures" element={<FuneralProcedures />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
};

export default App;
