import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Footer from "../../../common/Footer";
import Search from "./Search";
import FetchExampleTaskButton from "./FetchExampleTaskButton";
import { Container } from "../../../common/Section/styled";


const TasksPage = () => {
  return (
    <Container>
      <Header title="Lista zadań - Todolist" />
      <Section
        title="➕ Dodaj nowe zadanie"
        body={<Form />}
        additionalHeaderContent={<FetchExampleTaskButton />}
      />
      <Section 
        title=" 🔍 Szukajka" 
        body={<Search />} 
      />
      <Section
        title="📋 Lista twoich zadań"
        body={<TaskList />}
        additionalHeaderContent={<Buttons />}
      />

      <Footer/>
    </Container>
  );
}

export default TasksPage;
