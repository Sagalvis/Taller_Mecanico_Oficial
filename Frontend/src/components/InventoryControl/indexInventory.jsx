import LayoutInventory from "./LayoutInventory/layoutInventory"
import { ContainerInventory } from "./styledInventory";
import RouterInvetory from "./Routers/router.inventory"
import SidebardInv from "./SidebarInventory/indexSidebarIn";

const Inventory = () => {
  return (  
    <div>
      <ContainerInventory>
        <SidebardInv/>
        <LayoutInventory>
          <RouterInvetory/>
        </LayoutInventory>
      </ContainerInventory>
    </div>
  );
}

export default Inventory;