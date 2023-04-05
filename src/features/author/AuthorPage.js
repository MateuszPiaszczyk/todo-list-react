import Container from "../../common/Container";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="o Autorze" />
    <Section
      title="Mateusz Piaszczyk"
      body={
        <>
          <p>
            Nazywam się Mateusz Piaszczyk i jestem{" "}
            <strong>grafikiem komputerowym</strong>, a także mam nadzieje przyszłym {" "}
            <strong>front-end developerem</strong> 😊.
          </p>
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
