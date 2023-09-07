import {pool} from "../dbconfig.js";

export const getFacturacustomers = async(req, res) => {
  try {
    const {identification } = req.body;
    const [rows] = await pool.query("SELECT customer.identification, matricula, name, last_name, email, adress, phone, fecha_creacion FROM vehicle INNER JOIN customer ON vehicle.identification = customer.identification WHERE customer.identification = ? ", 
    [identification]);
    const matricula = rows.map((row) => row.matricula);
    const {name, last_name, email, adress, phone, fecha_creacion } = rows[0]
    res.send({
      identification,
      matricula,
      name,
      last_name,
      email,
      adress,
      phone, 
      fecha_creacion
    });
  } catch (error) {
    return res.status(500).json({ 
      message: "No se pudo obtener los datos", 
    });
  }
}; 

export const getFacturaVehicle = async(req, res) => {
  try{
    const {matricula} = req.body;
    const [rows] = await pool.query("SELECT idtype_vehicle, brand, model, propierty_card FROM vehicle WHERE matricula = ? ", [matricula]);
    const {idtype_vehicle, brand, model, propierty_card} = rows[0];
    res.send({
      matricula,
      idtype_vehicle,
      brand,
      model,
      propierty_card
    })
  }catch (error){
    return res.status(500).json({ 
      message: "No se pudo obtener los datos", 
    });
  }
}


/* const query = `SELECT * FROM factura WHERE matricula='${matricula}'`; */