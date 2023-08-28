/* eslint-disable react/prop-types */
import { Form } from "../Form/Form";
import styled from "styled-components";

const FormCreate = ({ estado, cambiarEstdo }) => {
  return (
    <>
      {estado && (
        <OverLay>
          <ContainerModalCreate>
            <HeaderCreate>
              Create new product
              <IconIn onClick={()=> cambiarEstdo(false)} className="fa-solid fa-xmark"></IconIn>
            </HeaderCreate>
            <ContainerForm>
              <Form />
            </ContainerForm>
          </ContainerModalCreate>
        </OverLay>
      )}
    </>
  );
};

export default FormCreate;

export const OverLay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const ContainerModalCreate = styled.div`
  width: 700px;
  min-height: 200px;
  background-color: white;
  position: relative;
  border-radius: 5px;

  box-shadow: 0px 0px 5px #494949;
  padding: 20px;
`;

const HeaderCreate = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 9rem;
  margin-top: 10px;
  background-color: aliceblue;
`;

const IconIn = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: red;
  }
`;
