import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
                className={`tasks__item${task.done && props.hideDoneTask ? " tasks__item--hidden" : ""}`}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? " ✓ " : ""}
                </button>
                <span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑️
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;