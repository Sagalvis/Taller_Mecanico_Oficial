import { ContainerPrincipal, ContainerVistas, Containerinfo, Icon, IdProduct, NameProduct, Price, Quantity, Tarjetas } from "./style/styleInventory"
import Axios from "axios";
import { Form } from "../Form/Form";
import { useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import ContenedorModal from './ContModal';
const Inventory = () => {

  const [inventory, setInventory] = useState([]);
  const [modalState , setModal] =useState(false);
  
  /* const [count, useCount] = useState(0); */

  const getInventory = async () => {
    try {
      const res = await Axios.get("http://localhost:3005/inventory")
      setInventory(res.data.sort((a,b)=>(a.name_product.toLowerCase() > b.name_product.toLowerCase() ? 1 : -1)))
      console.log(res.data)
      
    } catch (error) {
      console.log(error)
    }
  };

  
  const DeleteInventory = async (item) => {
    try {
      const res = await Axios.delete(`http://localhost:3005/inventory/${item.id_product}`)
      
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    getInventory()
  }, [setInventory]);
  
  /* const handleEdit = (item) => {
    setSelectedItem(item)
  } */
  return (

    <ContainerPrincipal>
      <h1>Inventory Control</h1>
      <ContainerVistas>
        <Form/>

          {inventory.map((item, i)=>(
            
            <Tarjetas key={i}>
              
              <Containerinfo>
                <IdProduct>Id Producto</IdProduct>
                <IdProduct>{item.id_product}</IdProduct>
              </Containerinfo>
              <Containerinfo>
                <NameProduct>Nombre Producto </NameProduct>
                <NameProduct>{item.name_product} </NameProduct>
              </Containerinfo>
              <Containerinfo>
                <Quantity>Cantidad</Quantity>
                <Quantity>{item.quantity}</Quantity>
              </Containerinfo>
              <Containerinfo>
                <Price>Precio</Price>
                <Price>{item.price}</Price>
              </Containerinfo >
              <Containerinfo><Icon className="fa-solid fa-pen" onClick={() => setModal(true)} ></Icon><Icon className="fa-solid fa-trash" onClick={() => DeleteInventory(item)}></Icon></Containerinfo>
              
              </Tarjetas>
              
          ))}
        {modalState && createPortal(
        <ContenedorModal onClose={()=> setModal(false)}/>,
        document.body
      )}
      </ContainerVistas>
      
    </ContainerPrincipal>

          
  );

}
            

export default Inventory;
/* () =>setModal(true) */
