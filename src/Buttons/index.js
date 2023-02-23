import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
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
            </>
        )}
    </div>

);

export default Buttons;