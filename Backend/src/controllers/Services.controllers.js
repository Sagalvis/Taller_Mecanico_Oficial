import { query } from "express";
import { pool } from "../dbconfig.js"; 

//------------------------------Crear-----------------------------------------//

export const createServices = async(req,res) => {
    try {
        //se crea una constante 
        const { name_service , imgurl , status , price, num_employed} = req.body;

        //se mandan a llamar los valores en la db con la query
        const query = "INSERT INTO service( name_service ,imgurl ,status ,price ,num_employed) VALUES(?,?,?,?,?)";

        //aca se guardan los valores en un array
        const values = [name_service,imgurl,status,price,num_employed];
        
        //se envia la pool que esta conectada la base de datos utilizando query, values que son las constantes que se crearon anteriormente
        await pool.query(query,values);
        //se usa el resstatus realizando un estado de la query si se realiza con exito
        res.status(200).json({
            message: 'Creado con exito 💖💖'
        });
    } catch (error) {
        console.error("Error al tratar de crear un Service", error);
        res.status(500).json({error: 'Error en el servidor'});
    }
}
//---------------------------------Read------------------------------------------//

export const getservices = async (req, res) =>{
    const {id} = req.params
    const [rows] = await pool.query('SELECT * FROM service where id_service = ?', [id])
    if (rows.length <= 0) {
        res.status(404).json({mensage: 'no se encuentra'})
    }
    res.json(rows[0])
}

export const getTodosservices = async (req, res) =>{
    const [rows] = await pool.query('SELECT * FROM service')
    res.json(rows)
}


//------------------------------Update-----------------------------------------//

export const updateService = async (req, res) =>{
    try {
        const { id_service } = req.params
        const {name_service, imgurl, status, price, num_employed} = req.body;
        const call = ('UPDATE service set name_service = ifnull(?,name_service), imgurl = ifnull(?,imgurl), status = ifnull(?,status), price = ifnull(?,price), num_employed = ifnull(?,num_employed) where id_service = ?')
        const Arreglo = [name_service, imgurl, status,  price, num_employed, id_service];
        const [rows] = await pool.query(call, Arreglo)
        if (rows.afectedRows === 0){
            res.sendStatus(404).json({message: 'not found'})
        }else{
            console.log('Ups algo salio malo 😔')
        }// const [result] = await pool.query('SELECT * FROM service where id_service = ?', [id])
        res.json(rows[0])
    } catch (error) {
    res.status(500).json({error: 'Error servidor '})    
    }
}

//------------------------------Delete-----------------------------------------//

export const deleteService = async(req,res) => {
    try {
        const [rows] = await pool.query('DELETE  FROM service where id_service = ?  ', [req.params.id])
        if (rows.affectedRows <= 0) {
            res.status(404).json({mensage: 'not found'})
        }else{
            res.status(200).json({mensage: 'Se elimino correcta mente😂😂😂'})
        }
    } catch (error) {
        res.status(500).json({mensage: 'Error server petaquiao😔😔😔'})
    }
}