import { useEffect, useState } from "react";
import { ContainerHeader, ContainerHome, CustomerCards, Header} from "./Styles/styledHome";
import axios from "axios"

const Home = () => {
  const Reloj = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    let mensaje = '';

    const hora = time.getHours();
    if (hora < 12) {
      mensaje = 'Good Morning, Sergio Galvis';
    } else if (hora < "18:00:00 ") {
      mensaje = 'Good , Sergio Galvis';
    } else {
      mensaje = 'Good Evening, Sergio Galvis';
    }
  
    return (
        <Header><h1>{mensaje}</h1><h1>{time.toLocaleTimeString()}</h1></Header>
    );
  };


  
  const [count, setCount] = useState("")

  const Customers = () => {
    const res = axios.get("http://localhost:3005/customer/count")
    setCount(res.data)
  }

  return ( 
      <ContainerHome>
        <ContainerHeader>
          <Reloj/>
        </ContainerHeader>
        <CustomerCards>
            {Customers}
            {count}
        </CustomerCards>
      </ContainerHome>

  );
}

export default Home;
