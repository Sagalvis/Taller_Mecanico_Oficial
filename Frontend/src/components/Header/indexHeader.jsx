import { useState } from 'react'
import { ContainerHeader, BoxMain, BgDiv } from './styledHeader';
import BurguerButtom from "./BurguerButton"
import {Routes, Route } from "react-router-dom"
import Layout from "../Routers/router"


const Header = () => {
  const [clicked, setClicked ] = useState(false)
  const handleClick = () =>{
    //cuando el valor esta true lo pasara a false
    setClicked(!clicked)
  }
  return ( 
    <div>
      
        <ContainerHeader>
          <BoxMain>
            <h2>Logo</h2>
            <div className={`links ${clicked ? 'active' : ''}`}>
              <Routes>
                <Route path='/' element={<Layout/>}/>
              </Routes>
            </div>
            <div className='burguer'>
          <BurguerButtom clicked={clicked} handleClick={handleClick}/>
            </div>
            <BgDiv className={`initial ${clicked ? 'active': ''}`}></BgDiv>
          </BoxMain>
        </ContainerHeader>
    </div>
  );
}

export default Header;