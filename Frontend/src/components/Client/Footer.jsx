import { Contact, FootAnchor, FootSchedule, Footbutton, FooterContain, Footext, Footform, Footh3, Footinput, FootlinksContain, } from './styles/StyledFooter'

function Footer({title, anchors}) {
  return (
    <>
    <FooterContain>

      <FootlinksContain>
        <Footh3>Transformers</Footh3>

        <FootAnchor href='/'>Servicios</FootAnchor>
        <FootAnchor href='/'>Nosotros</FootAnchor>
        <FootAnchor href='/'>Contacto</FootAnchor>
        <FootAnchor href='/'>Mi Vehiculo</FootAnchor>
      </FootlinksContain>

      <FootSchedule>
        <Footh3>Schedule your Appointment</Footh3>

        <Footform>
          <Footinput type='email' placeholder='ejemplo@tucorreo.com'/>
          <Footbutton type='submit'>Enviar</Footbutton>
        </Footform>
      </FootSchedule>

      <Contact>
        <Footh3>Contact us</Footh3>
        <Footext>
          Lorem ipsum dolor sit, amet <br></br><span>consectetur adipisicing elit. Deleniti, eligendi.</span>
        </Footext>
      </Contact>
    </FooterContain>
    </>
  )
}

export default Footer;
