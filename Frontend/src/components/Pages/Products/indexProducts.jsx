import Header from '../../Header/indexHeader';
import { ContainerProducts } from "./styledProducts";
import Footer from "../../Footer/indexFooter"

const Products = () => {
  return ( 
    <div>
      <Header/>
      <ContainerProducts>
        <h1>Productos</h1>
      </ContainerProducts>
      <Footer/>
    </div>
  );
}

export default Products;