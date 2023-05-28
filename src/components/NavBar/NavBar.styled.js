import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
  padding: 24px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 20px;
  display: flex;
  gap: 10px;

  color: #2d9bf0;
  text-decoration: none;

  &.active {
    color: tomato;
    border-bottom: 2px solid tomato;
  }
`;
