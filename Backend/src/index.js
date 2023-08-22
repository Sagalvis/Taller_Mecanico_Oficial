import express from "express";
// import bodyParser from "body-parser";
import router from "./routes/users.route.js";
import cors from "cors"




const app = express();

app.use(express.json());
/* inicial backend */
app.use(cors());
//app.use(bodyParser.json());
//final backend
app.use(router)

app.listen(3005, () =>{
  console.log(`estoy corriendo en el puerto 3005`)
});



