import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  color: #ffffff;
  background-color: #70787f;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavList = styled.ul`
  padding: 0px 20px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 30px 0px;
  &.active {
    color: orange;
  }
`;

export const LinkStyled = styled(Link)`
  &:hover {
    color: orange;
  }
`;
