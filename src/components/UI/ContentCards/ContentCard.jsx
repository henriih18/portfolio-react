// ContentCard.jsx
import React from 'react';
import { ContentImage } from '../ContentImages/ContentImage'; // Asegúrate de ajustar la ruta

export const ContentCard = ({ title, href1, src1, href2, src2}) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={href1} target="_blank" >
        <ContentImage src={src1} alt="Project" />
      </a>
      <a href={href2} target="_blank" >
        <ContentImage src={src2} alt="GitHub Repository" />
      </a>
    </div>
  );
};

