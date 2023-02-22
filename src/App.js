import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Conteiner from "./Conteiner";
import Footer from "./Footer";

const tasks = [
    { id: 1, content: "test", done: true },
    { id: 2, content: "test2", done: false },
];

const hideDoneTask = false;
function App() {
    return (
        <Conteiner>
            <Header title="Lista zadań - Todolist" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Lista twoich zadań"
                body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
                plusHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
            />
            <Footer
                footer="Lista zadań - Todolist HTML/CSS/JS &copy; 2023 created by"
                link="https://github.com/MateuszPiaszczyk"
                author=" Mateusz Piaszczyk"
            />
        </Conteiner>
    );
}

export default App;
