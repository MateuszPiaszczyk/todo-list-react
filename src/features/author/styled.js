import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
`;

export const Description = styled.div`
  line-height: 1.5;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const Image = styled.img`
    display: grid:
    border-radius: 50%;
    max-width: 300px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.teal};
    padding-bottom: 10px;
    margin: 0;   
`;

export const Youcode = styled.span`
    color: ${({ theme }) => theme.color.teal};
    
`;