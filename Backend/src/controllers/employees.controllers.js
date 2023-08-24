import { pool } from "../dbconfig.js";


export const getEmployes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employed");
    res.json(rows);
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};

export const LoginEmployes = async (req, res) => {
  try {
    const { mail, password } = req.body;
    console.log(req.body);
    const [rows] = await pool.query("SELECT * FROM employed WHERE mail = ? and password = ? ", [ mail, password ]);
    if(rows.length === 0) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    const user = rows[0];
    res.send( user );
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const CreateEmployes = async (req, res) => {
  try {
    const { num_employed, name_employed,lastname_employed, imgEmployed, mail, password, phone, id_rol } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employed (num_employed, name_employed, lastname_employed, imgEmployed, mail, password, phone, id_rol) values(?,?,?,?,?,?,?,?)",
      [num_employed, name_employed,lastname_employed, imgEmployed, mail, password, phone, id_rol]
    );
    res.send(({
      num_employed, 
      name_employed,
      lastname_employed,
      imgEmployed,  
      mail, 
      password,
      phone, 
      id_rol
    }));
  } catch (error) {
    return res.status(404).json({
      message: "error  😔😔😔",
    });
  }
};


export const UpdateEmployes = async (req, res) => {
  try {
    const { num_employed } = req.params;
    const {  name_employed, imgEmployed, rol, mail, password} = req.body;

    const [result] = await pool.query(
      "UPDATE employed SET  name_employed = IFNULL(?, name_employed), imgEmployed = IFNULL(?, imgEmployed),rol = IFNULL(?, rol), mail = IFNULL(?, mail), password = IFNULL(?, password) WHERE num_employed = ?", [ name_employed, imgEmployed, rol, mail, password, num_employed]
    );

    if (result.affectedRows === 0)
    return res.status(404).json({ message: "Employee not found"})

    const [rows] = await pool.query('SELECT * FROM employed', [
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
    const [rows] = await pool.query("DELETE FROM employed WHERE num_employed = ?", [num_employed]);
    
    if (rows.affectedRows <= 0){
      return res.status(404).json({message:"Employee not found"})
    }

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({message: "Something goes wrong"})
  }
}