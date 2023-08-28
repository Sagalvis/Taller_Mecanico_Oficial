import { pool } from "../dbconfig.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM customer ");
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
    const [rows] = await pool.query("SELECT email, password FROM customer WHERE email = ? and password = ? ", [ email, password ]);
    res.send(rows);
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
};
//--------------------------------//
export const CreatingAdvisor = async (req, res) => {
  try {
    const { identification,name_customer,propierty_card } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO customer (identification, name_customer, propierty_card ) VALUES(?,?,?)",
      [identification,name_customer,propierty_card] 
    );
    res.send(({
      identification,
      name_customer,
      propierty_card
    }));
  } catch (error) {
    console.log(error)
    return res.status(404).json({
      message: "ah! hay un error 😔😔 ",
    });
  }
};
//--------------------------------//
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