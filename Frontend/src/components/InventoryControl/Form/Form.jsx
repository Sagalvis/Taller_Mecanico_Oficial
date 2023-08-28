import { useState } from "react";
import Axios from "axios";
import {
    FormContainer,
    Input,
    InputArea,
    Button,
    InputContainerForm,
    SuccessMessageContainer,
    SuccessMessage,
    LoadingBar,
    ProgressBar,
} from "./StyledForm";

export const Form = () => {

/* const ref = useRef();
const [onEdit, setonEdit] = useState(null); */
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [id_product, setidProduct] = useState("");
    const [name_product, setnameProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [id_prodtype, setId_prodtype] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!id_product, !name_product, !quantity, !price, !id_prodtype)) {
        console.log("datos no validos");
        } else {
            Axios.post("http://localhost:3005/inventory", {
                id_product: id_product,
                name_product: name_product,
                quantity: quantity,
                price: price,
                id_prodtype: id_prodtype
            }).then((response) => {
                console.log(response.data);
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                    setIsSuccess(true);
                    setTimeout(() => {
                        setIsSuccess(false);
                        window.location.reload(); // Recargar la página después de la animación
                    }, 1000);
                }, 1000);
            });
        }
    };



    return (
        <FormContainer>
        <InputContainerForm>
            <InputArea>
            <Input
                name="nombre"
                onChange={(e) => setidProduct(e.target.value)}
                placeholder="ID Producto"
            />
            </InputArea>
            <InputArea>
            <Input
                name="nombre"
                onChange={(e) => setnameProduct(e.target.value)}
                placeholder="Nombre producto"
            />
            </InputArea>
            <InputArea>
            <Input
                name="cantidad"
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Cantidad producto"
            />
            </InputArea>
            <InputArea>
            <Input
                name="precio"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio producto"
            />
            </InputArea>
            <InputArea>
            <Input
                name="id_prodtype"
                onChange={(e) => setId_prodtype(e.target.value)}
                placeholder="id tipo producto"
            />
            </InputArea>
        </InputContainerForm>
        {isSuccess ? (
            <SuccessMessageContainer>
            <SuccessMessage>
                <h3>Successfully created</h3>
            </SuccessMessage>
            </SuccessMessageContainer>
        ) : (
            <>
            {isLoading ? (
                <LoadingBar>
                <ProgressBar />
                </LoadingBar>
            ) : (
                <Button type="submit" onClick={handleSubmit}>
                Enviar
                </Button>
            )}
            </>
        )}
        </FormContainer>
    );
};
