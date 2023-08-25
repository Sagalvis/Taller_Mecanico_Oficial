/* eslint-disable react/prop-types */
import { FormContainer, Input, InputArea, Button } from "../Form/StyledForm";
import { useState, useEffect } from "react";
import Axios from "axios";

// eslint-disable-next-line react/prop-types
export default function ContenedorModal({ onClose }) {

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        getInventory();
    }, []);

    const getInventory = async () => {
        try {
            const res = await Axios.get("http://localhost:3005/inventory");
            setInventory(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateItem = async (itemId, field, value) => {
        try {
            await Axios.patch(`http://localhost:3005/inventory/${itemId}`, {
                [field]: value
            });
            // Actualizar el estado local después de la actualización exitosa
            setInventory(prevInventory =>
                prevInventory.map(item => {
                    if (item.id_product === itemId) {
                        return {
                            ...item,
                            [field]: value
                        };
                    }
                    return item;
                })
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <FormContainer>
            {inventory.map(item => (
                <ItemForm
                    key={item.id_product}
                    item={item}
                    updateItem={updateItem}
                    onClose={onClose}
                />
            ))}
        </FormContainer>
    );
}

// eslint-disable-next-line react/prop-types
function ItemForm({ item, updateItem, onClose }) {
    // eslint-disable-next-line react/prop-types
    const [name_product, setNameProduct] = useState(item.name_product || "");
    const [quantity, setQuantity] = useState(item.quantity || "");
    const [price, setPrice] = useState(item.price || "");

    const handleUpdate = () => {
        if (name_product) {
            updateItem(item.id_product, "name_product", name_product);
        } else if (quantity) {
            updateItem(item.id_product, "quantity", quantity);
        } else if (price) {
            updateItem(item.id_product, "price", price);
        }
    };

    return (
        <>
            <InputArea>
                <label>Nombre Producto</label>
                <Input
                    name="nombre"
                    value={name_product}
                    onChange={e => setNameProduct(e.target.value)}
                />
            </InputArea>
            <InputArea>
                <label>Cantidad Producto</label>
                <Input
                    name="cantidad"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
            </InputArea>
            <InputArea>
                <label>Precio Producto</label>
                <Input
                    name="precio"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </InputArea>
            <Button type="submit" onClick={handleUpdate}>
                Actualizar
            </Button>
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
        </>
    );
}

