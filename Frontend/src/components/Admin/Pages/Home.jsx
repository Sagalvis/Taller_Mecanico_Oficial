import { useEffect, useState } from "react";
import {
  ContainerHeader,
  ContainerHome,
  Cards,
  Header,
  CardsContainer,
  ContainerCards,
} from "./Styles/styledHome";
import Axios from "axios"


const Home = () => {
  const Reloj = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    let mensaje = "";

    const hora = time.getHours();
    if (hora < 12) {
      mensaje = "Good Morning, Sergio Galvis";
    } else if (hora < 15) {
      mensaje = "Good Afternoon, Sergio Galvis";
    } else {
      mensaje = "Good Evening, Sergio Galvis";
    }

    return (
      <Header>
        <h1>{mensaje}</h1>
        <h1>{time.toLocaleTimeString()}</h1>
      </Header>
    );
  };
  const [contador, setContador] = useState("");
  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3005/customer/count");
      setContador(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ContainerHome>
      <ContainerHeader>
        <Reloj />
      </ContainerHeader>
      <ContainerCards>
        <CardsContainer>
          <Cards>{contador.length}</Cards>
        </CardsContainer>
      </ContainerCards>
    </ContainerHome>
  );
};

export default Home;
