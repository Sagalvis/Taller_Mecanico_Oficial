import styled from 'styled-components';


export const ContainerHeader = styled.header`
  height: 35rem;
  width: 100%;
  background-color: #f0f8ff;
  z-index: -10;
`;
export const ContainerLogoName = styled.div`
  width: auto;
  height: 100%;
  /* background-color: blue; */
  display: flex;
`;
export const ContainerNameLog = styled.div`
  /* background-color: black; */
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const Name = styled.img`
  width: 500px;
  height: 250px;
  cursor: pointer;
  
`;
export const BoxMain = styled.nav`
  height:11vh;
  width: 100%;
  background-color: #000000db;
  box-shadow:10px 10px 10px rgba(0, 0, 0, 0.524);
  span{
    font-weight:bold
  }
  
  display: flex;
  align-items:center;
  justify-content: space-between;
  a{
    text-decoration: none;
  }
  .links{
    position:absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    @media  (min-width: 850px){
      position: initial;
      margin: 0;
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
      color:#000000;
    }
  }
  .burguer{
    @media(min-width: 850px){
      display: none;
      cursor: pointer;
    }
  }
`;
export const ContainerNav = styled.div`
  height: 100%;
  width: 650px;
  display: flex;
  align-items: center;
  
`
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
