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

<<<<<<< HEAD











=======
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
>>>>>>> 796b74bad57aa4ce93fc0f593d3f2a7f21a23dd1
