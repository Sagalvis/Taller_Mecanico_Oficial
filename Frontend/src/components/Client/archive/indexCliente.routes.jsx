import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexUs from "../Us/indexUs";
const ClientRoutes = () => {
  return ( 
    <Router>
      <Route path="/us" element = {<IndexUs/>} />
    </Router>
  );
}

export default ClientRoutes;