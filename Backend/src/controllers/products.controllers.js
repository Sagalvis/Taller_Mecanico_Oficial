import { pool } from '../dbconfig.js';


export const sendProducts = async (req, res) => {
 try {
  
 } catch (error) {
  return res.status(500).json({ message: "Database was not update, error in the data types entered" });
 }
}


export const deleteProducts = async (req,res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({ message: "Database was not update, error in the data types entered" });
  }
}