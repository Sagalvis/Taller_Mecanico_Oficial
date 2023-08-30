import { Service, ServiceImg, ServiceType } from "./styles/StyledServices";


function Services({img, type}) {
  return (
    <>
    <Service>
      <ServiceImg src={img} alt="image"/>
      <ServiceType>
        {type}
      </ServiceType>
    </Service>
    </>
  )
}

export default Services;