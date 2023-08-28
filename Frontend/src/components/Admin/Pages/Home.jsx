import { useEffect, useState } from "react";
import {
  ContainerHeader,
  ContainerHome,
  Cards,
  Header,
  CardsContainer,
  ContainerCards,
  CardsConten,
} from "./Styles/styledHome";
import Axios from "axios";

const Home = () => {
  const [contadores, setContadores] = useState({
    contador1: "",
    contador2: "22",
    contador3: "444",
    contador4: "4444",
  });

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
      mensaje = "Buenos días, Sergio Galvis";
    } else if (hora < 18) {
      mensaje = "Buenas tardes, Sergio Galvis";
    } else {
      mensaje = "Buenas noches, Sergio Galvis";
    }

    return (
      <Header>
        <h1>{mensaje}</h1>
        <h1>{time.toLocaleTimeString()}</h1>
      </Header>
    );
  };

  const fetchData1 = async () => {
    try {
      const response = await Axios.get("http://localhost:3005/customer/count");
      const response2 = await Axios.get("http://localhost:3005/employed/count");
      const response3 = await Axios.get("http://localhost:3005/product/count");
      const response4 = await Axios.get("http://localhost:3005/vehicle/count");

      setContadores({
        contador1: response.data,
        contador2: response2.data,
        contador3: response3.data,
        contador4: response4.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData1();
  }, []);

  const TitleCards = ["Clientes", "Empleados", "Productos", "Vehiculos"];

  return (
    <ContainerHome>
      <ContainerHeader>
        <Reloj />
      </ContainerHeader>
      <ContainerCards>
        <CardsContainer>
            <Cards >
            </Cards>
        </CardsContainer>
        <CardsContainer>
          {TitleCards.map((title, index) => (
            <Cards key={index}>
              {Object.values(contadores).map((contador, index) => (
                <CardsConten key={index}>{title}{contador.length}</CardsConten>
              ))}
            </Cards>
          ))}
        </CardsContainer>
      </ContainerCards>
    </ContainerHome>
  );
};

export default Home;