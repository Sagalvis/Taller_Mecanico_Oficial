import { useEffect, useState } from "react";
import { ContainerHeader, ContainerHome, CustomerCards, Header} from "./Styles/styledHome";
import axios from "axios"

const Home = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  const [count, setCount] = useState("")

  const Customers = () => {
    const res = axios.get("http://localhost:3005/customer/count")
    setCount(res.data)
  }

  return ( 
      <ContainerHome>
        <ContainerHeader>
          <Header><h1>Good Morning, Sergio Galvis</h1> <h1>{time.toLocaleTimeString()}</h1></Header>
        </ContainerHeader>
        <CustomerCards>
            {Customers}
            {count}
        </CustomerCards>
      </ContainerHome>

  );
}

export default Home;
