import { pool } from "../dbconfig.js";
import bcrypt from "bcrypt"

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
    console.log(req.body, 'valores');

    const [rows] = await pool.query("SELECT * FROM employed WHERE mail = ? ", [ mail ]);

    if (rows.length > 0) {
      const matchPassword = await bcrypt.compare(password, rows[0].password);
      console.log(rows[0].password);
      if (matchPassword) {
        res.status(200).json({
          message: rows[0],
        });
      } else {
        console.log("Password comparison failed");
        res.status(404).json({
          message: "Password incorrect",
        });
      }
    } else {
      console.log("Mail not found");
      res.status(404).json({
        message: "Mail incorrect",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const CreateEmployes = async (req, res) => {
  try {
    const { num_employed, name_employed,lastname_employed, imgEmployed, mail, password, phone, id_rol } = req.body;
    const hashPassword = await bcrypt.hash(password,12)
    console.log(hashPassword);
    const [rows] = await pool.query(
      "INSERT INTO employed (num_employed, name_employed, lastname_employed, imgEmployed, mail, password, phone, id_rol) values(?,?,?,?,?,?,?,?)",
      [num_employed, name_employed,lastname_employed, imgEmployed, mail, hashPassword, phone, id_rol]
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
    console.log(res.send);
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