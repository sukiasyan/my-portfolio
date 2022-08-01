import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import AppAppBar from "../modules/views/AppAppBar";
import IntroPage from "../modules/views/IntroPage";
import About from "../modules/views/About";
import ProductCataloge from "../modules/views/ProductCatalogue";
import Skills from "../modules/views/Skills";
import Experience from "../modules/views/Experience";
import Contacts from "../modules/views/Contacts";
import Footer from "../modules/views/Footer";

export const Home = () => {
  return (
    <>
      <AppAppBar />
      <IntroPage />
      <About />
      <Skills />
      <Experience />
      <ProductCataloge />
      <Contacts />
      <Footer />
    </>
  );
};
