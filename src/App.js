import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

const tasks = [
    { id: 1, content: "test", done: false },
    { id: 2, content: "test2", done: false },
];

const hideDone = false;
function App() {
    return (
        <Container>
            <Header title="Lista zadań - Todolist" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section
                title="Lista twoich zadań"
                body={<Tasks tasks={tasks} hideDone={hideDone} />}
                plusHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
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
