import { pool } from "../dbconfig.js";

export const getStatus = async (req, res) => {0
  try{
    const {matricula} = req.body
    const [row] = await pool.query('SELECT status_order.order_status, form_entry.date_entry, form_entry.id_form_entry, form_entry.identification, form_entry.matricula FROM form_entry INNER JOIN status_order ON form_entry.id_status_order = status_order.id_status_order WHERE status_order.id_status_order = 1 and form_entry.matricula = ?', [matricula])
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}