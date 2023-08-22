import { ContainerPrincipal, ContainerVistas, Containerinfo, Icon, IdProduct, NameProduct, Price, Quantity, Tarjetas } from "./style/styleInventory"
import Axios from "axios";
import { Form } from "../Form/Form";
import { useState, useEffect } from "react";



const Inventory = () => {
  const [inventory, setInventory] = useState([]);
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

  



  const UpdateInventory = async () => {
    try {
      const res = await Axios.patch("http://localhost:3005/inventory/:id_product")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


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
              <Containerinfo><Icon className="fa-solid fa-pen" onClick={UpdateInventory}></Icon><Icon className="fa-solid fa-trash"></Icon></Containerinfo>
              </Tarjetas>
          ))}
        
      </ContainerVistas>
    </ContainerPrincipal>


  );
}

export default Inventory;