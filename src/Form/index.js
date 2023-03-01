import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        const contentTrimmed = newTaskContent.trim();

        if (contentTrimmed === "") {
            return;
        }
        
        addNewTask(contentTrimmed);
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__input js-newTask"
                type="text"
                placeholder="Wpisz jakieś zadanie"
                required
                autoFocus
                onChange={({ target }) => setNewTaskContent(target.value)} />

            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};
export default Form;