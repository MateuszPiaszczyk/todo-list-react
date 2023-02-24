import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons__button">
                    {hideDone ? "Wyświetl" : "Ukryj"} ukonczone
                </button>
                <button
                    onClick={setAllDone}
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