import { StyledFooter, Link } from "./styled";

const AuthorPageLink = "https://github.com/MateuszPiaszczyk";
const FooterDescription =
  "Lista zadań - Todolist HTML/CSS/JS © 2023 created by";
const Author = " Mateusz Piaszczyk";

const Footer = () => (
  <StyledFooter>
    {FooterDescription}
    <Link href={AuthorPageLink}>{Author}</Link>
  </StyledFooter>
);

export default Footer;
