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
    const [row] = await pool.query('SELECT * FROM fuel')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectCarroceria = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM chassis')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectEstadoIngreso = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM status_entry')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectStatus = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM status_entry')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

export const getSelectCheckBike = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM check_bike')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}
/* se borro un 0 que estaba asi export const getSelectCheckCar = async (req, res) => {0 */
export const getSelectCheckCar = async (req, res) => {
  try{
    const [row] = await pool.query('SELECT * FROM check_car')
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}

/* Traer informacion cliente y vehiculo para la factura */


export const getClienteFactura = async(req, res) =>{
  try {
    const [row] = await pool.query('SELECT * FROM customer')
    res.json(row)
  } catch (error) {
    return res.status(404).json({
      message: "Register in database was not found"
    })
  }
}
