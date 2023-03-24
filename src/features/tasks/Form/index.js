import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (contentTrimmed === "") {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        type="text"
        placeholder="Wpisz jakieś zadanie"
        onChange={({ target }) => setNewTaskContent(target.value)}
        autoFocus
      />

      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  );
};
export default Form;
