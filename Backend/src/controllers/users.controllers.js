import { pool } from "../dbconfig.js";

export const getCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const [rows] = await pool.query("SELECT * FROM customer WHERE identification = ? ", [identification]);
    if(rows.length <= 0){
      return res.status(404).json({ message: "customer not found"})
    }
    res.send(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong"
    });
  }
};

export const LoginUsers = async (req, res) => {
  try {
    const { identification } = req.body;
    const [rows] = await pool.query("SELECT identification FROM customer WHERE identification = ? ",[identification])
    res.send(rows)
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    });
  }
}

export const createCustomer = async (req, res) => {
  try {
    const { identification, name_customer, propierty_card } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO customer (identification, name_customer, propierty_card) VALUES(?,?,?)",
      [identification, name_customer, propierty_card]
    );
    res.send({
      identification, 
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
      "UPDATE customer SET  name_customer = IFNULL(?, name_customer), propierty_card = IFNULL(?, propierty_card) WHERE identification = ?",[name_customer, propierty_card, identification]
    );
    

   if (result.affectedRows === 0){
     return res.status(404).json({ message: "customer not found"})
    }
    const [rows] = await pool.query('SELECT * FROM customer WHERE identification = ?', [identification]);
    if (rows.length === 0){
      return res.status(404).json({ message: "Customer not found"})
    }
    res.json(result[0]) 
  

  }catch(error){
    return res.send(404).json({
      message: "The register can't been update",
    });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const { identification } = req.params;
    const [rows] = await pool.query(
      "DELETE FROM customer WHERE identification = ?", [identification]
    )
    if (rows.affectedRows <= 0){
      return res.status(404).json({
        message:"customer not found"
      })
    }
    res.sendStatus(204)
  } catch (error) {
    return res.status(404).json({
      message: "Register in database was not delete",
    });
  }
};
