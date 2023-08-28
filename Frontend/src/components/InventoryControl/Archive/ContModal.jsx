import { FormContainer, Input, InputArea, Button } from "../Form/StyledForm";
import { useState, useEffect } from "react";
import { OverLay } from "./CreateModal"
import Axios from "axios";

// eslint-disable-next-line react/prop-types
export default function ContenedorModal({ onClose, estado2, cambiarEstdo2 }) {

    const [inventory, setInventory] = useState([]);
    const [name_product, setnameProduct] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    

    
    const getInventory = async () => {
        try {
            const res = await Axios.get("http://localhost:3005/inventory")
            setInventory(res.data)
         /*  console.log(res.data) */
        } catch (error) {
            console.log(error)
        }
    };
    const Update = (item) => {
        if(name_product){
            Axios.patch(`http://localhost:3005/inventory/${item.id_product}`, {
            name_product: name_product
        })
        }else if(quantity){
            Axios.patch(`http://localhost:3005/inventory/${item.id_product}`, {
            quantity: quantity
        })
        }else if(price){
            Axios.patch(`http://localhost:3005/inventory/${item.id_product}`, {
            price: price
        })
        }
        
    }
    useEffect(()=>{
        getInventory()
    }, [setInventory]);


    return(
        <>
        {estado2 && (
        <OverLay>
            <FormContainer >
                <InputArea>
                    <label>Nombre Producto</label>
                    <Input name="nombre" onChange={e => setnameProduct(e.target.value)} /></InputArea>
                <InputArea>
                    <label>Cantidad Producto</label>
                    <Input name="cantidad" onChange={e => setQuantity(e.target.value)} /></InputArea>
                <InputArea>
                    <label>Precio Producto</label>
                    <Input name="precio" onChange={e => setPrice(e.target.value)} /></InputArea>
                <Button type="submit" onClick={() => Update}>Actualizar</Button>
                <i className="fa-solid fa-xmark" onClick={()=> cambiarEstdo2(false)}></i>
        </FormContainer>
    </OverLay>
    )}
    </>
    );
}