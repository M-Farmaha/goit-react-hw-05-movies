import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { NavLink, Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  color: #ffffff;
  background-color: #223c56;
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
  padding: 26px 0px;

  font-size: 25px;
  font-weight: 700;

  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #83c1ff;
  }
  &.active {
    color: #0080ff;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  padding: 0px 20px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #7b9ab9;
  background-color: #ffffff;
  box-shadow: 0px 8px 10px -1px rgba(30, 92, 154, 0.1);
`;

export const HomeList = styled.ul`
  padding: 10px 20px;
`;

export const FormWrap = styled.div`
  padding: 0px 20px;
  height: 60px;
  display: flex;
  align-items: center;
  color: #7b9ab9;
  background-color: #ffffff;
  box-shadow: 0px 8px 10px -1px rgba(30, 92, 154, 0.1);
`;

export const Form = styled.form`
  display: flex;
  width: 400px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  font-size: 20px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0px 20px;
  color: #4e9bc7;
  background-color: #f4f8ff;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border: none;
  color: #ffffff;
  background-color: #9fb0d0;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #788eb6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 54px 55px,
      rgba(0, 0, 0, 0.1) 0px -12px 30px, rgba(0, 0, 0, 0.1) 0px 4px 6px,
      rgba(0, 0, 0, 0.1) 0px 12px 13px, rgba(0, 0, 0, 0.1) 0px -3px 5px;
  }
`;

export const SearchFormIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
`;

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  color: #274560;

  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #76baff;
  }
`;

export const MovieWrap = styled.div`
  padding: 20px;
  color: #274560;
  background-color: #ecf6ff;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  background-color: #9fb0d0;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #788eb6;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 54px 55px,
      rgba(0, 0, 0, 0.1) 0px -12px 30px, rgba(0, 0, 0, 0.1) 0px 4px 6px,
      rgba(0, 0, 0, 0.1) 0px 12px 13px, rgba(0, 0, 0, 0.1) 0px -3px 5px;
  }
`;

export const ImageWrap = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 300px;
  height: 450px;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ImagePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AddSection = styled.div`
  font-size: 18px;
  color: #274560;
  background-color: #ffffff;
  padding: 20px;
`;

export const AddWrap = styled.ul`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

export const CastList = styled.ul`
  font-size: 14px;
  font-weight: 400;
  color: #607180;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  width: 92px;
`;

export const CastImageWrap = styled.div`
  width: 92px;
  height: 138px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

export const Review = styled.li`
  margin-bottom: 20px;
`;
