import {
  Aqui2p,
  Aquih2,
  Aquimg,
  Contenedorimg,
  Contenedortext,
  Segundocontenedor,
} from "./styles/StyledInfoUsPage";

function InfoUsPage({ title, text, img1, img2 }) {
  return (
    <>
        <Segundocontenedor>
          <Contenedortext>
            <Aquih2>{title}</Aquih2>
            <Aqui2p>{text}</Aqui2p>
          </Contenedortext>

          <Contenedorimg>
            <Aquimg src={img1} alt="img" />
            <Aquimg src={img2} alt="img" />
          </Contenedorimg>
        </Segundocontenedor>
    </>
  );
}

export default InfoUsPage;

export function InfoUsPage2({ title, text, img1, img2 }) {
  return (
    <>
        <Segundocontenedor>
          <Contenedorimg>
            <Aquimg src={img1} alt="img" />
            <Aquimg src={img2} alt="img" />
          </Contenedorimg>
          
          <Contenedortext>
            <Aquih2>{title}</Aquih2>
            <Aqui2p>{text}</Aqui2p>
          </Contenedortext>

        </Segundocontenedor>
    </>
  );
}


