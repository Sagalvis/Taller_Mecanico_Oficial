import {
  ButtonForm,
  ContainerInventory2,
  ContainerPrincipal,
  ContainerTarjetas,
  ContainerVistas,
  HeaderContainerInv,
  HeaderInventory,
  HeaderInventory2,
  Icon,
  IconAction,
  IdProduct,
  NameProduct,
  Option,
  Price,
  Quantity,
  SearchContainer,
  SelectOption,
  Tarjetas,
  TitleAction,
  TitleHeader,
  TitleIdProduct,
  TitleInfo,
  TitleNameProduct,
  TitlePrice,
  TitleQuantity,
} from "./style/styleInventory";
import Axios from "axios";
import { Form } from "../Form/Form";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ContenedorModal from "./ContModal";
import { ContainerSearch } from "../SidebarInventory/styledSidebarIn";
const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [modalState, setModal] = useState(false);

  /* const [count, useCount] = useState(0); */

  const getInventory = async () => {
    try {
      const res = await Axios.get("http://localhost:3005/inventory");
      setInventory(
        res.data.sort((a, b) =>
          a.name_product.toLowerCase() > b.name_product.toLowerCase() ? 1 : -1
        )
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteInventory = async (item) => {
    try {
      const res = await Axios.delete(
        `http://localhost:3005/inventory/${item.id_product}`
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInventory();
  }, [setInventory]);

  /* const handleEdit = (item) => {
    setSelectedItem(item)
  } */
  const [selectedOption, setSelectedOption] = useState('');
  const optionsSelect = [
    {value:'',label:"Seleccionar"},
    { value: 'Amarillo', label: '<NAME>'},
    { value: 'Azul', label: 'Azul' },
    { value: 'Rojo', label: 'Rojo'},
  ];

  return (
    <ContainerPrincipal>
      <HeaderContainerInv>
        <HeaderInventory>
          <h1>Inventory </h1>
        </HeaderInventory>
      </HeaderContainerInv>
      <ContainerInventory2>
        <HeaderInventory2>
          <TitleHeader>
            Productos
          </TitleHeader>
          <ButtonForm>
            Crear Nuevo Producto 
          </ButtonForm>
          <SelectOption value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
            {optionsSelect.map(optionsSelect => (
              <Option key={optionsSelect.value} value={optionsSelect.value}>
                {optionsSelect.label}
              </Option>
            ))}
          </SelectOption>
          <SearchContainer>
            
          </SearchContainer>
        </HeaderInventory2>
      </ContainerInventory2>
      <ContainerVistas>
        <TitleInfo>
          <TitleIdProduct>Id Producto</TitleIdProduct>
          <TitleNameProduct>Nombre Producto </TitleNameProduct>
          <TitleQuantity>Cantidad</TitleQuantity>
          <TitlePrice>Precio</TitlePrice>
          <TitleAction>Ación</TitleAction>
        </TitleInfo>
        <ContainerTarjetas>
          {inventory.map((item, i) => (
            <Tarjetas key={i}>
              <IdProduct>{item.id_product}</IdProduct>

              <NameProduct>{item.name_product} </NameProduct>

              <Quantity>{item.quantity}</Quantity>
              
              <Price>{item.price}</Price>
              <IconAction>
                <Icon className="fa-solid fa-pen" onClick={() => DeleteInventory(item)}></Icon>
                <Icon className="fa-solid fa-trash" onClick={() => DeleteInventory(item)}></Icon>
              </IconAction>
              
              {/* <Containerinfo></Containerinfo> */}
            </Tarjetas>
          ))}
          {modalState &&
            createPortal(
              <ContenedorModal onClose={() => setModal(false)} />,
              document.body
            )}
        </ContainerTarjetas>
      </ContainerVistas>
    </ContainerPrincipal>
  );
};

export default Inventory;
/* () =>setModal(true) */
