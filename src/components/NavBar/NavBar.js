import { Navigation, NavLinkStyled } from './NavBar.styled';
import PropTypes from 'prop-types';

const NavBar = ({ cartItems }) => {
  const totalItems = cartItems.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <Navigation>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/cart">
        Cart <span>{totalItems === 0 ? '' : totalItems}</span>
      </NavLinkStyled>
      <NavLinkStyled to="/history">History</NavLinkStyled>
    </Navigation>
  );
};

NavBar.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default NavBar;
