import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Footer from "../../../common/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../taskSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Opis zadania" />
      <Section
        title={task ? task.content : "Nie ma takiego zadania :("}
        body={
          <>
            <strong>Ukończone:</strong>
            {" "}{task.done ? "Tak" : "Nie"}
          </>
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

export default TaskPage;
