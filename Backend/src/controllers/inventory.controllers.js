// ---------------------------------------------- CRUD INVENTARIO ---------------------------------------------------------------------
import { pool } from "../dbconfig.js";

export const postInventory = async (req, res) => {
    try {
      const { name_product, quantity, price } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO inventory (name_product, quantity, price) VALUES(?,?,?)",
        [name_product, quantity, price]
      );
      res.send({
        id_inventory: rows.insertId,
        name_product,
        quantity,
        price
      });
    } catch (error) {
      return res.status(401).json({
        message: "Database was not updated, error in the data types entered",
      });
    }
  };
  
  export const getInventory = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM inventory ");
      res.json(rows);
    } catch (error) {
      return res.status(404).json({
        message: "Not found",
      });
    }
  };
  
  export const updateInventory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name_product, quantity, price } = req.body;
      const [rows] = await pool.query("UPDATE inventory SET name_product = IFNULL(?, name_product), quantity = IFNULL(?, quantity), price = IFNULL(?,price) ",[name_product, quantity, price, id]);
      res.json(rows[0]);
    } catch (error) {
      return res.send(404).json({
        message: `The register can't been update`,
      });
    }
  };
  
  export const deleteInventory = async (req, res) => {
    try {
      const [rows] = await pool.query('DELETE FROM inventory WHERE id_inventory = ?', [req.params.id]);
      if (rows.affectedRows <= 0) return res.status(404).json({
        message: "inventory not found."
    });
    res.json(result);
    } catch (error) {
      return res.status(404).json({
        message: "Register in database was not delete",
      });
    }
  };