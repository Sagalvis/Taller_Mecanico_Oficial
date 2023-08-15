import { pool } from "../dbconfig.js";

export const getCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const [rows] = await pool.query("SELECT * FROM customer WHERE identification = ?", identification);
    res.send(rows);
    if(rows.length <= 0){
      return res.status(404).json({ message: "Employe not found"})
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const { identification, name_customer, propierty_card } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO profile (identification, name_customer, propierty_card) VALUES(?,?,?)",
      [identification, name_customer, propierty_card ]
    );
    res.send({
      identification: rows.insertId, 
      name_customer,
      propierty_card
    });
  } catch (error) {
    return res.status(401).json({
      message: "Database was not updated, error in the data types entered",
    });
  }
};


export const updateCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const { name_customer, propierty_card } = req.body;

    const [result] = await pool.query(
      "UPDATE customer SET  name_customer = IFNULL(?, name_employed), propierty_card = IFNULL(?, propierty_card) WHERE identification = ? ",[name_customer, propierty_card, identification]
  );

  if (result.affectedRows === 0)
   return res.status(404).json({ message: "Employee not found"})

   const [rows] = await pool.query('SELECT * FROM employed WHERE num_employed = ?', [
    num_employed,
   ]);
   res.json(rows[0]) 

  } catch (error) {
    return res.send(404).json({
      message: `The register can't been update`,
    });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
  } catch (error) {
    return res.status(404).json({
      message: "Register in database was not delete",
    });
  }
};
