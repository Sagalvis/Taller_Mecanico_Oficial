import { useState, useEffect } from "react";
import Axios from "axios";
import { SelectEstado } from "../styles/styledRegisterH";

const SelectInputEstado = () => {
  const [estadoIngreso, setEstadoIngreso] = useState([]);

  const getEstadoIngreso = async () => {
    const res = await Axios.get("http://localhost:3005/selectestadoingreso");
    setEstadoIngreso(res.data);
  };

  useEffect(() => {
    getEstadoIngreso();
  }, []);

  const options = estadoIngreso.map((item, i) => ({
    value: i,
    label: item.estado,
  }));

  return <SelectEstado options={options} />;
};

export const OptionsSelectBike = [
  {
    nombre: "espejos X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "direccionales X4",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz delantera X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz trasera X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tapas  X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "asiento X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "reposapies X4",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "mandos X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tapa tanque X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "parrilla X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz delantera X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "claxon X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "bateria X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tacometro X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "herramientas X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tanque X1",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "llantas X2",
    estado: <SelectInputEstado />,
  }
];

///////////////////////////////////////////////////////

export const OptionsSelectCar = [
  {
    nombre: "espejos",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "direccionales",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz delantera",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz trasera",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "puertas",
    estado: <SelectInputEstado />,
  }, 
  {
    nombre: "asientos delanteros",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "asientos traseros",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "cubresol",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "parabrisas",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "claxon",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "parabrisas",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "gato",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "llanta de refacción",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tapa de gasolina",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "placas",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tapetes",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "kit de carretera",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "tacometro",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "llantas",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "pintura carroceria",
    estado: <SelectInputEstado />,
  },
];