import { About, Firstbox, Footh5, Footli, Footul, Fotcontain, FtAnchor, Help, Logo, Reserved, Stayinput } from "./styles/StyledFooter";


function Footer() {
  return (
    <>
    <Fotcontain>
      <Firstbox>
        <Logo src="" alt="image"/>
        <Help>
          <Footh5>Ayuda</Footh5>
          <Footul>
            <Footli>
              <FtAnchor href="/">PQR</FtAnchor>
              <FtAnchor href="/">Atencion</FtAnchor>
              <FtAnchor href="/">Contacta</FtAnchor>
            </Footli>
          </Footul>
        </Help>
        <About>
          <Footh5>Acerca de nosotros</Footh5>
          <FtAnchor href="/">About Spec</FtAnchor>
          <FtAnchor href="/">Careers</FtAnchor>
        </About>
        <Stayinput>
          <Footh5>Stay up to date</Footh5>
        </Stayinput>
      </Firstbox>
      <Reserved>
        <></>
      </Reserved>
    </Fotcontain>
    </>
  )
}

export default Footer;
