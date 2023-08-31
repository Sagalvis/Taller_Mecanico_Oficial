import {
  ContainHistorial,
  ContainMainOrder,
  ContainOrder,
  ConteProductos,
  HistorialMain,
  OrderConte,
  OrderFirma,
  OrderMain,
  Productos,
  TextArea,
  TitleOrderContainLogo,
  TittleOrder,
  TittleOrderName,
  TittleOrderNameParagraf,
  TittleOrderParagraf,
} from "./styles/styledOrder";
import Logo from "../../../assets/svg/transforCars.svg";

const OrderService = () => {
  return (
    <>
      <ContainMainOrder>
        <ContainOrder>
          <OrderMain>
            <TittleOrder>
              <TitleOrderContainLogo>
                <img src={Logo} alt="logo" />
              </TitleOrderContainLogo>
              <TittleOrderNameParagraf>
                <TittleOrderName><h2>Taller TransforCARS</h2></TittleOrderName>
                <TittleOrderParagraf>
                  <p>Calle 47 # 20 – 82 – Vía Cordialidad</p>
                  <p>Email: infotranforcar@gmail.com</p>
                  <p>Telefono: 30145266666</p>
                </TittleOrderParagraf>
              </TittleOrderNameParagraf>
            </TittleOrder>
            <OrderConte>
              <TextArea placeholder="Motivo de ingreso" rows={5} cols={50}/>
              <TextArea placeholder="Observacion Mecanico" rows={5} cols={15}/>
              <Productos>
                <h3>Productos</h3>
                <ConteProductos>
                  
                </ConteProductos>
              </Productos>
            </OrderConte>
            <OrderFirma></OrderFirma>
          </OrderMain>
        </ContainOrder>
        <ContainHistorial>
          <HistorialMain></HistorialMain>
        </ContainHistorial>
      </ContainMainOrder>
    </>
  );
};

export default OrderService;
