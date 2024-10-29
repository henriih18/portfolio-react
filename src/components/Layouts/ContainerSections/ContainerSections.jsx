import React from 'react'
import "../../Styles/HomeStyle/containerSection.css";
import { ContentImage } from '../../UI/ContentImages/ContentImage';
import fotoPerfil from '../../../assets/images/PhotoMe.png'

export const ContainerSection = ({children}) => {
  return (
    /* <section>
      <h1>{text}</h1>
    </section> */

    <>
    <div className="containerDivHome">
        <div className="firtsDiv">
          <ContentImage src={fotoPerfil}/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            odit ducimus sed, saepe architecto a modi tenetur quaerat iusto
            nemo. Doloremque totam distinctio delectus? Tenetur magni voluptas
            ea error fugiat? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eos mollitia deserunt consequatur est accusantium vero cumque
            impedit adipisci aspernatur? Ex velit qui ratione hic, incidunt
            itaque quo assumenda at tenetur?
          </p>
        </div>

        <div className="secondDiv">
          <h2>Mi familia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, dolorum quam qui, magnam eveniet ipsam saepe suscipit
            doloremque odit excepturi rerum consequatur nisi eaque inventore
            nihil cumque perspiciatis autem. Maiores. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Animi saepe, illo culpa dolor sequi
            tenetur at tempore asperiores nam exercitationem natus maxime eaque
            ad dolores voluptatibus ipsum eos quisquam? Tempore!
          </p>
        </div>
      </div>


    </>
  )
}
