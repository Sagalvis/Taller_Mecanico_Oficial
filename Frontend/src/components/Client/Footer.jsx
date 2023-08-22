import { AboutUs, Contact, Container, Copy, CopyP, Help, TextAbout, ThisAnch, ThisAnchCont, ThisH2, ThisLi, ThisLiInfo, ThisP, ThisPContact, ThisUl, UlInfo, UlMedia } from "./styles/StyledFooter";


function Footer({titleCompany, textCompany, titleHelp, titleAbout, titleContact, Copyright}) {
  return (
    <>
    <Container>
      <TextAbout>
        <ThisH2>{titleCompany}</ThisH2>
      <ThisP>{textCompany}</ThisP>
      <UlMedia>
        <ThisLi><ThisAnch href="#"><i className="fa-brands fa-facebook-f"></i></ThisAnch></ThisLi>
        <ThisLi><ThisAnch href="#"><i className="fa-brands fa-x-twitter"></i></ThisAnch></ThisLi>
        <ThisLi><ThisAnch href="#"><i className="fa-brands fa-instagram"></i></ThisAnch></ThisLi>
      </UlMedia>
      </TextAbout>

      <Help>
        <ThisH2>{titleHelp}</ThisH2>
        <ThisUl>
          <ThisLi><ThisAnch href="#">Contact</ThisAnch></ThisLi>
          <ThisLi><ThisAnch href="#">FAQ</ThisAnch></ThisLi>
          <ThisLi><ThisAnch href="#">Legal and Privacy</ThisAnch></ThisLi>
        </ThisUl>
      </Help>

      <AboutUs>
        <ThisH2>{titleAbout}</ThisH2>
        <ThisUl>
          <ThisLi><ThisAnch href="#">About specs</ThisAnch></ThisLi>
          <ThisLi><ThisAnch href="#">Carers</ThisAnch></ThisLi>
        </ThisUl>
      </AboutUs>

      <Contact>
        <ThisH2>{titleContact}</ThisH2>
        <UlInfo>
          <ThisLiInfo>
            <span><i className="fa-solid fa-phone"></i></span><ThisPContact><ThisAnchCont href="tel:+573045264366">+57 304 526 4366</ThisAnchCont></ThisPContact>
          </ThisLiInfo>
          
          <ThisLiInfo>
            <span><i className="fa-solid fa-envelope"></i></span>
            <ThisPContact>
              <ThisAnchCont href="mailto:transforcar@mailto.com">transforcars@mailto.com</ThisAnchCont></ThisPContact>
          </ThisLiInfo>
        </UlInfo>
      </Contact>
      </Container>
    <Copy>
      <CopyP>{Copyright}</CopyP>
    </Copy>
    </>
  )
}

export default Footer;
