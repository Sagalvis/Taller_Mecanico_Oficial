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


export const getForm = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(404).json({       
      message: "Register in database was not delete",
    });
  }
}

export const updateReason = async (req, res) => {
  try {
    const { identification, matricula } = req.params;
    const { mechanic_report } = req.body;

    // Primero, realizamos una consulta para verificar si existe una entrada con los parámetros proporcionados.
    const [rows] = await pool.query('SELECT identification, matricula FROM FORM_ENTRY WHERE identification = ? AND matricula = ?', [identification, matricula]);
    console.log(rows);
    // Verificamos si se encontró una entrada en la base de datos.
    if (rows.length === 0) {
      return res.status(404).json({ message: "Entry not found" });
    }

    // Actualizamos la entrada con el nuevo valor de mechanic_report.
    const [result] = await pool.query('UPDATE FORM_ENTRY SET mechanic_report = ? WHERE identification = ? AND matricula = ?', [mechanic_report, identification, matricula]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({ message: "Update failed" });
    }

    // Consultamos nuevamente la entrada actualizada.
    const [updatedRows] = await pool.query('SELECT * FROM FORM_ENTRY WHERE identification = ? AND matricula = ?', [identification, matricula]);

    res.json(updatedRows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while updating the database",
      error: error.message,
    });
  }
}