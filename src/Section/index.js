import React from "react";
import "./style.css";

const Section = ({ title, body, plusHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__title">
                {title}
            </h2>
            {plusHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
);

export default Section;