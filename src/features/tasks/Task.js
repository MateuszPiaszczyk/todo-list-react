import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import Footer from "../../common/Footer";

function Task() {

  return (
    <Container>
      <Header title="Lista zadań - Todolist" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista twoich zadań"
        body={<TaskList />}
        plusHeaderContent={<Buttons />}
      />
      <Footer
        footer="Lista zadań - Todolist HTML/CSS/JS &copy; 2023 created by"
        link="https://github.com/MateuszPiaszczyk"
        author=" Mateusz Piaszczyk"
      />
    </Container>
  );
}

export default Task;
