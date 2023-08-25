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
  Price,
  Quantity,
  SelectOption,
  Tarjetas,
  TitleAction,
  TitleHeader,
  TitleIdProduct,
  TitleInfo,
  TitleNameProduct,
  TitlePrice,
  TitleQuantity,
  SearchContainerInventory,
  SearchInventory,
} from "./style/styleInventory";
import Axios from "axios";
import { Form } from "../Form/Form";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ContenedorModal from "./ContModal";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [modalState, setModal] = useState(false);


  /* const [count, useCount] = useState(0); */

  const getInventory = async () => {
    try {
      const res = await Axios.get("http://localhost:3005/inventory");
      setInventory(
        res.data.sort((a, b) => (a.id_product > b.id_product ? 1 : -1))
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

  
  const SelectInput = () => {
    const options = [
      { value: "option1", label: "Llantas" },
      { value: "option2", label: "Tuercas" },
      { value: "option3", label: "Opción 3" },
    ];

    return <SelectOption options={options} />;
  };
  const Reloj = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    let mensaje = "";

    const hora = time.getHours();
    if (hora < 12) {
      mensaje = "Good Morning, Roy Polo";
    } else if (hora < 15) {
      mensaje = "Good Afternoon, Roy Polo";
    } else {
      mensaje = "Good Evening, Roy Polo";
    }

    return (
      <HeaderInventory>
        <h1>{mensaje}</h1>
        <h1>{time.toLocaleTimeString()}</h1>
      </HeaderInventory>
    );
  };

  return (
    <ContainerPrincipal>
      <HeaderContainerInv>
        <Reloj/>
      </HeaderContainerInv>
      <ContainerInventory2>
        <HeaderInventory2>
          <TitleHeader>Productos</TitleHeader>
          <ButtonForm>Crear Nuevo Producto</ButtonForm>
          <SelectInput />
          <SearchContainerInventory>
            <Icon
              style={{ margin: 0 }}
              className="fa-solid fa-magnifying-glass"
            ></Icon>
            <SearchInventory placeholder="Search..." />
          </SearchContainerInventory>
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
              
              <Price>$ {item.price}</Price>
              <IconAction>
                <Icon
                  className="fa-solid fa-pen"
                  onClick={() => DeleteInventory(item)}
                ></Icon>
                <Icon
                  className="fa-solid fa-trash"
                  onClick={() => DeleteInventory(item)}
                ></Icon>
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
