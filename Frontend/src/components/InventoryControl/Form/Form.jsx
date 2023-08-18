import { useRef } from "react"
import { FormContainer,Input,InputArea,Button } from "./StyledForm"
export const Form = ({ onEdit }) => {
    const ref = useRef();

    return(
        <FormContainer ref={ref}>
            <InputArea>
                <label>Nombre Producto</label>
                <Input name = "nombre"/>
            </InputArea>
            <InputArea>
                <label>Cantidad Producto</label>
                <Input name = "cantidad"/>
            </InputArea>
            <InputArea>
                <label>Precio Producto</label>
                <Input name = "precio"/>
            </InputArea>
            <Button type="submit">Enviar</Button>
        </FormContainer>
    );
};