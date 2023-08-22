import { ContainerPrincipal, ContainerVistas, Tarjetas,Table,Th,Thead,Tr,Tbody,Td } from "./styledInventory"
import Axios from "axios";
/* import { Form } from "./Form/Form"; */
import { useState, useEffect } from "react";



const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  /* const [onEdit, setonEdit] = useState(null)
  const [count, useCount] = useState(0); */

  const getInventory = async () => {
    try {
      const res = await Axios.get("http://localhost:3005/inventory")
      setInventory(res.data.sort((a,b)=>(a.name_product > b.name_product ? 1 : -1)))
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getInventory()
  }, [setInventory]);
  
  /* const handleEdit = (item) => {
    setonEdit(item)
  } */

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
            
            <Tbody>
              {inventory.map((item, i)=>(
                <Tr key={i}>
                  <Td>{item.name_product}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>{item.price}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

        </Tarjetas>
      </ContainerVistas>
    </ContainerPrincipal>


  );
}

export default Inventory;