import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Search from "./Search";
import FetchExampleTaskButton from "./FetchExampleTaskButton";
import Container from "../../../common/Container";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań - Todolist" />
      <Section
        title="➕ Dodaj nowe zadanie"
        body={<Form />}
        plusHeaderContent={<FetchExampleTaskButton />}
      />
      <Section 
        title=" 🔍 Szukajka" 
        body={<Search />} 
      />
      <Section
        title="📋 Lista twoich zadań"
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

export default TasksPage;
