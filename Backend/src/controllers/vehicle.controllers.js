import { pool } from '../dbconfig.js';

export const getVehicle = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicle');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message:'error cannot find any value' });
  }
}

export const selectCarroceria = async (req, res) => {
  try {
    const id_carroceria = req.params.id_carroceria;
    const result = await pool.query('SELECT carroceria_type FROM carroceria WHERE id_carroceria = ?',[id_carroceria]);
    if (result.rows.length === 0) {
      res.status(404).json({ message:'error cannot find the carroceria' });
    console.log(result)
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message:'error cannot find the carroceria' });
  }
}


export const createVehicle = async (req, res) => {
  try{
      const { matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible } = req.body;
   
      console.log(req.body);
   
      const [rows] = await pool.query(
       'INSERT INTO vehicle (matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible) VALUES (?,?,?,?,?,?,?,?,?,?)',[matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible]);   
      console.log(rows);   
      res.status(201).json({
       matricula, 
       propierty_card, 
       brand, 
       model, 
       cylinder_cm, 
       vehicle_type, 
       color, 
       identification, 
       id_carroceria, 
       id_combustible
      });
      console.log(res.status());
   
     }catch (error) {
       res.status(500).json({ message:'error cannot create a new vehicle'});
  }
}

export const deleteVehicle = async (req, res) => { 
  try {
    
  } catch (error) {
    res.status(500).json({ message:'error cannot delete a vehicle' });
  }
}
