import { StyledFooter } from "./styled";

const AuthorPageLink = "https://github.com/MateuszPiaszczyk"

const Footer = ({ footer, author }) => (
 <StyledFooter>
    {footer}
    <AuthorPageLink>{author}</AuthorPageLink>
  </StyledFooter>
);

export default Footer;
