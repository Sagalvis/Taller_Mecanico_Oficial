import styled from 'styled-components';

export const ContentMain = styled.div`
  width: 100%;
  height: 65vh; // 65vh
  position: relative;
  overflow: hidden;
  @media (min-width: 460px) {
    height: 60vh;
  }
`;

export const SliderContent = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ContentImg = styled.div`
  display: flex;
  flex-wrap: nowrap;
  
`;

export const SlideImg = styled.img`
  width: 100vw;
  min-width: 100%;
  height: 65vh; //   height: 91.32vh;
  object-fit: cover;
  transition: .3s ease all;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.555);
  @media (max-width: 1024px) {
    height: 57vh;
  }
`;

export const Controls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const Button = styled.button`
  width: auto ;
  height: auto;
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: .3s ease all;
  
  img{
    opacity: .5;
    width: 50px;
    height: 50px;
  }
`;