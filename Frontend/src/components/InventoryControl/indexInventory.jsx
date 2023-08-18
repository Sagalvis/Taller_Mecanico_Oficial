import { ContainerPrincipal, ContainerVistas, Tarjetas,Table,Th,Thead,Tr,Tbody,Td } from "./styledInventory"
import Axios from "axios";
import { Form } from "./Form/Form";
import { useState, useEffect } from "react";



const Inventory = ({ invent }) => {
  const [name_product, useName_product] = useState('')
  const [quantity, useQuantity] = useState('')
  const [price, usePrice] = useState('')
  const [count, useCount] = useState(0)

  Axios.get("http://localhost:3005/inventory")






  const actualizarCantidad = () => {
   Axios.patch("http://localhost:3005/inventory",{
    quantity: count 
   })
 }
  return (

    <ContainerPrincipal>
      <h1>Inventory Control</h1>
      <ContainerVistas>
        <Tarjetas>
          <Table>
            <Thead>
              <Tr>
                <Th>Nombre Producto</Th>
                <Th>Cantidad</Th>
                <Th>Precio</Th>
              </Tr>
            </Thead>
            
          </Table>

        </Tarjetas>
      </ContainerVistas>
    </ContainerPrincipal>


  );
}

export default Inventory;