import { FormContainer, Input, InputArea, Button } from "../Form/StyledForm";
import { useState, useEffect } from "react";
import Axios from "axios";

// eslint-disable-next-line react/prop-types
export default function ContenedorModal({ onClose }) {

    const [inventory, setInventory] = useState([]);
    const [name_product, setnameProduct] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    

    
    const getInventory = async () => {
        try {
            const res = await Axios.get("http://localhost:3005/inventory")
            setInventory(res.data.sort((a,b) => (a.name_product.toLowerCase() > b.name_product.toLowerCase() ? 1 : -1)))
         /*  console.log(res.data) */
        } catch (error) {
            console.log(error)
        }
    };
    const Update = (item) => {
        Axios.patch(`http://localhost:3005/inventory/${item.id_product}`, {
            name_product: name_product,
            quantity: quantity,
            price: price
        }).then((response) => {
            console.log(response.data);
            
        })
    }
    useEffect(()=>{
        getInventory()
    }, [setInventory]);


    return(
        <FormContainer >
            {inventory.map((item, i)=>(
        <><InputArea key={i}>
                    <label>Nombre Producto</label>
                    <Input name="nombre" onChange={e => setnameProduct(e.target.value)} />
                </InputArea><InputArea>
                        <label>Cantidad Producto</label>
                        <Input name="cantidad" onChange={e => setQuantity(e.target.value)} />
                    </InputArea><InputArea>
                        <label>Precio Producto</label>
                        <Input name="precio" onChange={e => setPrice(e.target.value)} />
                    </InputArea><Button type="submit" onClick={() => Update(item)}>Actualizar</Button><i className="fa-solid fa-xmark" onClick={onClose}></i></>
        ))}
    </FormContainer>
    );
}