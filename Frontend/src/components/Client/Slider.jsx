import {
  ContentMain,

  SlideImg,
  ContentImg,
  Controls,
  Button,
} from "./styles/StyledSlider";
import { useRef, useEffect } from "react";
// services imports
import revision from "../../../src/assets/slider/revision-motor.jpg";
import aceite from "../../../src/assets/slider/aceite.jpg";
import llantas from "../../../src/assets/slider/cambio-llantas.jpg";
import herramientas from '../../../src/assets/slider/herramientas.jpg';
// buttons imports
import ArrowLeft from "../../assets/svg/ARROW-LEFT.svg";
import ArrowRight from "../../assets/svg/ARROW-RIGHT.svg";

function Slider() {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `800ms ease-out all`;

      const slideSize = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${slideSize}px)`;
      
      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transition);
      };
      slideshow.current.addEventListener('transitionend', transition);
    }
  };

  const back = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

      slideshow.current.style.transition = 'none';

      const slideSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '800ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect( () =>{
    const intervalT = setInterval(() => {
      next();
    }, 10000);

    // slideshow.current.addEventListener('mouseenter', () => {
    //   clearInterval(intervalT);
    // });
  }, []);

  return (
    <>
      <ContentMain>

        <ContentImg ref={slideshow}>

          <ContentImg>
            <SlideImg src={revision} alt="imagen" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={aceite} alt="imagen" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={llantas} alt="imagen" />
          </ContentImg>

          <ContentImg>
            <SlideImg src={herramientas} alt="imagen" />
          </ContentImg>

        </ContentImg>

        <Controls>
          <Button onClick={back}>
            <img src={ArrowLeft} alt="image" />
          </Button>

          <Button onClick={next}>
            <img src={ArrowRight} alt="image" />
          </Button>
        </Controls>
      </ContentMain>
    </>
  );
}

export default Slider;
