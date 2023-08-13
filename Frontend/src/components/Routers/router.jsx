import {Link} from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/service">servicios</Link>
            <Link to="/product">Productos</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Layout;
