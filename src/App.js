import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const getInitialTasks = () => {
    const taskFromLocalStorage = localStorage.getItem("tasks");
    return taskFromLocalStorage
        ? JSON.parse(taskFromLocalStorage)
        : []
};
function App() {
    const [hideDone, setHideDone] = useState(false);
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => (
            task.id === id 
            ? {...task, done: !task.done } 
            : task
        )));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);

    };
    return (
        <Container>
            <Header title="Lista zadań - Todolist" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />
            <Section
                title="Lista twoich zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone} />
                }
                plusHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone} />
                }
            />
            <Footer
                footer="Lista zadań - Todolist HTML/CSS/JS &copy; 2023 created by"
                link="https://github.com/MateuszPiaszczyk"
                author=" Mateusz Piaszczyk"
            />
        </Container>
    );
}

export default App;