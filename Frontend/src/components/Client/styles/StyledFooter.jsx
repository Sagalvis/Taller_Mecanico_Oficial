import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 22vh;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  background-color: #eee;
`;

export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

export const ThisH2 = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ThisP = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const UlMedia = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
`;

export const ThisLi = styled.li`
  /* margin-right: 10px; */
  margin-bottom: 5px;
  .fa-solid {
    vertical-align: middle;
  }
  .fa-brands, .fa-solid {
  /* display: inline-block; */
  font-size: 16px;
  width: 16px;
  height: 16px;
  margin-right: 15px;
  font-size: 1.3rem;
  text-align: center;
  justify-content: center;
  line-height: 16px;
  vertical-align: middle;
  color: #000;
}
`;

export const ThisAnch = styled.a`
  color: #000;
  text-decoration: none;
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThisUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
`;

export const UlInfo = styled.ul`
  list-style-type: none;
  padding: 0;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
`;

export const ThisLiInfo = styled.li`
  display: flex;
  list-style-type: none;
  color: #000;
`;

export const ThisPContact = styled.p`
  list-style-type: none;
  margin: .4rem;
`;

export const ThisAnchCont = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: #000;
  
`;

export const Copy = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  height: 5vh;
  background-color: #000000;
  color: #ddd;
`;

export const CopyP = styled.p`
  font-size: .9rem;
  margin-bottom: 10px;
`;