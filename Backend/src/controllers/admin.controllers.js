import { pool } from "../dbconfig.js";

export const CountUser = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT(*) FROM customer")
    res.send(row)
  } catch (error) {
    return res.status(404).json({
      message: "Not found",
    })
  }
}

export const CountVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT(*) FROM vehicle")
    res.send(row)
  } catch (error) {
    return res.status(1000).json({
      message: "NO SIRVO PARA ESTO, MEJOR ME VOY A TIRAR PALA"
    })
  }
}

export const CountEmployed = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT(*) FROM employed")
    res.send(row)
  } catch (error) {
    return res.status(1000).json({
      message: "NO SIRVO PARA ESTO, MEJOR ME VOY A TIRAR PALA"
    })
  }
}

export const CountProduct = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT COUNT(*) FROM inventory")
    res.send(row)
  } catch (error) {
    return res.status(1000).json({
      message: "NO SIRVO PARA ESTO, MEJOR ME VOY A TIRAR PALA"
    })
  }
}

/* 
export const CountVehicle = async (req, res) => {
  try {
    const [row] = await pool.query("")
  } catch (error) {
    return res.status(1000).json({
      message: ""
    })
  }
} */