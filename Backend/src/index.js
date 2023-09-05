import express from "express";
// import bodyParser from "body-parser";
import router from "./routes/customer.routes.js";
import router1 from "./routes/employed.routes.js";
import router2 from "./routes/inventory.routes.js";
import router3 from "./routes/admin.routes.js"
import router4 from "./routes/vehicle.routes.js";
import router5 from "./routes/select.routes.js"
import router6 from "./routes/form_entrada.routes.js"
import router7 from "./routes/practica.routes.js";
import router8 from "./routes/orderservices.routes.js";
import cors from "cors"

const app = express();

app.use(express.json());
/* inicial backend */
app.use(cors());
//app.use(bodyParser.json());
//final backend
app.use(router, router1, router2, router3, router4, router5, router6, router7, router8)

app.listen(3005, () =>{
  console.log(`estoy corriendo en el puerto 3005`)
});