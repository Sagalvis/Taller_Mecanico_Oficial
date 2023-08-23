import { useState } from "react"
import Axios from "axios"
import { FormContainer, Input, InputArea, Button } from "./StyledForm"

export const Form = () => {
    /* const ref = useRef();
    const [onEdit, setonEdit] = useState(null); */

    const [id_product, setidProduct] = useState("")
    const [name_product, setnameProduct] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id_product, !name_product, !quantity, !price) {
            console.log("datos no validos")
        } else {
            Axios.post("http://localhost:3005/inventory", {
                id_product: id_product,
                name_product: name_product,
                quantity: quantity,
                price: price
            }).then((response) => {
                console.log(response.data)
            })
        }

    }

    return (
        <FormContainer >
            <InputArea>
                <label>ID Producto</label>
                <Input name="nombre" onChange={e => setidProduct(e.target.value)} />
            </InputArea>
            <InputArea>
                <label>Nombre Producto</label>
                <Input name="nombre" onChange={e => setnameProduct(e.target.value)} />
            </InputArea>
            <InputArea>
                <label>Cantidad Producto</label>
                <Input name="cantidad" onChange={e => setQuantity(e.target.value)} />
            </InputArea>
            <InputArea>
                <label>Precio Producto</label>
                <Input name="precio" onChange={e => setPrice(e.target.value)} />
            </InputArea>
            <Button type="submit" onClick={handleSubmit}>Enviar</Button>
        </FormContainer>
    );
};