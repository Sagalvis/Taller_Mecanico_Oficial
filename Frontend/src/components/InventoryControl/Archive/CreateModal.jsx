import { Form } from "../Form/Form";
import styled from 'styled-components';



const FormCreate = () => {
  return ( 
    <OverLay>
      <ContainerModalCreate>
        <HeaderCreate>
          Create new product
          <i className="fa-solid fa-xmark"></i>
        </HeaderCreate>
        <ContainerForm>
          <Form/>
        </ContainerForm>
      </ContainerModalCreate>
    </OverLay>
    
  );
}

export default FormCreate;



const OverLay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ContainerModalCreate = styled.div`
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
  font-size: 25px ;
  font-weight: bold;
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 9rem;
  margin-top: 10px;
  background-color: aliceblue;
`