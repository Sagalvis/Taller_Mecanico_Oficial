import { useState, useEffect } from "react";
import {
  Button,
  ContainH2,
  ContainerEntrada,
  Form,
  Input,
  TitleH2,
  ContainForm,
  ContainInventarioBike,
  ContainInventarioAuto,
  ContainH2Bike,
  TitleH2Auto,
  ContainH2Auto,
  ContainCC,
  InputCC,
  // TitleRegisterH,
} from "./styles/styledRegisterH";
import { ContainLabel, ContainLablSelect, ContainSelect, Label, SelectInputV } from "./styles/styledRegisterV";

const RegisterHojaV = () => {
  const [cedula, setCedula] = useState("");
  const [placa, setPlaca] = useState([]);
  const [estadoIngreso, setEstadoIngreso] = useState("");
  const [cilindraje, setCilindraje] = useState("");

/*   const add = () => {
    if(identification){
        Axios.post("http://localhost:3005/datos",{
          identification: identification
      }).then((datos) => {
        console.log(datos.data)
      })
    }
    
    setPlaca(datos.matricula) 
    
  } */
/*   function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, "");
  } */

  const getPlaca = async () => {
    const res = await Axios.get('http://localhost:3005/route');
  };

  const SelectInputPlaca = () => {
    const options = placa.map((item, i) => ({
      value: i,
      label: item.matricula
    })); 
    return <SelectInputV options={options} />
  };

  useEffect(() => {
    getPlaca();
  }, [setPlaca])

  return (
    <ContainerEntrada>
      <ContainForm>
        {/* <ContainTitle>
          <TitleH1>Registra nuevo cliente</TitleH1>
        </ContainTitle> */}

        <Form>
          <ContainH2>
          <TitleH2>Datos del vehículo</TitleH2>
          </ContainH2>

          <ContainCC>
          <InputCC
            type="text"
            placeholder="Cedula"
            value={cedula}
            onInput={(evt) => acceptNum(evt)}
            maxLength={15}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          <Button><i className="fa-solid fa-magnifying-glass"></i></Button>
          </ContainCC>

          <ContainLablSelect>
            <ContainLabel>
              <Label>Placa del vehículo:</Label>
            </ContainLabel>
            <ContainSelect>
              {/* <SelectInputPlaca /> */}
            </ContainSelect>
          </ContainLablSelect>

          <Input
            type="date"
            placeholder="Entrada"
            value={estadoIngreso}
            onChange={(e) => setEstadoIngreso(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Motivo de ingreso"
            value={cilindraje}
            onChange={(e) => setCilindraje(e.target.value)}
            required
          />
          <Button type="submit">
            Enviar
          </Button>
        </Form>

      <ContainInventarioBike>
        <ContainH2Bike>
          <TitleH2>Inventario de MOTO</TitleH2>
        </ContainH2Bike>
        <div style={{display: 'flex'}}>
          <p>Espejos X4</p>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </ContainInventarioBike>

      <ContainInventarioAuto>
      <ContainH2Auto>
          <TitleH2Auto>Inventario de AUTO</TitleH2Auto>

        </ContainH2Auto>
        <></>
      </ContainInventarioAuto>


      </ContainForm>
    </ContainerEntrada>
  );
};

export default RegisterHojaV