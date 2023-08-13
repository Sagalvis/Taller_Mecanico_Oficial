import styled from 'styled-components';
import fondoheader from "../../Img/fondeheader.jpg"

export const ContainerHeader = styled.header`
  background: #0f0f0f;
  height: 100vh;
  width: 100%;
  background-image: url(${fondoheader});
  background-position: center ;
  background-size: cover;
`;

export const BoxMain = styled.div`
  height:10vh;
  width: 100%;
  box-shadow:10px 10px 10px rgba(128, 128, 128, 0.524);
    color: #ffffff;
  h2{
    color: #fbfbfb;
    font-weight: 400;
  }
  span{
    font-weight:bold
  }
  
  display: flex;
  align-items:center;
  justify-content: space-between;
  a{
    color: #000000;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position:absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease
    a{
      color: #ffffff;
      font-size: 2rem;
      display: block;
    }
    @media  (min-width: 850px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left:auto;
    margin-right:auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      color:#f5f2f2;
    }
  }
  .burguer{
    @media(min-width: 850px){
      display: none;
      cursor: pointer;
    }
  }
`;

export const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height:100%;
  z-index: -1;
  transition: all .6s ease;
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
