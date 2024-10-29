import React from "react";
import { ContainerFooter } from "../../UI/ConatinerFooter/ContainerFooter";
import { ContentImage } from "../../UI/ContentImages/ContentImage";
import Face from "../../../assets/icons/facebook.png";
import "../../Styles/FooterStyle/FooterStyle.css";
import gmail from "../../../assets/icons/gmail.png";
import what from "../../../assets/icons/whatsapp.png";
import insta from "../../../assets/icons/instagram.png";
import line from "../../../assets/icons/linea.png";
import pinte from "../../../assets/icons/pinterest.png";

export const Footer = () => {
  return (
    <>
      <div className="containerSectionFooter">
        
        <div className="icon">
          <ContainerFooter href="#" src={Face} />
        </div>

        <div className="icon">
          <ContainerFooter href="#" src={gmail} />
        </div>

        <div className="icon">
          <ContainerFooter href="#" src={what} />
        </div>

        <div className="icon">
          <ContainerFooter href="#" src={insta} />
        </div>

        <div className="icon">
          <ContainerFooter href="#" src={line} />
        </div>

        <div className="icon">
          <ContainerFooter href="#" src={pinte} />
        </div>
      </div>
    </>
  );
};
