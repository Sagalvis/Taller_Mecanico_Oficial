import { pool } from "../dbconfig.js";

export const CountUser = async (req, res) => {
  try {
    const [row] = await pool.query("select count(*) from customer")
    res.send(row)
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    })
  }
}