import Navbar from "./Navbar";
import {
  Button,
  Contacts,
  ContainForm,
  ContainInfo,
  ContainText,
  ContainerContact,
  Form,
  Icon,
  InfoContact,
  Input,
  Parraf,
  TextArea,
  TextTitle,
  Title,
  TitleH2,
  TitleP,
  Wall,
  WallContact,
} from "./styles/StyledContact";
import wallc from "../../assets/img/CONTACT-WALL.jpg";

const Vehicle = () => {
  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  return (
    <>
      <Navbar />
      <ContainerContact>
        <Contacts>
          <ContainForm>
            <Title>
              <TitleH2>¡Ponte en contacto aqui!</TitleH2>
              <TitleP>
                Puedes obtener informacion especifica y/o experta con relacion
                algun desperfecto de tu vehículo.
              </TitleP>
            </Title>

            <Form>
              <Input
                type="text"
                placeholder="Nombre(s) y Apellido(s)"
                required
                autoComplete="off"
              />
              <Input
                type="tel"
                placeholder="Telefono"
                onInput={(evt) => acceptNum(evt)}
                maxLength={10}
              />

              <Input type="email" placeholder="Email" required />

              <Input type="text" placeholder="Ciudad" required />

              <TextArea
                rows={10}
                cols={50}
                placeholder="Escribe aqui tu solicitud"
                required
              ></TextArea>
            </Form>
            <Button>Enviar Solicitud</Button>
          </ContainForm>

          <InfoContact>
            <WallContact>
              <Wall src={wallc} alt="wallcontact" />
            </WallContact>
            <ContainInfo>
              <Icon>
                <i className="fa-solid fa-location-dot"></i>
              </Icon>
                <TextTitle>Direccion Postal</TextTitle>
                <ContainText>
                  <Parraf>Cali - Barranquilla - Medellin - Bogota - Cartagena - Santa Marta</Parraf>
                </ContainText>
            </ContainInfo>
          </InfoContact>
        </Contacts>
      </ContainerContact>
    </>
  );
};

export default Vehicle;
