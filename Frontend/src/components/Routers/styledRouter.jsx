import styled from 'styled-components';

export const ContainerRouter = styled.div`
  height: 100%;
  width: 650px;
`;

export const Nav = styled.nav`

`

export const Ul = styled.ul`
  list-style: none;
`

export const Li = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    transition: all 0.6s ease;
    font-weight: bold;
  }:hover{
    background-color:#ffffff ;
    color: black;
    border-radius: 10px;
    height: 30px;
    width: 100px;
    padding: 5px 10px;
  }
  
`