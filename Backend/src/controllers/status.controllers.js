import { pool } from "../dbconfig.js";

export const getStatus = async (req, res) => {0
  try{
    const [row] = await pool.query('SELECT * FROM status_order')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}