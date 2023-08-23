import Nabvar from '../Client/Navbar'
import Footer from './Footer';
import { AgendaTitle, Button, Form, InfoForm, Input } from './styles/StyledSchedule';
import { ContainFooter, ContainRoute } from './styles/styledVehicle'

function Schedule() {

  function acceptNum(evt) {
    const input = evt.target.value;
    evt.target.value = input.replace(/[^\d]/g, '');
}

  return (
    <>
    <Nabvar />
    <ContainRoute>
      <InfoForm>
        <div>
        <AgendaTitle>¡Agenda tu cita aqui!</AgendaTitle>
        </div>
        <Form>
          <Input 
          type='text'
          required
          autoComplete='off'
          placeholder='Nombre completo'/>

          <Input 
          type='date'
          required
          autoComplete='off'
          placeholder='Fecha'/>

          <Input 
          type='email'
          required
          autoComplete='off'
          placeholder='Correo electronico'/>

          <Input 
          type='text'
          required
          onInput={(evt) => acceptNum(evt)}
          minLength={4}
          maxLength={15}
          autoComplete='off'
          placeholder='Numero de documento'/>

          <Input 
          type='tel'
          required
          autoComplete='off'
          placeholder='Telefono'/>

          <label htmlFor="tipoServicio">Tipo de servicio:</label>

          <select style={{fontFamily: 'Outfit, sans-serif', fontWeight: '500'}} name="tipoServicio" id="tipoServicio">
            <option value="">Selecciona tu servicio aqui</option>
            <option value="Servicio1">Pintura</option>
            <option value="Servicio2">Lamina</option>
            <option value="Servicio3">Electrico</option>
            <option value="Servicio4">Aire acondicionado</option>
            <option value="Servicio5">Mecanica General</option>
            <option value="Servicio6">Otro</option>
          </select>
        </Form>
        <Button>Agendar</Button>
      </InfoForm>

    </ContainRoute>
      <ContainFooter>
      <Footer
          titleCompany="About Company"
          textCompany="En Transfor CARS, somos un equipo apasionado de expertos en mecánica automotriz.Con años de experiencia en el sector, nos enorgullece ofrecer servicios de alta calidad y soluciones confiables para mantener tu vehículo en óptimas condiciones..."
          titleHelp="Help and advice"
          titleAbout="About us"
          titleContact="Contact Us"
          Copyright="Copyright &copy; 2023 Transfor CARS. All Rights"
        />
      </ContainFooter>
    </>
  )
}

export default Schedule;
