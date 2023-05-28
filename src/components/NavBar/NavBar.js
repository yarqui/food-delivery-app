import { Navigation, NavLinkStyled } from './NavBar.styled';
const NavBar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <Navigation>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/cart">
        Cart <span>{totalItems === 0 ? '' : totalItems}</span>
      </NavLinkStyled>
    </Navigation>
  );
};

export default NavBar;
