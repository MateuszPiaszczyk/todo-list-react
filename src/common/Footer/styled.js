import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 12px;
  text-align: center;
  padding: 0 20px;

  ${({ link }) =>
    link &&
    css`
      text-decoration: none;
      color: ${({ theme }) => theme.color.teal};
    `}
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
  
`;
