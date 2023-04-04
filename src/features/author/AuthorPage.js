import Container from "../../common/Container";
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
  </Container>
);
