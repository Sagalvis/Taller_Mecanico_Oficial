import { ContainerPerfil } from "./styledProfile"
import Header from '../../Header/indexHeader'
import Footer from "../../Footer/indexFooter"

const  Profile = () => {
  return (
    <div>
      <Header></Header>
      <ContainerPerfil>
        <h1>Profile</h1>
      </ContainerPerfil>
      <Footer/>
    </div>
  )
}

export default Profile
