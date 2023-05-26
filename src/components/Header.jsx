import { NavList, HeaderWrap, NavLinkStyled } from './styled-components';

export const Header = () => {
  return (
    <HeaderWrap>
      <nav>
        <NavList>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </li>
        </NavList>
      </nav>
    </HeaderWrap>
  );
};
