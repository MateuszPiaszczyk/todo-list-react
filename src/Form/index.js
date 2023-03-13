import { useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (contentTrimmed === "") {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        type="text"
        placeholder="Wpisz jakieś zadanie"
        required
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />

      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  );
};
export default Form;
