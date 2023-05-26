import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
};

export default NavBar;
