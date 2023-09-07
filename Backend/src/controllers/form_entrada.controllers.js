// ---------------------------------------------- CRUD FORMULARIO ENTRADA ---------------------------------------------------------------------
import { pool } from "../dbconfig.js";

export const getformEntry = async (req, res) => { 
    try { 
        const { identification } = req.body; 
        const [rows] = await pool.query( 
            "SELECT customer.name, vehicle.matricula FROM vehicle INNER JOIN customer ON vehicle.identification = customer.identification where customer.identification = ?", 
            [identification] 
        ); 
        const matriculas = rows.map((row) => row.matricula); // Se extraen los valores de la fila obtenida 
        res.send({ 
            identification, 
            matriculas
        }); 
    } catch (error) { 
        return res.status(500).json({ 
            message: "No se pudo obtener los datos", 
        }); 
    } 
};

export const postformEntry = async (req, res) => {
    try {
        const { date_entry, reason, identification, matricula } = req.body
        const [rows] = await pool.query("INSERT INTO form_entry (date_entry, reason, identification, matricula) VALUES (?,?,?,?)", [date_entry, reason, identification, matricula]);
        res.json(rows);
    } catch (error) {
        return res.status(404).json({
            message: "No se pudo insertar los datos"
        });
    }
};

/* 
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
 */