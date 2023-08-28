/* eslint-disable react/prop-types */
import { FormContainer, Input, InputArea, Button, InputContainerForm } from "../Form/StyledForm";
import { useState } from "react";

import Axios from "axios";
import styled from "styled-components";


export default function ContenedorModal() {
  
/*
    const [inventory, setInventory] = useState([]);
     const getInventory = async () => {
        try {
            const res = await Axios.get("http://localhost:3005/inventory")
            setInventory(res.data)
        } catch (error) {
            console.log(error)
        }
    }; */
    const Update = async (item) => {
        try {
          await Axios.patch(`http://localhost:3005/inventory/${item.id_product}`);
          
        } catch (error) {
          console.log(error);
        }
      };

  /* return (
    <>
      {inventory.map((item) => (
        <ItemForm
          key={item.id_product}
          item={item}
          Update={Update}
          estado2={estado2}
          cambiarEstdo2={cambiarEstdo2}
        />
      ))}
    </>
  ); */
}

function ItemForm({ estado2, cambiarEstdo2, item, Update }) {
  const [name_product, setNameProduct] = useState(item.name_product || "");
  const [quantity, setQuantity] = useState(item.quantity || "");
  const [price, setPrice] = useState(item.price || "");

  const handleUpdate = () => {
    const updatedItem = {
      name_product,
      quantity,
      price,
    };
    Update(item.id_product, updatedItem);
  };
  return (
    <>
      {estado2 && (
        <OverLay>
          <ContainerModalCreate>
            <HeaderCreate>
              Update Product
              <IconIn
                className="fa-solid fa-xmark"
                onClick={() => cambiarEstdo2(false)}
              />
            </HeaderCreate>
            <ContainerForm>
            <FormContainer>
            
              <InputContainerForm>
                <InputArea>
                <LabelInput>Nombre </LabelInput>
                  <Input
                    name="nombre"
                    value={name_product}
                    onChange={(e) => setNameProduct(e.target.value)}
                  />
                </InputArea>
                <InputArea>
                <LabelInput>Cantidad</LabelInput>
                  <Input
                    name="cantidad"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </InputArea>
                <InputArea>
                <LabelInput>Precio</LabelInput>
                  <Input
                    name="precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </InputArea>
                
              </InputContainerForm>
              <Button type="submit" onClick={handleUpdate}>
                  Actualizar
                </Button>
            </FormContainer>
            </ContainerForm>
          </ContainerModalCreate>
        </OverLay>
      )}
    </>
  );
}

const OverLay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
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
  box-shadow: 0px 0px 0px #494949;
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

const LabelInput = styled.h4`
  margin: 0;
  
`

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
