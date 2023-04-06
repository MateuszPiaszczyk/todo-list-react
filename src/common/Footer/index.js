import { StyledFooter, Link } from "./styled";

const AuthorPageLink = "https://github.com/MateuszPiaszczyk"

const Footer = ({ footer, link, author }) => (
 <StyledFooter>
    {footer}
    <Link href={link}>{author}</Link>
  </StyledFooter>
);

export default Footer;
