import { pool } from '../dbconfig.js';

export const getVehicle = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicle');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message:'error cannot find any value' });
  }
}


export const createVehicle = async (req, res) => {
  try{
   const { matricula, property_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible } = req.body;
   const type = req.body.vehicle_type
   if(type !== 'Carro'|| type !== 'Moto'){
    res.status(400).json({ message:'error vehicle_type must be Carro or Moto' });
   }
   const combustible = req.body.id_combustible
   if(combustible !== 1 || combustible !== 2){
    res.status(400).json({ message:'error id_combustible must be 1 or 2' });
   }
   const [rows] = await pool.query('INSERT INTO vehicle (matricula, property_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible) VALUES (?,?,?,?,?,?,?,?,?,?)')
  }catch (error) {
    res.status(500).json({ message:'error cannot create a new vehicle' });
  }
};


export const deleteVehicle = async (req, res) => { 
  try {
    
  } catch (error) {
    res.status(500).json({ message:'error cannot delete a vehicle' });
  }
}
