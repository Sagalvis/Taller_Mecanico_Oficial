// ---------------------------------------------- CRUD HOJA DE VIDA ---------------------------------------------------------------------
import { pool } from "../dbconfig.js";

/* export const postHojavida = async (req, res) => {
    try {
        const { identification } = req.body;
        const [rows] = await pool.query(
            "SELECT customer.identification, vehicle.matricula, vehicle.cylinder_cm, vehicle.model FROM vehicle INNER JOIN customer ON customer.identification = ?",
            [identification]
        );
        res.send({
            identification,
            matricula,
            cylincer_cm,
            model
        });
    } catch (error) {
        return res.status(401).json({
            message: "Database was not updated, error in the data types enteredtttt",
        });
    }
};
 */
//----------------------------PRUEBA---------------------------------------------------------------

export const postHojavida = async (req, res) => { 
    try { 
        const { identification } = req.body; 
        const [rows] = await pool.query( 
            "SELECT customer.identification, vehicle.matricula, vehicle.cylinder_cm, vehicle.model FROM vehicle INNER JOIN customer ON customer.identification = ?", 
            [identification] 
        ); 
        const { matricula, cylinder_cm, model } = rows[0]; // Se extraen los valores de la fila obtenida 
        res.send({ 
            identification, 
            matricula, 
            cylinder_cm, 
            model 
        }); 
    } catch (error) { 
        return res.status(401).json({ 
            message: "La base de datos no se actualizó, error en los tipos de datos ingresados", 
        }); 
    } 
};


export const getHojavida = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM inventory");
        res.json(rows);
    } catch (error) {
        return res.status(404).json({
            message: "Not found",
        });
    }
};

export const updateHojavida = async (req, res) => {
    try {
        const { id_product } = req.params;
        const { name_product, quantity, price } = req.body;
        const [rows] = await pool.query(
            "UPDATE inventory SET id_product = IFNULL(?, id_product), name_product = IFNULL(?, name_product), quantity = IFNULL(?, quantity), price = IFNULL(?,price) ",
            [id_product, name_product, quantity, price]
        );
        res.json(rows[0]);
    } catch (error) {
        return res.send(404).json({
            message: `The register can't been update`,
        });
    }
};

export const deleteHojavida = async (req, res) => {
    try {
        const [rows] = await pool.query(
            "DELETE FROM inventory WHERE id_product = ?",
            [req.params.id_product]
        );
        if (rows.affectedRows <= 0)
            return res.status(404).json({
                message: "inventory not found.",
            });
        res.json(result);
    } catch (error) {
        return res.status(404).json({
            message: "Register in database was not delete",
        });
    }
};
