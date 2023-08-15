import { pool } from "../dbconfig.js";




export const LoginEmployes = async (req, res) => {
  try {
    const { mail, password } = req.body;
    const [rows] = await pool.query("SELECT mail, password FROM employed WHERE mail = ? and password = ? ", [ mail, password ]);
    res.send(rows);
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};


export const CreateEmployes = async (req, res) => {
  try {
    const { num_employed, name_employed, imgEmployed, rol, mail, password } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO profile (num_employed, name_employed, imgEmployed, rol, mail, password) VALUES(?,?,?,?,?)",
      [num_employed, name_employed, imgEmployed, rol, mail, password ]
    );
    res.send({
      num_employed: rows.insertId, 
      name_employed, 
      imgEmployed, 
      rol, 
      mail, 
      password
    });
  } catch (error) {
    return res.status(401).json({
      message: "Database was not updated, error in the data types entered",
    });
  }
};


export const UpdateEmployes = async (req, res) => {
 try {
  const { num_employed } = req.params;
  const {  name_employed, imgEmployed, rol,mail, password} = req.body;

  const [result] = await pool.query(
    "UPDATE employed SET  name_employed = IFNULL(?, name_employed), imgEmployed = IFNULL(?, imgEmployed),rol = IFNULL(?, rol) mail = IFNULL(?, mail), password = IFNULL(?, password) WHERE num_employed = ?", [ name_employed, imgEmployed, rol,mail, password, num_employed]
  );

  if (result.affectedRows === 0)
   return res.status(404).json({ message: "Employee not found"})

   const [rows] = await pool.query('SELECT * FROM employed WHERE num_employed = ?', [
    num_employed,
   ]);
   res.json(rows[0]) 

 } catch (error) {
  return res.status(500).json({ message: "Something goes wrong" });
 }
}

export const DeleteEmployes = async (req, res) => {
  try {
    const { num_employed } = req.params;
    const [rows] = await pool.query("DELETE FROM employes WHERE num_employes = ?", [num_employed]);
    
    if (rows.affectedRows <= 0){
      return res.status(404).json({message:"Employee not found"})
    }

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: "Something goes wrong"})
  }
}