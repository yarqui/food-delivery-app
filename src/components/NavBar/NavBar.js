import { Navigation, NavLinkStyled } from './NavBar.styled';
const NavBar = () => {
  return (
    <Navigation>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/cart">Cart</NavLinkStyled>
    </Navigation>
  );
};

export default NavBar;
