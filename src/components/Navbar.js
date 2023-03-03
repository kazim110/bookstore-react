import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Catagories">Catagories</NavLink>
    </div>
  </nav>
);
export default Navbar;
