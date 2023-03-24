import { StyledFooter, Link } from "./styled";

const Footer = ({ footer, link, author }) => (
 <StyledFooter>
    {footer}
    <Link href={link}>{author}</Link>
  </StyledFooter>
);

export default Footer;
