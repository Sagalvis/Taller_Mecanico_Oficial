import {
  ContainFactura,
  ContainInfor,
  ContainProducts,
  ContainProdutSuma,
  ContainTittlePorductFactura,
  ContainerInfoCliente,
  ContenPorductSuma,
  FacturaContain,
  InfoClient,
  InforP1,
  InputDoc,
  TittleFacturaProduct,
} from "./styles/styledCotizacion";
import {
  ContainInfo,
  DividierOrderFactura,
  Info,
  InfoH1,
  InfoP,
  ThisLogo,
  TittleInfo,
} from "./styles/styledOrder";
import { ContainerRegisterV } from "./styles/styledRegisterV";
import Logo from "../../../assets/svg/transforCars.svg";
import { useState } from "react";
import axios from "axios";
/*
import { useState } from "react"; */
const Cotizacion = () => {
/* varibles de estados para clientes */
  const [documento, setDocumento] = useState("");
  const [matricula, setMatricula] = useState([]);
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")
  const [phone, setPhone] = useState("")
  /* varibles de estados para vehicle */
  const [selectMatricula, setSelectMatricula] = useState("");
  const [tarjetaPropiedad, setTarjetaPropiedad] = useState("")
  const [modelo, setModelo] = useState("")
  const [marca, setMarca] = useState("")
  const [typovehicle, setTypovehicle] = useState("")

  const getInfoCustomer = async() => {
    try {
      const res = await axios.post("http://localhost:3005/infocustomer", {
        identification: documento
        
      });
      console.log(res.data);
      setName(res.data.name);
      setLastName(res.data.last_name);
      setEmail(res.data.email);
      setAdress(res.data.adress);
      setPhone(res.data.phone);
      setMatricula(res.data.matricula);
      
      /* mostrando en cosola las matriculas */
      console.log(res.data.matricula);
      
    } catch (error) {
      console.log("Error al obtener la información por cédula:", error);
    }
  }

  const getInfoVehicle = async() => {
    try {
      const sendnudes = await axios.post("http://localhost:3005/infovehicle", {
        matricula:selectMatricula
      })
      console.log(sendnudes.data);
      setTarjetaPropiedad(sendnudes.data.propierty_card);
      setModelo(sendnudes.data.model);
      setMarca(sendnudes.data.brand);
      setTypovehicle(sendnudes.data.idtype_vehicle)
    } catch (error) {
      console.log("Error al obtener la información por placa:", error);
    }
  }

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  }

  
  return (
    <ContainerRegisterV>
      <ContainFactura>
        <FacturaContain>
          <ContainInfo>
            <ThisLogo src={Logo} />
            <Info>
              <InfoH1>TransforCARS</InfoH1>
              <InfoP>Calle 47 N° 20 - 82 - Cordialidad</InfoP>
              <InfoP>transforcars@mailto.com</InfoP>
              <InfoP>3045264366</InfoP>
              <InfoP>N° Cotizacion: [bd]</InfoP>
            </Info>
          </ContainInfo>

          <DividierOrderFactura />

          <TittleInfo>COTIZACION</TittleInfo>
          <ContainerInfoCliente>
            <InfoClient>
              <ContainInfor>
                <InforP1>ID Cliente:</InforP1>
                <InputDoc
                  type="text"
                  placeholder="Número de documento"
                  value={documento}
                  onChange={(e)=>setDocumento(e.target.value)}
                  onInput={(evt) => acceptNum(evt)}
                  maxLength={15}
                  required
                />
                <button onClick={getInfoCustomer}> <i className="fa-solid fa-magnifying-glass"></i></button>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Para:</InforP1>
                <InfoP>{name} {lastName}</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Email:</InforP1>
                <InfoP>{email}</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Dirección:</InforP1>
                <InfoP>{adress} </InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Telefono:</InforP1>
                <InfoP>{phone}</InfoP>
              </ContainInfor>
            </InfoClient>
            <InfoClient>
              <ContainInfor>
                <InforP1>Placa:</InforP1>
                { matricula.length > 0 ? (
                  <select style={{ textTransform: "uppercase" }}
                  value={selectMatricula}
                  onChange={(e) => setSelectMatricula(e.target.value)}
                  ><option>Selecciona una placa </option>
                    {matricula.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p style={{ color: "red" }}>No se encontraron placas</p>
                )}
                <button onClick={getInfoVehicle}> <i className="fa-solid fa-magnifying-glass"></i></button>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Tarjeta de propiedad:</InforP1>
                <InfoP>{tarjetaPropiedad}</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Tipop de vehiculo:</InforP1>
                <InfoP>{typovehicle}</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Marca:</InforP1>
                <InfoP>{marca}</InfoP>
              </ContainInfor>
              <ContainInfor>
                <InforP1>Modelo:</InforP1>
                <InfoP>{modelo}</InfoP>
              </ContainInfor>
            </InfoClient>
          </ContainerInfoCliente>
          <DividierOrderFactura />
            <ContainProducts>
              <ContainTittlePorductFactura>
                <TittleFacturaProduct>Nombre producto</TittleFacturaProduct>
                <TittleFacturaProduct>Cantidad producto</TittleFacturaProduct>
                <TittleFacturaProduct>Precio unitario</TittleFacturaProduct>
                <TittleFacturaProduct style={{border:"none"}}>Total</TittleFacturaProduct>
              </ContainTittlePorductFactura>
              <ContainProdutSuma>
                <ContenPorductSuma>
d
                </ContenPorductSuma>
              </ContainProdutSuma>
            </ContainProducts>
        </FacturaContain>
        <FacturaContain>
          <></>
        </FacturaContain>
      </ContainFactura>
    </ContainerRegisterV>
  );
};

export default Cotizacion;
