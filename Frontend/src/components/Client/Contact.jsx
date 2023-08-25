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

const Contact = () => {
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
                <TextTitle>Dirección Postal</TextTitle>
                <ContainText>
                  <Parraf>Cali - Barranquilla - Medellín - Bogota - Cartagena - Santa Marta - Bucaramanga</Parraf>
                </ContainText>

                <Icon>
                <i className="fa-solid fa-envelope"></i>
              </Icon>
                <TextTitle>Email</TextTitle>
                <ContainText>
                  <Parraf>dev.beecodes@gmail.com</Parraf>
                  <Parraf>transforcars@mailto.com</Parraf>
                </ContainText>
                <Icon>
                <i class="fa-solid fa-phone-volume"></i>
              </Icon>
                <TextTitle>Teléfono</TextTitle>
                <ContainText>
                  <Parraf>+57 304 526 4366</Parraf>
                </ContainText>
                <Icon>
                <i className="fa-regular fa-clock"></i>
              </Icon>
                <TextTitle>Horarios de Atención</TextTitle>
                <ContainText>
                  <Parraf>Lunes - Viernes: 8:00 AM - 5:00 PM</Parraf>
                  <Parraf>Sabado: 9:00 AM - 3:00 PM</Parraf>
                  <Parraf>Domingo: Solo atención online</Parraf>
                </ContainText>
            </ContainInfo>
          </InfoContact>
        </Contacts>
      </ContainerContact>
    </>
  );
};

export default Contact;