import LayoutInventory from "./Layout/layoutInventory"
import { ContainerInventory } from "./styledInventory";
import RouterInvetory from "./Routers/router.inventory"

const Inventory = () => {
  return (  
    <div>
      <ContainerInventory>
        <LayoutInventory>
          <RouterInvetory/>
        </LayoutInventory>
      </ContainerInventory>
    </div>
  );
}

export default Inventory;