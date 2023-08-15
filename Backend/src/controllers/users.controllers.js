import { pool } from "../dbconfig.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT email, password FROM profile ");
    res.send(rows);
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query("SELECT email, password FROM profile WHERE email = ? and password = ? ", [ email, password ]);
    res.send(rows);
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};

export const postUsers = async (req, res) => {
  try {
    const { name, lastname, email, password, date, phone } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO profile (name, lastname, email, password, date, phone) VALUES(?,?,?,?,?,?)",
      [name, lastname, email, password, date, phone]
    );
    res.send({
      id: rows.insertId,
      name,
      lastname,
      email,
      password,
      date,
      phone,
    });
  } catch (error) {
    return res.status(401).json({
      message: "Database was not updated, error in the data types entered",
    });
  }
};

export const updateUsers = async (req, res) => {
  try {
  } catch (error) {
    return res.send(404).json({
      message: `The register can't been update`,
    });
  }
};

export const deleteUsers = async (req, res) => {
  try {
  } catch (error) {
    return res.status(404).json({
      message: "Register in database was not delete",
    });
  }
};



