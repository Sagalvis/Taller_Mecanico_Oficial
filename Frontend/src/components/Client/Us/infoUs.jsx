import {
  ContainerPrincipal,
  Title,
  ContainerText,
  List,
} from "./styles/StyledUs.jsx";

const InfoUs = ({ title, text, list }) => {
  return (
    <>
      <ContainerPrincipal>
        <Title>{title}</Title>

        <ContainerText>
          {text}
          <List>{list}</List>
        </ContainerText>
      </ContainerPrincipal>
    </>
  );
};

export default InfoUs;
