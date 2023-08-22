import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  background-color: #eee;
`;

export const TextAbout = styled.div`
  margin-bottom: 10px;
  width: 35%;
`;

export const ThisH2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ThisP = styled.p`
  font-size: 14px;
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
  margin-bottom: 10px;
`;

export const ThisUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 10px;
`;

export const AboutUs = styled.div`
  margin-bottom: 10px;
`;

export const Contact = styled.div`
  margin-bottom: 10px;
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
  background-color: #222;
  color: #ddd;
`;

export const CopyP = styled.p`
  font-size: .9rem;
  margin-bottom: 10px;
`;