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
    nombre: "pito X1",
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
    nombre: "espejos X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "direccionales X4",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz delantera X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "luz trasera X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "puertas X4",
    estado: <SelectInputEstado />,
  }, 
  {
    nombre: "asientos delanteros X2",
    estado: <SelectInputEstado />,
  },
  {
    nombre: "asientos traseros X1",
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
    nombre: "pito X1",
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
    nombre: "llantas X4",
    estado: <SelectInputEstado />,
  }
];