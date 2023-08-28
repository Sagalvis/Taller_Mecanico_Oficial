import {
  ContentMain,

  SlideImg,
  ContentImg,
  Controls,
  Button,
} from "./styles/StyledSlider";
import { useRef, useEffect } from "react";
// services imports
import revision from "../../../src/assets/slider/slider1-01.png";
import aceite from "../../../src/assets/slider/slider2-01.png";
import llantas from "../../../src/assets/slider/slider3-01.png";
import herramientas from '../../../src/assets/slider/slider4-01.png';
// buttons imports
import ArrowLeft from "../../assets/svg/ARROW-LEFT.svg";
import ArrowRight from "../../assets/svg/ARROW-RIGHT.svg";

function Slider() {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];

      slideshow.current.style.transition = `700ms ease-out all`;

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
        slideshow.current.style.transition = '700ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect( () =>{
    const intervalT = setInterval(() => {
      next();
    }, 50000000);

    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervalT);
    });
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
