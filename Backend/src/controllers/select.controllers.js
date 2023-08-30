import { pool } from "../dbconfig.js";

export const getSelectVechicle = async (req, res) => {
  try {
    const [row] = await pool.query('SELECT * FROM type_vehicle')
    res.json(row)
  } catch (error) {
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectCombustible = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM combustible')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectCarroceria = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM carroceria')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}