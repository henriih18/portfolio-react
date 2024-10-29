import React from "react";
import { Header } from "../../Layouts/Header/Header";
import { ContainerSection } from "../../Layouts/ContainerSections/ContainerSections";
import { MyStudy } from "../../Layouts/MyStudy/MyStudy";
import { Footer } from "../../Layouts/FooterContainer/Footer";


export const Home = () => {
  return (
    <>
      <Header />
      <ContainerSection />
      <MyStudy />
      <Footer/>
    </>
  );
};
