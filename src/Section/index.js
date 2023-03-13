import React from "react";
import { Wrapper, Header, Title, Body } from "./styled";

const Section = ({ title, body, plusHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>{title}</Title>
      {plusHeaderContent}
    </Header>

    <Body>{body}</Body>
  </Wrapper>
);

export default Section;