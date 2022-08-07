import "./App.css";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import AppAppBar from "./pages/AppAppBar";
import IntroPage from "./pages/IntroPage";
import ProductCatalogue from "./pages/ProductCatalogue";
import Footer from "./pages/Footer";
import React from "react";

function App() {
  return (
    <>
      <AppAppBar />
      <IntroPage />
      <About />
      <Skills />
      <Experience />
      <ProductCatalogue />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
