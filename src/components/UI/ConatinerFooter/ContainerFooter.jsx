import React from "react";
import { ContentImage } from "../ContentImages/ContentImage";

export const ContainerFooter = ({ href, src }) => {
  return (
    <div className="icon">
      <a href={href} target="_blank">
        <ContentImage src={src} alt="Icono" />
      </a>
    </div>
  );
};
