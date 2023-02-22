import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    className="buttons__button"
                >
                    {hideDoneTask ? "Wyświetl" : "Ukryj"} ukonczone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Zakończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>

);

export default Buttons;