import { useEffect, useState } from "react";
import {
  ContainerHeader,
  ContainerHome,
  Cards,
  Header,
  CardsContainer,
  Cards2,
  ContainerCards,
} from "./Styles/styledHome";
/* import axios from "axios" */


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
/* 
  const AccountantQueries = () => {
    const [results, setResults] = useState([]);
  
    useEffect(() => {
      const queries = [
        'http://localhost:3005/customer/count',
        'http://localhost:3005/product/count',
        'http://localhost:3005/vehicle/count',
      ];
  
      queries.forEach((consulta) => {
        axios.get(consulta)
          .then(res => {
            setResults(prevResults => [prevResults, res.data['COUNT(*)']]);
          })
          .catch(err => {
            console.error("Error al obtener datos", err);
          });
      });
    }, []);
  
    return (
      <CardsContainer>
        {results.map((result, index) => (
          <Cards key={index}>Resultado de la consulta: {result}</Cards>
        ))}
      </CardsContainer>
    );
  }; */
  
  
  return (
    <ContainerHome>
      <ContainerHeader>
        <Reloj />
      </ContainerHeader>
      <ContainerCards>
      <CardsContainer>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </CardsContainer>
        <CardsContainer>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </CardsContainer>
        <CardsContainer>
          <Cards2></Cards2>
          <Cards2 style={{ width: "750px" }}></Cards2>
          <Cards2></Cards2>
        </CardsContainer>
      </ContainerCards>
    </ContainerHome>
  );
};

export default Home;
