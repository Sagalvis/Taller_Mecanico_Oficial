import { FormContainer, Input, InputArea, Button, InputContainerForm } from "../Form/StyledForm";
import { useState, useEffect } from "react";
import { OverLay, ContainerModalCreate } from "./CreateModal"
import Axios from "axios";

// eslint-disable-next-line react/prop-types
export default function ContenedorModal({ estado2, cambiarEstdo2}) {

    const [inventory, setInventory] = useState([]);
    const getInventory = async () => {
        try {
            const res = await Axios.get("http://localhost:3005/inventory")
            setInventory(res.data)
        } catch (error) {
            console.log(error)
        }
    };
    const Update = async (id, updatedItem) => {
        try {
          await Axios.patch(`http://localhost:3005/inventory/${id}`, updatedItem);
          // Actualizar el estado local después de la actualización exitosa
          setInventory(prevInventory =>
            prevInventory.map(prevItem => {
              if (prevItem.id_product === id) {
                return {
                    ...prevItem,
                    ...updatedItem
                };
              }
              return prevItem;
            })
          );
          
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getInventory()
    }, []);

    return (
        <>
        {inventory.map(item => (
                <ItemForm
                    key={item.id_product}
                    item={item}
                    Update={Update}
                    estado2={estado2}
                    cambiarEstdo2={cambiarEstdo2}
                />
            ))}
        </>
    );
}

function ItemForm ({estado2, cambiarEstdo2, item, Update}) {
    const [name_product, setNameProduct] = useState(item.name_product || "");
    const [quantity, setQuantity] = useState(item.quantity || "");
    const [price, setPrice] = useState(item.price || "");

    const handleUpdate = () => {
        const updatedItem = {
          name_product,
          quantity,
          price
        };
        Update(item.id_product, updatedItem);
      };
    return(
        <>
            {estado2 && (
                <OverLay>
                    <ContainerModalCreate>
                        <FormContainer >
                            <InputContainerForm>
                            
                            <InputArea>
                                <label>Nombre Producto</label>
                                <Input name="nombre" value={name_product} onChange={e => setNameProduct(e.target.value)} /></InputArea>
                            <InputArea>
                                <label>Cantidad Producto</label>
                                <Input name="cantidad" value={quantity} onChange={e => setQuantity(e.target.value)} /></InputArea>
                            <InputArea>
                                <label>Precio Producto</label>
                                <Input name="precio" value={price} onChange={e => setPrice(e.target.value)} /></InputArea>
                            <Button type="submit" onClick={handleUpdate}>Actualizar</Button>
                            <i className="fa-solid fa-xmark" onClick={() => cambiarEstdo2(false)}></i>
                            </InputContainerForm>
                        </FormContainer>
                    </ContainerModalCreate>
                </OverLay>
            )}
        </>
    )
}