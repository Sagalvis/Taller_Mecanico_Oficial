import { pool } from "../dbconfig.js";

export const CrearVehicle = async (req, res) => {
  try {
    const {
      matricula,
      propierty_card,
      brand,
      model,
      cylinder_cm,
      color,
      num_motor,
      kilometraje,
      identification,
      id_carroceria,
      id_combustible,
      idtype_vehicle,
    } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO vehicle ( matricula, propierty_card, brand, model, cylinder_cm, color, num_motor, kilometraje, identification, id_carroceria, id_combustible, idtype_vehicle) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        matricula,
        propierty_card,
        brand,
        model,
        cylinder_cm,
        color,
        num_motor,
        kilometraje,
        identification,
        id_carroceria,
        id_combustible,
        idtype_vehicle,
      ]
    );

    res.send({
      matricula,
      propierty_card,
      brand,
      model,
      cylinder_cm,
      color,
      num_motor,
      kilometraje,
      identification,
      id_carroceria,
      id_combustible,
      idtype_vehicle,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "¡Ah! Hay un error 😔😔",
    });
  }
};
