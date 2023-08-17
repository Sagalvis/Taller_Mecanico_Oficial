import styled from 'styled-components';

export const NavbarContent = styled.div`
background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 0 30px; */
  /* box-shadow: 0 5px 15px 0 rgba(0, 0, 0, .25); */
  width: 100%;
  height: 80px;
  /* border-radius: 13px; */
  position: fixed;
  /* top: 20px; */
  /* left: 50%;
  transform: translate(-50%); */
  z-index: 1;
`;

export const NavLogo = styled.div`
  color: #222; // #.222
  font-weight: 900;
  font-size: 2rem;
  cursor: pointer;
`;

export const MenuIcons = styled.div`
  display: none;
`;

export const NavMenuUl = styled.ul`
  display: flex;
  grid-gap: 10px;
  list-style: none;
  align-items: center;

  .nav-links {
    text-decoration: none;
    color: #eee; // #.222
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.7rem 1rem;
    white-space: nowrap;
  }

  .nav-links i {
    padding-right: 10px;
  }

  .nav-links:hover {
    background-color: #eee;
    color: #222;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  .nav-links-mobile {
    display: none;
  }

  @media (max-width: 850px) {   // responsive menu
    background-color: #eee; //#.fff;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-radius: 6px;
    width: 100%;
    height: auto;
    padding: 80px 0 30px 0;
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: -1;
    left: ${({click}) => click ? 0 : '-110%'};   //-110%
    transition: .5s all ease-in;
  }
`;

export const NavMenuLi = styled.li`
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.2 ease-in-out;

  &:hover {
    background-color: #222;
    color: #eee;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 850px) {
    width: 100%;
    letter-spacing: 1px;
  }
`;