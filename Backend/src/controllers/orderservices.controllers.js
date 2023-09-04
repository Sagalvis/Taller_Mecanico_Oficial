import { pool } from '../dbconfig.js';


export const sendProducts = async (req, res) => {
  try {
    const { id_product, name_product, quantity, price, id_prodtype } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO inventory (id_product, name_product, quantity, price, id_prodtype) VALUES(?,?,?,?,?)",
      [id_product, name_product, quantity, price, id_prodtype]
    );
    res.send({
      id_inventory: rows.insertId,
      id_product,
      name_product,
      quantity,
      price,
      id_prodtype
    });
  } catch (error) {
    return res.status(401).json({
      message: "Database was not updated, error in the data types entered",
    });
  }
}


export const deleteProducts = async (req,res) => {
  try {
    const [rows] = await pool.query('DELETE FROM inventory WHERE id_product = ?', [req.params.id_product]);
    if (rows.affectedRows <= 0) return res.status(404).json({
      message: "inventory not found."
  });
  res.json(result);
  } catch (error) {
    return res.status(404).json({       
      message: "Register in database was not delete",
    });
  }
}

export const createReason = async (req, res) => {
  try {
    const { reason } =req.body;
    const [rows] = await pool.query('INSERT INTO FORM_ENTRY (REASON) VALUES (?)', [reason]);
    res.send({
      reason,
    })
  } catch (error) {
    return res.status(404).json({

    })
  }
}