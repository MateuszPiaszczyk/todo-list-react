import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      color: ${({ theme }) => theme.color.teal};
      text-decoration: line-through;
    `}
`;
export const StyledNavLink = styled(Link)`
  color: ${({ theme }) => theme.color.teal};
  text-decoration: none;
`;
export const Button = styled.button`
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  transition: background 0.5s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.forestGreen};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.crimson};
    `}

    &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
