import { pool } from "../dbconfig.js";

export const getStatus = async (req, res) => {
  try{
    const {matricula} = req.body
    const [row] = await pool.query('SELECT order_status, form_entry.date_entry,form_entry.reason, form_entry.id_form_entry, customer.name, form_entry.matricula FROM form_entry INNER JOIN status_order ON form_entry.id_status_order = status_order.id_status_order INNER JOIN customer ON form_entry.identification = customer.identification WHERE status_order.id_status_order = 1 AND form_entry.matricula = ?', [matricula])
    res.json(row)
  }catch (error){
    return res.status(404).json({       
      message: "Register in database was not found",
    });
  }
}