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
  const [contador1, setContador1] = useState("");
  const [contador2, setContador2] = useState("");
  const [contador3, setContador3] = useState("");
  const [contador4, setContador4] = useState("");
  const fetchData1 = async () => {
    try {
      const response = await Axios.get("http://localhost:3005/customer/count");
      setContador1(response.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response2 = await Axios.get("http://localhost:3005/employed/count");
      setContador2(response2.data);
    } catch (error) {
      console.log(error);
    }
    try {
      const response3 = await Axios.get("http://localhost:3005/product/count");
      setContador3(response3.data);
    } catch (error) {
      console.log(error);
    }

    try {
      const response4= await Axios.get("http://localhost:3005/vehicle/count");
      setContador4(response4.data);
    } catch (error) {
      console.log(error);
    }
      
      
  };

  useEffect(() => {
    fetchData1();
  }, []);

  

  return (
    <ContainerHome>
      <ContainerHeader>
        <Reloj />
      </ContainerHeader>
      <ContainerCards>
        <CardsContainer>
          <Cards>{contador1.length}</Cards>
          <Cards>{contador2.length}</Cards>
          <Cards>{contador3.length}</Cards>
          <Cards>{contador4.length}</Cards>
        </CardsContainer>
      </ContainerCards>
    </ContainerHome>
  );
};

export default Home;
