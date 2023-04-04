import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import Search from "../Search";


function TasksPage() {
  

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
      <Section
        title="Szukajka"
        body={<Search />}
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
