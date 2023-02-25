import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input js-newTask"
                type="text"
                placeholder="Wpisz jakieś zadanie"
                onChange={({ target }) => setNewTaskContent(target.value)} />

            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};
export default Form;