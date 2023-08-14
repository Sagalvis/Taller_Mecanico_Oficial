import { useState } from "react";
import { ContainerHeader, BoxMain, BgDiv, ContainerLogoName, ContainerNameLog, Name, ContainerNav } from "./styledHeader";
import BurguerButtom from "./BurguerButton";
import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/Client/Routers/router";

import NameLog from "./Img/Name.png"

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando el valor esta true lo pasara a false
    setClicked(!clicked);
  };
  return (
    <div>
      <ContainerHeader>
        <BoxMain>
          <ContainerLogoName>
            <ContainerNameLog>
              <Name src={NameLog}/>
            </ContainerNameLog>
          </ContainerLogoName>
          <ContainerNav>
            <div className={`links ${clicked ? "active" : ""}`}>
              <Routes>
                <Route path="/" element={<Layout />} />
              </Routes>
            </div>
          </ContainerNav>
          <div className="burguer">
            <BurguerButtom clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
        </BoxMain>
      </ContainerHeader>
    </div>
  );
};

export default Header;
