import { pool } from "../dbconfig.js";

export const getVehicle = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM vehicle");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "error cannot find any value" });
  }
};

export const selectCarroceria = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT from carroceria");
    res.json(row);
  } catch (error) {
    res.status(500).json({ message: "error cannot find the carroceria" });
  }
};

export const selectOil = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * from combustible");
    res.json(row);
  } catch (error) {}
};

export const createVehicle = async (req, res) => {
  try {
    const {
      matricula,
      propierty_card,
      brand,
      model,
      cylinder_cm,
      vehicle_type,
      color,
      num_motor,
      kilometraje,
      identification,
      id_carroceria,
      id_combustible,
    } = req.body;

    console.log(req.body);

    const [rows] = await pool.query(
      "INSERT INTO vehicle (matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, num_motor, kilometraje, identification, id_carroceria, id_combustible) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        matricula,
        propierty_card,
        brand,
        model,
        cylinder_cm,
        vehicle_type,
        color,
        num_motor,
        kilometraje,
        identification,
        id_carroceria,
        id_combustible,
      ]
    );
    console.log(rows);
    res.status(201).json({
      matricula,
      propierty_card,
      brand,
      model,
      cylinder_cm,
      vehicle_type,
      color,
      num_motor,
      kilometraje,
      identification,
      id_carroceria,
      id_combustible,
    });
    console.log(res.status());
  } catch (error) {
    res.status(500).json({ message: "error cannot create a new vehicle" });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "error cannot delete a vehicle" });
  }
};
