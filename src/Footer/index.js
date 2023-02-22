import React from "react";
import "./style.css";

const Footer = ({footer, link, author}) => (
    <footer className="footer">
        {footer}
        <a className="footer__link" href={link}>
        {author}
        </a>
    </footer>
);

export default Footer;