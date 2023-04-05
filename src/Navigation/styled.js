import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 0;
`;
export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }

  &:active {
    font-weight: bold;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  margin: 20px;
`;
