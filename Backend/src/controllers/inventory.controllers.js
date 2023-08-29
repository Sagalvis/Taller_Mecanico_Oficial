// ---------------------------------------------- CRUD INVENTARIO ---------------------------------------------------------------------
import { pool } from "../dbconfig.js";

export const postInventory = async (req, res) => {
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
  };
  
  export const getInventory = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM inventory");
      res.json(rows);
    } catch (error) {
      return res.status(404).json({
        message: "Not found",
      });
    }
  };
  
  export const updateInventory = async (req, res) => {
    try {
      const { id_product } = req.params;
      const { name_product, quantity, price } = req.body;
      const [rows] = await pool.query("UPDATE inventory SET id_product = IFNULL(?, id_product), name_product = IFNULL(?, name_product), quantity = IFNULL(?, quantity), price = IFNULL(?,price) ",[id_product, name_product, quantity, price]);
      res.json(rows[0]);
    } catch (error) {
      return res.send(404).json({
        message: `The register can't been update`,
      });
    }
  };
  
  export const deleteInventory = async (req, res) => {
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
  };

  export const getProduct = async (req, res) => {
    try {
      const [row] = await pool.query('SELECT * FROM product_type')
      res.json(row)
    } catch (error) {
      return res.status(404).json({       
        message: "Register in database was not found",
      });
    }
  }

  export const create = async (req, res) => {
    try{
        const { matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible } = req.body;
     
        console.log(req.body);
     
        const [rows] = await pool.query(
         'INSERT INTO vehicle (matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible) VALUES (?,?,?,?,?,?,?,?,?,?)',[matricula, propierty_card, brand, model, cylinder_cm, vehicle_type, color, identification, id_carroceria, id_combustible]);   
        console.log(rows);   
        res.status(201).json({
         matricula, 
         propierty_card, 
         brand, 
         model, 
         cylinder_cm, 
         vehicle_type, 
         color, 
         identification, 
         id_carroceria, 
         id_combustible
        });
        console.log(res.status());
     
       }catch (error) {
         res.status(500).json({ message:'error cannot create a new vehicle ' });
    }
  }