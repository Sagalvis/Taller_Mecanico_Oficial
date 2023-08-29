import express from "express";
// import bodyParser from "body-parser";
import router from "./routes/customer.routes.js";
import router1 from "./routes/employed.routes.js";
import router2 from "./routes/inventory.routes.js";
import router3 from "./routes/admin.routes.js"
import router5 from "./routes/hojaVida.routes.js"
import cors from "cors"

const app = express();

app.use(express.json());
/* inicial backend */
app.use(cors());
//app.use(bodyParser.json());
//final backend
app.use(router, router1, router2, router3, router5)

app.listen(3005, () =>{
  console.log(`estoy corriendo en el puerto 3005`)
});



