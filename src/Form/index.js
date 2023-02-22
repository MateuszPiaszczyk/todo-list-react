import React from "react";
import "./style.css" ;

const Form = () => (
    <form className="form">
        <input className="form__input js-newTask" type="text" placeholder="Wpisz jakieś zadanie" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
)
export default Form;