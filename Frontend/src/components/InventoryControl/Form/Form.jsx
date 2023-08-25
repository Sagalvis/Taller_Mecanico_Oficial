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
                <Input name="nombre" onChange={e => setidProduct(e.target.value)} placeholder="ID Producto" />
            </InputArea>
            <InputArea>
                <Input name="nombre" onChange={e => setnameProduct(e.target.value)} placeholder="Nombre producto"/>
            </InputArea>
            <InputArea>
                <Input name="cantidad" onChange={e => setQuantity(e.target.value)} placeholder="Cantidad producto" />
            </InputArea>
            <InputArea>
                <Input name="precio" onChange={e => setPrice(e.target.value)} placeholder="Precio producto" />
            </InputArea>
            <Button type="submit" onClick={handleSubmit}>Enviar</Button>
        </FormContainer>
    );
};