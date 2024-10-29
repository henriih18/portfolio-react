import React from "react";
import "../../Styles/Mystudy/Mystudy.css";
import { ContentImage } from "../../UI/ContentImages/ContentImage";
import ing from "../../../assets/images/image.png";
import cardi from "../../../assets/images/Captura de pantalla de 2024-10-26 12-03-12.png";
import github from "../../../assets/images/logo-GitHub-500x281.png";
import { ContentCard } from "../../UI/ContentCards/ContentCard";
import ApiRopa from "../../../assets/images/apiropa.png";
import portafolio1 from "../../../assets/images/portafolio-1.png"

export const MyStudy = () => {
  return (
    <div className="Study">
      <h2>Mis proyectos</h2>
      <div className="containerSection">
        <section className="containerStudy">
          <div className="Card">
            <ContentCard
              title="Atlas"
              href1="https://atlas-henry-hernandezs-projects.vercel.app/"
              src1={cardi} // Primera imagen del proyecto
              href2="https://github.com/henriih18/Atlas.git"
              src2={github} // Segunda imagen del repositorio
            />
          </div>

          <div className="Card">
            <ContentCard
              title="ApiRopa"
              href1="https://api-ropa-henry-hernandezs-projects.vercel.app/"
              src1={ApiRopa}
              href2="https://github.com/henriih18/apiRopa.git"
              src2={github}
            />
          </div>
          <div className="Card">
            <ContentCard title="Portafolio 1"
            href1="https://h-henry-hernandezs-projects.vercel.app/"
            src1={portafolio1}
            href2="https://github.com/henriih18/Portafolio.git"   
            src2={github}         
            />
          </div>
        </section>

        <ContentImage src={ing} className="asist"/>
      </div>
    </div>
  );
};
